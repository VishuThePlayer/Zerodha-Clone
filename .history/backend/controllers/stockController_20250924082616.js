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

const axios = require("axios");

module.exports.getLivePrice = async (req, res) => {
  try {
    const symbol = (req.query.symbol || "RELIANCE").toUpperCase();

    // Proxy config
    const proxyConfig = {
      host: "p52.boltproxies.net",
      port: 10055,
      auth: {
        username: "HighSylvie134",
        password: "3XgQdO7zrYVBXtZT",
      },
      protocol: "http",
    };

    // Step 1: Fetch NSE homepage to get cookies
    const homeResponse = await axios.get("https://www.nseindia.com", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        Referer: "https://www.nseindia.com/",
      },
      proxy: proxyConfig,
    });

    const cookies = homeResponse.headers["set-cookie"]?.join("; ");

    // Step 2: Fetch live quote with cookies
    const quoteResponse = await axios.get(
      `https://www.nseindia.com/api/quote-equity?symbol=${symbol}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
          Referer: `https://www.nseindia.com/get-quotes/equity?symbol=${symbol}`,
          Accept: "application/json",
          Cookie: cookies,
        },
        proxy: proxyConfig,
        timeout: 10000,
      }
    );

    const data = quoteResponse.data;
    const livePrice = data?.priceInfo?.lastPrice;

    if (!livePrice) {
      return res.status(404).json({
        success: false,
        message: "Live price not available. NSE might be blocking request.",
      });
    }

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