const axios = require("axios");



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
    res.send(response);
 } catch (error) {
  
 }
};