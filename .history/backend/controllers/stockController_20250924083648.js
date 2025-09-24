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
    const symbol = (req.query.symbol || "RELIANCE").toUpperCase();

    // Proxy configuration
    const proxyConfig = {
      host: "p52.boltproxies.net",
      port: 10055,
      auth: {
        username: "HighSylvie134",
        password: "3XgQdO7zrYVBXtZT",
      },
      protocol: "http",
    };

    // Step 1: Fetch NSE homepage to capture cookies
    const homeResponse = await axios.get("https://www.nseindia.com", {
      headers: {
        Host: "www.nseindia.com",
        Referer: `https://www.nseindia.com/get-quotes/equity?symbol=${symbol}`,
        "X-Requested-With": "XMLHttpRequest",
        Pragma: "no-cache",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,en-IN;q=0.8",
        Connection: "keep-alive",
      },
      proxy: proxyConfig,
      timeout: 10000,
    });

    const cookies = homeResponse.headers["set-cookie"]?.join("; ");

    // Step 2: Fetch full live quote
    const quoteResponse = await axios.get(
      `https://www.nseindia.com/api/quote-equity?symbol=${symbol}`,
      {
        headers: {
          Host: "www.nseindia.com",
          Referer: `https://www.nseindia.com/get-quotes/equity?symbol=${symbol}`,
          "X-Requested-With": "XMLHttpRequest",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0",
          Accept: "application/json",
          Cookie: cookies,
        },
        proxy: proxyConfig,
        timeout: 10000,
      }
    );

    const data = quoteResponse.data;

    if (!data || Object.keys(data).length === 0) {
      return res.status(404).json({
        success: false,
        message: "Live data not available. NSE might be blocking request.",
      });
    }

    // ✅ Return full data (priceInfo, preOpenMarket, metadata, etc.)
    res.status(200).json({
      success: true,
      symbol,
      data,
    });
  } catch (error) {
    console.error("Error fetching live price:", error.message);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};