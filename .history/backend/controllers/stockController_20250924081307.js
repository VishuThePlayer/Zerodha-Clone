const axios = require("axios");


module.exports.getLivePrice = async (req, res) => {
  try {
    const symbol = req.query.symbol || "RELIANCE";

    const url = `https://www.nseindia.com/api/quote-equity?symbol=${symbol}`;

    const proxyConfig = {
      host: "p52.boltproxies.net",
      port: 10055,
      auth: {
        username: "HighSylvie134",
        password: "3XgQdO7zrYVBXtZT",
      },
      protocol: "http",
    };

    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
        Referer: `https://www.nseindia.com/get-quotes/equity?symbol=${symbol}`,
        Accept: "application/json",
      },
      proxy: proxyConfig,
      timeout: 10000,
    });

    const livePrice = response.data?.priceInfo?.lastPrice;

    if (!livePrice) {
      return res.status(404).json({
        success: false,
        message: `Price not found for symbol ${symbol}`,
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
