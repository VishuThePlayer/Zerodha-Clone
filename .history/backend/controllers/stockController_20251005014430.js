const axios = require("axios");


module.exports.getLivePrice = async (req, res) => {
  let {q} = req.query;
  const config = {
    headers: {
      "x-rapidapi-host": "indian-stock-exchange-api2.p.rapidapi.com",
      "x-rapidapi-key": "97a2ee11damsh40e28189eb2c37ap1d409ajsnc1fbe3a59633",
    },
  };

  try {
    const response = await axios.get(
      `https://indian-stock-exchange-api2.p.rapidapi.com/stock?name=${q}`,
      config
    );

    if(response.data.data == "Stock not found"){
      res.status(200).json({
      success: false,
      data: response.data
    });
    }else{}

    
  } catch (error) {
    console.error("Error fetching stock data:", error.message);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
