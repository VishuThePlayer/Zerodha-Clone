const axios = require("axios");
const { HttpsProxyAgent } = require("https-proxy-agent");
const { CookieJar } = require("tough-cookie");
const NodeCache = require("node-cache");


// Cache for 60 seconds to avoid hitting NSE too frequently
const cache = new NodeCache({ stdTTL: 60, checkperiod: 120 });

// Session pool to reuse cookies across requests
const sessionPool = {
  jar: null,
  lastUsed: 0,
  maxAge: 180000 * 15, // 3 minutes (reduced from 5)
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const commonHeaders = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  "Accept-Language": "en-US,en;q=0.9",
  "Accept-Encoding": "gzip, deflate, br",
  "Connection": "keep-alive",
  "Upgrade-Insecure-Requests": "1",
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-User": "?1",
  "Cache-Control": "max-age=0",
};

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
