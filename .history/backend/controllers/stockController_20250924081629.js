const axios = require("axios");


module.exports.getLivePrice = async (req, res) => {
  try {
    const symbol = req.query.symbol?.toUpperCase() || "TCS";

    const url = `https://www.nseindia.com/api/quote-equity?symbol=${symbol}`;

    // ✅ Proxy Config
    const proxyConfig = {
      host: "p52.boltproxies.net",
      port: 10055,
      auth: {
        username: "HighSylvie134",
        password: "3XgQdO7zrYVBXtZT",
      },
      protocol: "http",
    };

    // ✅ Use keepAlive agent (reduces proxy handshake overhead)
    const agent = new https.Agent({ keepAlive: true });

    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
        "Referer": `https://www.nseindia.com/get-quotes/equity?symbol=${symbol}`,
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate, br", // ✅ NSE expects this
        "Accept-Language": "en-US,en;q=0.9",
        "Connection": "keep-alive",
      },
      proxy: proxyConfig,
      httpsAgent: agent,
      timeout: 15000,
      validateStatus: (status) => status < 500, // don't throw on 4xx
    });

    // ✅ If NSE returned HTML instead of JSON
    if (typeof response.data !== "object" || !response.data.priceInfo) {
      return res.status(502).json({
        success: false,
        message: "NSE returned invalid response. Proxy might be blocked.",
      });
    }

    const livePrice = response.data.priceInfo.lastPrice;

    res.status(200).json({
      success: true,
      symbol,
      price: livePrice,
    });
  } catch (error) {
    console.error("Error fetching live price:", error.message);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};