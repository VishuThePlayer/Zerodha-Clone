const axios = require("axios");


module.exports.getLivePrice = async (req, res) => {
  try {
    const symbol = req.query.symbol || "TCS";

    const url = `https://www.nseindia.com/api/quote-equity?symbol=${symbol}`;

    // ✅ Axios proxy config
    const proxyConfig = {
      host: "p52.boltproxies.net",
      port: 10055,
      auth: {
        username: "HighSylvie134",
        password: "3XgQdO7zrYVBXtZT",
      },
      protocol: "http", // or "https" if your proxy supports it
    };

    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
        Referer: `https://www.nseindia.com/get-quotes/equity?symbol=${symbol}`,
        Accept: "application/json",
      },
      proxy: proxyConfig, // ✅ Route request through proxy
      timeout: 10000, // optional but good for slow proxies
    });

    const data = response.data;
    const livePrice = data?.priceInfo?.lastPrice;

    res.status(200).json({
      success: true,
      symbol,
      price: livePrice,
      data,
    });
  } catch (error) {
    console.error("Error fetching live price:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};