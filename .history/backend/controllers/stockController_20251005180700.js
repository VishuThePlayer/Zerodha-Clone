const axios = require("axios");


module.exports.getLivePrice = async (req, res) => {
  let {q} = req.query;
  const config = {
    headers: {
      "x-rapidapi-host": "indian-stock-exchange-api2.p.rapidapi.com",
      "x-rapidapi-key": "f79fcd8cb0mshd533cf8bc04c7a7p13a0d7jsn804665fb800d",
    },
  };

  try {
    const response = await axios.get(
      `https://indian-stock-exchange-api2.p.rapidapi.com/stock?name=${q}`,
      config
    );
    

    res.status(200).json({
      success: true,
      data: response.data
    });
  } catch (error) {
    console.error("Error fetching stock data:", error.message);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
