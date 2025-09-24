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
  let config = {
  headers: {
    "x-rapidapi-host": "indian-stock-exchange-api2.p.rapidapi.com",
    "x-rapidapi-key": "97a2ee11damsh40e28189eb2c37ap1d409ajsnc1fbe3a59633"
  }
};

 try {
    const response = await axios.get("https://indian-stock-exchange-api2.p.rapidapi.com/stock?name=tata%20steel",
      config
    );
 } catch (error) {
  
 }
};