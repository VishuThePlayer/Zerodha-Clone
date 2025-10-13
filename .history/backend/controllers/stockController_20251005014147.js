const axios = require("axios");

module.exports.getLivePrice = async (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({
      success: false,
      message: "Query parameter 'q' is required.",
    });
  }

  const config = {
    headers: {
      "x-rapidapi-host": "indian-stock-exchange-api2.p.rapidapi.com",
      "x-rapidapi-key": "97a2ee11damsh40e28189eb2c37ap1d409ajsnc1fbe3a59633",
    },
  };

  try {
    const response = await axios.get(
      `https://indian-stock-exchange-api2.p.rapidapi.com/stock?name=${encodeURIComponent(q)}`,
      config
    );

    const result = response.data?.data;

    // 🧩 Normalize different possible API responses
    if (!result || result === "Stock not found" || (Array.isArray(result) && result.length === 0)) {
      return res.status(200).json({
        success: false,
        message: "Stock not found",
        data: [],
      });
    }

    // ✅ Valid stock data
    return res.status(200).json({
      success: true,
      data: Array.isArray(result) ? result : [result], // ensure it's always an array
    });

  } catch (error) {
    console.error("❌ Error fetching stock data:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch stock data",
      error: error.message,
    });
  }
};
