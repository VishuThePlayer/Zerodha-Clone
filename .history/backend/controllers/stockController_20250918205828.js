const axios = require("axios");

module.exports.getLivePrice = async (req, res, next) => {
  try {
    const API_KEY = process.env.TWELVEDATA_KEY;
    const symbol = req.query.symbol || "RELIANCE.NS"; // fallback symbol

    // Twelve Data quote endpoint for real-time price
    const url = `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${API_KEY}`;

    const response = await axios.get(url, {
      headers: {
        "User-Agent": "request",
      },
    });

    // Response structure
    // {
    //   "symbol": "RELIANCE.NS",
    //   "name": "Reliance Industries Limited",
    //   "exchange": "NSE",
    //   "currency": "INR",
    //   "datetime": "2025-09-18",
    //   "open": "2938.00",
    //   "high": "2950.50",
    //   "low": "2910.00",
    //   "close": "2945.00",
    //   "previous_close": "2920.00",
    //   "change": "25.00",
    //   "percent_change": "0.86",
    //   "volume": "1456789"
    // }

    console.log(`Live price for ${symbol}: ${response.data.close}`);

    res.status(200).json({
      success: true,
      symbol,
      price: response.data.close, // ✅ direct price
      change: response.data.change,
      percent_change: response.data.percent_change,
      data: response.data,
    });

  } catch (error) {
    console.error("Error fetching live price:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};
