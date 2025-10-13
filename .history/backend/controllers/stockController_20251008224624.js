const axios = require("axios");
const { HttpsProxyAgent } = require("https-proxy-agent");
const { CookieJar } = require("tough-cookie");
const NodeCache = require("node-cache");
const { getCookieString } = require("../functions/cookieString");


// Cache for 60 seconds to avoid hitting NSE too frequently
const cache = new NodeCache({ stdTTL: 60, checkperiod: 120 });

// Session pool to reuse cookies across requests
const sessionPool = {
  jar: null,
  lastUsed: 0,
  maxAge: 180000 * 15, // 3 minutes (reduced from 5)
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const commonHeaders = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  "Accept-Language": "en-US,en;q=0.9",
  "Accept-Encoding": "gzip, deflate, br",
  "Connection": "keep-alive",
  "Upgrade-Insecure-Requests": "1",
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-User": "?1",
  "Cache-Control": "max-age=0",
};


async function getOrCreateSession(symbol, forceNew = false) {
  const now = Date.now();
  
  // Reuse existing session if it's fresh
  if (!forceNew && sessionPool.jar && (now - sessionPool.lastUsed) < sessionPool.maxAge) {
    console.log("♻️  Reusing existing session");
    sessionPool.lastUsed = now;
    return sessionPool.jar;
  }

  console.log("🔄 Creating new session with full flow...");
  const jar = new CookieJar();

  try {
    // Step 1: Visit homepage
    const homeUrl = "https://www.nseindia.com";
    const homeResponse = await axios.get(homeUrl, {
      httpsAgent: agent,
      headers: {
        ...commonHeaders,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
      },
      timeout: 20000,
    });
    storeCookies(jar, homeUrl, homeResponse);
    console.log("  ✓ Homepage visited");

    // Wait 2 seconds
    await delay(2000);

    // Step 2: Visit the specific quote page (IMPORTANT!)
    const quotePageUrl = `https://www.nseindia.com/get-quotes/equity?symbol=${symbol}`;
    const quotePageResponse = await axios.get(quotePageUrl, {
      httpsAgent: agent,
      headers: {
        ...commonHeaders,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "Referer": "https://www.nseindia.com/",
        "Cookie": getCookieString(jar, quotePageUrl),
      },
      timeout: 20000,
    });
    storeCookies(jar, quotePageUrl, quotePageResponse);
    console.log("  ✓ Quote page visited");

    const cookies = jar.getCookiesSync(homeUrl);
    console.log(`  ✓ Cookies obtained: ${cookies.map(c => c.key).join(', ')}`);

    // Wait 2 more seconds before allowing API calls
    await delay(2000);

    sessionPool.jar = jar;
    sessionPool.lastUsed = now;
    console.log("✅ Session ready");
    
    return jar;
  } catch (error) {
    console.error("❌ Session creation failed:", error.message);
    throw error;
  }
}

async function fetchNSEData(symbol) {
  const jar = await getOrCreateSession(symbol);
  
  const apiUrl = `https://www.nseindia.com/api/quote-equity?symbol=${symbol}`;
  const refererUrl = `https://www.nseindia.com/get-quotes/equity?symbol=${symbol}`;
  
  const response = await axios.get(apiUrl, {
    httpsAgent: agent,
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      "Accept": "application/json, text/plain, */*",
      "Accept-Language": "en-US,en;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
      "Referer": refererUrl,
      "X-Requested-With": "XMLHttpRequest",
      "Connection": "keep-alive",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "Cookie": getCookieString(jar, apiUrl),
    },
    timeout: 20000,
  });

  return response.data;
}

module.exports.getLivePrice = async (req, res) => {
  let {q} = req.query;
  const symbol =  .params.symbol.toUpperCase();
   try {
    // Check cache first
    const cached = cache.get(symbol);
    if (cached) {
      console.log(`✅ Cache hit for ${symbol} (${Date.now() - startTime}ms)`);
      return res.json({
        success: true,
        cached: true,
        data: cached,
        responseTime: `${Date.now() - startTime}ms`
      });
    }

    console.log(`🔍 Fetching ${symbol}...`);
    const data = await fetchNSEData(symbol);

    // Cache the result
    cache.set(symbol, data);

    console.log(`✅ Fetched ${symbol} (${Date.now() - startTime}ms)`);
    res.json({
      success: true,
      cached: false,
      data: data,
      responseTime: `${Date.now() - startTime}ms`
    });

  } catch (error) {
    console.error(`❌ Error for ${symbol}:`, error.message);
    
    // If session expired or blocked, try once more with new session
    if (error.response?.status === 401 || error.response?.status === 403) {
      try {
        console.log("🔄 Retrying with fresh session...");
        sessionPool.jar = null; // Clear old session
        await delay(1000); // Small delay before retry
        const data = await fetchNSEData(symbol);
        cache.set(symbol, data);
        
        return res.json({
          success: true,
          cached: false,
          data: data,
          responseTime: `${Date.now() - startTime}ms`,
          note: "Retried with new session"
        });
      } catch (retryError) {
        console.error("❌ Retry failed:", retryError.message);
        return res.status(500).json({
          success: false,
          error: retryError.message,
          symbol: symbol,
          responseTime: `${Date.now() - startTime}ms`,
          hint: "NSE may be blocking requests. Try again in a minute."
        });
      }
    }

    res.status(500).json({
      success: false,
      error: error.message,
      symbol: symbol,
      responseTime: `${Date.now() - startTime}ms`
    });
  }
};