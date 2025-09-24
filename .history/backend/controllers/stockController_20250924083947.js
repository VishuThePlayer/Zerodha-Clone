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
  try {
    const symbol = (req.query.symbol || "RELIANCE").toUpperCase();

    // Proxy config
    const proxyConfig = {
      host: "p52.boltproxies.net",
      port: 10055,
      auth: {
        username: "HighSylvie134",
        password: "3XgQdO7zrYVBXtZT",
      },
      protocol: "http",
    };

    // Step 1: Fetch NSE homepage to get cookies
    const homeResponse = await axios.get("https://www.nseindia.com", {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-encoding": "gzip, deflate, br, zstd",
        "accept-language": "en-US,en;q=0.9,en-IN;q=0.8",
        "sec-ch-ua": `"Chromium";v="140", "Not=A?Brand";v="24", "Microsoft Edge";v="140"`,
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": '"Android"',
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "user-agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0",
        referer: "https://www.nseindia.com/",
      },
      proxy: proxyConfig,
      timeout: 10000,
    });

    const cookies = homeResponse.headers["set-cookie"]?.join("; ");

    // Step 2: Fetch full NSE quote
    const quoteResponse = await axios.get(
      `https://www.nseindia.com/api/quote-equity?symbol=${symbol}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0",
          Accept: "application/json",
          Referer: `https://www.nseindia.com/get-quotes/equity?symbol=${symbol}`,
          Cookie: cookies,
        },
        proxy: proxyConfig,
        timeout: 10000,
      }
    );

    const data = quoteResponse.data;

    if (!data || Object.keys(data).length === 0) {
      return res.status(404).json({
        success: false,
        message: "Live data not available. NSE might be blocking request.",
      });
    }

    // ✅ Return full NSE stock data, like jugaad-data
    res.status(200).json({
      success: true,
      symbol,
      data,
    });
  } catch (error) {
    console.error("Error fetching live price:", error.message);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};