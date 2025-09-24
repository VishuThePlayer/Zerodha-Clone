const axios = require("axios");

module.exports.stockDataGeneration = async (req, res, next) => {
  try {
    const API_KEY = process.env.ALPHA_VANTAGE_KEY;

    // Symbol frontend se ya query param se le lo (fallback: RELIANCE.NS)
    const symbol = req.query.symbol || "RELIANCE.NS"; 

    const url = `https://api.twelvedata.com/stocks?apikey=demo`;

    const response = await axios.get(url, {
      headers: {
        "User-Agent": "request",
      },
    });

    console.log(`Fetched Stock Data for ${symbol}`);

    res.status(200).json({
      success: true,
      symbol,
      data: response.data,
    });

  } catch (error) {
    console.error("Error fetching stock data:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports.getLivePrice = async (req, res) => {
  try {
    const symbol = req.query.symbol?.toUpperCase() || "RELIANCE";

    // Step 1: Create Axios instance with proxy + headers
    const proxyConfig = {
      host: "p52.boltproxies.net",
      port: 10055,
      auth: {
        username: "HighSylvie134-country-in",
        password: "3XgQdO7zrYVBXtZT",
      },
      protocol: "http",
    };

    const axiosInstance = axios.create({
      proxy: proxyConfig,
      httpsAgent: new https.Agent({ keepAlive: true }),
      timeout: 15000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
        "Connection": "keep-alive",
      },
    });

    // Step 2: Hit homepage to get cookies
    const homeRes = await axiosInstance.get("https://www.nseindia.com/");
    const rawCookies = homeRes.headers["set-cookie"];

    if (!rawCookies) {
      return res.status(502).json({ success: false, message: "Failed to get cookies from NSE" });
    }

    // Convert cookie array -> single header string
    const cookieHeader = rawCookies.map(c => c.split(";")[0]).join("; ");

    // Step 3: Call the quote API with cookies
    const apiRes = await axiosInstance.get(
      `https://www.nseindia.com/api/quote-equity?symbol=${symbol}`,
      {
        headers: {
          ...axiosInstance.defaults.headers,
          "Referer": `https://www.nseindia.com/get-quotes/equity?symbol=${symbol}`,
          "Cookie": cookieHeader, // ✅ send cookies
        },
      }
    );

    if (typeof apiRes.data !== "object" || !apiRes.data.priceInfo) {
      return res.status(502).json({ success: false, message: "Invalid data from NSE API" });
    }

    const livePrice = apiRes.data.priceInfo.lastPrice;

    res.status(200).json({
      success: true,
      symbol,
      price: livePrice,
    });
  } catch (error) {
    console.error("Error fetching live price:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};