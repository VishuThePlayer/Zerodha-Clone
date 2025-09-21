const axios = require("axios");

module.exports.getLivePrice = async (req, res) => {
  try {
    const API_KEY = process.env.TWELVEDATA_KEY;

    // NSE symbol format (.NSE)
    const symbol = req.query.symbol || "RELIANCE.NSE";

    // ✅ Use /quote endpoint instead of /stocks
    const url = `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${API_KEY}`;
    const response = await axios.get(url);

    // Handle API error response
    if (response.data.status === "error") {
      return res.status(400).json({
        success: false,
        message: response.data.message,
      });
    }

    res.status(200).json({
      success: true,
      symbol,
      price: response.data.close, // ✅ close is the live price
      data: response.data, // send full data if needed
    });

  } catch (error) {
    console.error("Error fetching live price:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};
