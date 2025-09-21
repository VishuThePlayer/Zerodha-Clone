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


// In-memory cache
let priceCache = {};

async function fetchLivePrice(symbol) {
  const url = `https://www.nseindia.com/api/quote-equity?symbol=${symbol}`;
  const response = await axios.get(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Referer": `https://www.nseindia.com/get-quotes/equity?symbol=${symbol}`,
      "Accept": "application/json",
    },
  });

  const data = response.data;
  const livePrice = data?.priceInfo?.lastPrice;

  // Save in cache
  priceCache[symbol] = {
    price: livePrice,
    timestamp: Date.now(),
  };

  return livePrice;
}

// Auto-refresh cache every 15 sec
const symbolsToTrack = ["RELIANCE", "TCS", "INFY"];
setInterval(() => {
  symbolsToTrack.forEach((symbol) => {
    fetchLivePrice(symbol)
      .then((price) => console.log(`Updated ${symbol} = ${price}`))
      .catch((err) => console.error(`Failed to update ${symbol}:`, err.message));
  });
}, 15000);

// API endpoint for frontend
module.exports.getLivePrice = async (req, res) => {
  const symbol = req.query.symbol || "RELIANCE";
  const cached = priceCache[symbol];

  if (cached && Date.now() - cached.timestamp < 15000) {
    return res.status(200).json({ success: true, symbol, price: cached.price, fromCache: true });
  }

  try {
    const price = await fetchLivePrice(symbol);
    res.status(200).json({ success: true, symbol, price, fromCache: false });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

