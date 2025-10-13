const axios = require("axios");
const { HttpsProxyAgent } = require("https-proxy-agent");
const { CookieJar } = require("tough-cookie");
const NodeCache = require("node-cache");
const fs = require("fs");
const path = require("path");
const { getCookieString, storeCookies } = require("../functions/cookieString");
require("dotenv").config();

// Long-lived cache: 1 hour for live prices
const cache = new NodeCache({ stdTTL: 3600, checkperiod: 300 });

// Persistent session storage
const sessionFile = path.join(__dirname, "..", "cache", "nse_session.json");

// Session pool with MUCH longer TTL
const sessionPool = {
  jar: null,
  lastUsed: 0,
  maxAge: 3600000, // 1 hour - keep session alive much longer
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const proxy = "http://HighSylvie243-country-in:vXOpsIJ14vXVb1xT@p47.boltproxies.net:10055";
const agent = new HttpsProxyAgent(proxy);

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

// Ensure cache directory exists
function ensureCacheDir() {
  const dir = path.dirname(sessionFile);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Save session to disk
function saveSessionToDisk(jar) {
  try {
    ensureCacheDir();
    const cookies = jar.getCookiesSync("https://www.nseindia.com");
    const sessionData = {
      cookies: cookies.map(c => ({
        key: c.key,
        value: c.value,
        domain: c.domain,
        path: c.path,
        expires: c.expires
      })),
      savedAt: Date.now()
    };
    fs.writeFileSync(sessionFile, JSON.stringify(sessionData, null, 2));
    console.log("💾 Session saved to disk");
  } catch (err) {
    console.error("❌ Failed to save session:", err.message);
  }
}

// Load session from disk
function loadSessionFromDisk() {
  try {
    if (fs.existsSync(sessionFile)) {
      const data = JSON.parse(fs.readFileSync(sessionFile, "utf-8"));
      const savedAge = Date.now() - data.savedAt;
      
      // Only reuse if less than 2 hours old
      if (savedAge < 7200000) {
        const jar = new CookieJar();
        data.cookies.forEach(c => {
          try {
            jar.setCookieSync(
              `${c.key}=${c.value}; Domain=${c.domain}; Path=${c.path}`,
              "https://www.nseindia.com"
            );
          } catch (e) {
            // Skip invalid cookies
          }
        });
        console.log(`📂 Loaded ${data.cookies.length} cookies from disk (${Math.round(savedAge / 1000)}s old)`);
        return jar;
      } else {
        console.log("⏰ Saved session expired, creating new one");
      }
    }
  } catch (err) {
    console.error("❌ Failed to load session from disk:", err.message);
  }
  return null;
}

async function getOrCreateSession(symbol, forceNew = false) {
  const now = Date.now();
  
  // Check memory pool first
  if (!forceNew && sessionPool.jar && (now - sessionPool.lastUsed) < sessionPool.maxAge) {
    console.log("♻️  Reusing session from memory (active)");
    sessionPool.lastUsed = now;
    return sessionPool.jar;
  }

  // Try loading from disk
  if (!forceNew) {
    const diskSession = loadSessionFromDisk();
    if (diskSession) {
      sessionPool.jar = diskSession;
      sessionPool.lastUsed = now;
      console.log("✅ Using persisted session from disk");
      return diskSession;
    }
  }

  // Create new session
  console.log("🔄 Creating new session...");
  const jar = new CookieJar();

  try {
    // Step 1: Visit homepage
    const homeUrl = "https://www.nseindia.com";
    const homeResponse = await axios.get(homeUrl, {
      headers: {
        ...commonHeaders,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
      },
      timeout: 20000,
    });
    storeCookies(jar, homeUrl, homeResponse);
    console.log("  ✓ Homepage visited");

    await delay(600);

    // Step 2: Visit quote page
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
    console.log(`  ✓ Cookies obtained: ${cookies.length}`);

    await delay(400);

    sessionPool.jar = jar;
    sessionPool.lastUsed = now;
    
    // Save to disk for persistence
    saveSessionToDisk(jar);
    console.log("✅ New session ready");
    
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
  const symbol = req.params.symbol.toUpperCase();
  const startTime = Date.now();
   
  try {
    // Check cache first - returns in <1ms if hit
    const cached = cache.get(symbol);
    if (cached) {
      console.log(`✅ Cache HIT for ${symbol} (${Date.now() - startTime}ms)`);
      return res.json({
        success: true,
        cached: true,
        data: cached,
        responseTime: `${Date.now() - startTime}ms`
      });
    }

    console.log(`🔍 Fetching ${symbol}...`);
    const data = await fetchNSEData(symbol);

    // Cache for 1 hour
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
    
    if (error.response?.status === 401 || error.response?.status === 403) {
      try {
        console.log("🔄 Retrying with fresh session...");
        sessionPool.jar = null;
        fs.unlinkSync(sessionFile); // Delete old session file
        await delay(1000);
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

// Health check
module.exports.health = (req, res) => {
  res.json({
    status: "healthy",
    sessionActive: sessionPool.jar !== null,
    sessionAge: sessionPool.jar ? Math.round((Date.now() - sessionPool.lastUsed) / 1000) + "s" : "none",
    cacheSize: cache.getStats().ksize,
    cachedItems: cache.getStats().vsize,
    uptime: process.uptime()
  });
};

// Clear all cache
module.exports.clearCache = (req, res) => {
  cache.flushAll();
  res.json({ message: "Cache cleared" });
};

// Force refresh session
module.exports.refreshSession = (req, res) => {
  sessionPool.jar = null;
  try {
    fs.unlinkSync(sessionFile);
  } catch (e) {
    // File doesn't exist
  }
  res.json({ message: "Session will refresh on next request" });
};