const axios = require("axios");
const { HttpsProxyAgent } = require("https-proxy-agent");
const { CookieJar } = require("tough-cookie");
const NodeCache = require("node-cache");
const { getCookieString, storeCookies } = require("../functions/cookieString");
require("dotenv").config();

// Cache for 120 seconds
const cache = new NodeCache({ stdTTL: 120, checkperiod: 120 });

// Session pool to reuse cookies across requests
const sessionPool = {
  jar: null,
  lastUsed: 0,
  maxAge: 180000, // 3 minutes
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Use hardcoded proxy (confirmed working)
const proxy = "http://HighSylvie134-country-in:3XgQdO7zrYVBXtZT@p52.boltproxies.net:10055";
const agent = new HttpsProxyAgent(proxy);

console.log(`🔧 Proxy configured: ${proxy.split('@')[1]}`);

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
    console.log(`📍 [1/3] Fetching homepage: ${homeUrl}`);
    const homeStart = Date.now();
    
    const homeResponse = await axios.get(homeUrl, {
      httpsAgent: agent,
      headers: {
        ...commonHeaders,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
      },
      timeout: 25000, // Increased timeout
    });
    
    console.log(`  ✓ Homepage loaded in ${Date.now() - homeStart}ms (Status: ${homeResponse.status})`);
    storeCookies(jar, homeUrl, homeResponse);
    console.log(`  ✓ Cookies stored: ${jar.getCookiesSync(homeUrl).length}`);

    // Wait 2 seconds
    console.log("  ⏳ Waiting 2s before next request...");
    await delay(2000);

    // Step 2: Visit the specific quote page (IMPORTANT!)
    const quotePageUrl = `https://www.nseindia.com/get-quotes/equity?symbol=${symbol}`;
    console.log(`📍 [2/3] Fetching quote page: ${quotePageUrl}`);
    const quoteStart = Date.now();
    
    const quotePageResponse = await axios.get(quotePageUrl, {
      httpsAgent: agent,
      headers: {
        ...commonHeaders,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "Referer": "https://www.nseindia.com/",
        "Cookie": getCookieString(jar, quotePageUrl),
      },
      timeout: 25000, // Increased timeout
    });
    
    console.log(`  ✓ Quote page loaded in ${Date.now() - quoteStart}ms (Status: ${quotePageResponse.status})`);
    storeCookies(jar, quotePageUrl, quotePageResponse);
    console.log(`  ✓ Cookies after quote page: ${jar.getCookiesSync(homeUrl).length}`);

    const cookies = jar.getCookiesSync(homeUrl);
    console.log(`  ✓ Cookie names: ${cookies.map(c => c.key).join(', ')}`);

    // Wait 2 more seconds before allowing API calls
    console.log("  ⏳ Waiting 2s before API call...");
    await delay(2000);

    sessionPool.jar = jar;
    sessionPool.lastUsed = now;
    console.log("✅ Session ready for API calls");
    
    return jar;
  } catch (error) {
    console.error("❌ Session creation failed:");
    console.error(`   Error: ${error.message}`);
    console.error(`   Code: ${error.code}`);
    console.error(`   Status: ${error.response?.status}`);
    if (error.response?.data) {
      console.error(`   Response: ${JSON.stringify(error.response.data).substring(0, 200)}`);
    }
    throw error;
  }
}

async function fetchNSEData(symbol) {
  console.log(`📍 [3/3] Fetching API data for ${symbol}...`);
  const jar = await getOrCreateSession(symbol);
  
  const apiUrl = `https://www.nseindia.com/api/quote-equity?symbol=${symbol}`;
  const refererUrl = `https://www.nseindia.com/get-quotes/equity?symbol=${symbol}`;
  
  const apiStart = Date.now();
  console.log(`   URL: ${apiUrl}`);
  
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
    timeout: 25000, // Increased timeout
  });

  console.log(`   ✓ API response received in ${Date.now() - apiStart}ms (Status: ${response.status})`);
  return response.data;
}

module.exports.getLivePrice = async (req, res) => {
  const symbol = req.params.symbol.toUpperCase();
  const startTime = Date.now();
  
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

    console.log(`\n🔍 Fetching ${symbol}...`);
    const data = await fetchNSEData(symbol);

    // Cache the result
    cache.set(symbol, data);

    console.log(`✅ Fetched ${symbol} (${Date.now() - startTime}ms)\n`);
    res.json({
      success: true,
      cached: false,
      data: data,
      responseTime: `${Date.now() - startTime}ms`
    });

  } catch (error) {
    console.error(`❌ Error for ${symbol} (${Date.now() - startTime}ms):`);
    console.error(`   Message: ${error.message}`);
    console.error(`   Code: ${error.code}`);
    console.error(`   Timeout: ${error.code === 'ECONNABORTED'}\n`);
    
    // If session expired or blocked, try once more with new session
    if (error.response?.status === 401 || error.response?.status === 403) {
      try {
        console.log("🔄 Retrying with fresh session...");
        sessionPool.jar = null; // Clear old session
        await delay(2000); // Increased delay before retry
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
      code: error.code,
      responseTime: `${Date.now() - startTime}ms`
    });
  }
};