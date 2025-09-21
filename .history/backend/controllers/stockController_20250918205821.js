const axios = require("axios");

const getLivePrice = async (req, res) => {
  try {
    const API_KEY = process.env.TWELVEDATA_KEY;
    const symbol = req.query.symbol || "RELIANCE.NS";
    const url = `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${API_KEY}`;
    const response = await axios.get(url);
    res.status(200).json({
      success: true,
      symbol,
      price: response.data.close,
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ✅ Correct export
module.exports = { getLivePrice };
