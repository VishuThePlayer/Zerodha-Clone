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



const axios = require("axios");

module.exports.getLivePrice = async (req, res) => {
  try {
    const symbol = (req.query.symbol || "RELIANCE").toUpperCase();

    // Proxy configuration
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
        ":method": "GET",
        ":path": "/",
        ":scheme": "https",
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-encoding": "gzip, deflate, br, zstd",
        "accept-language": "en-US,en;q=0.9,en-IN;q=0.8",
        cookie:
          "_ga=GA1.1.1448198149.1758209938; RT=\"z=1&dm=nseindia.com&si=7d69fbcc-c461-4f8e-9fbf-db2be92489a8&ss=mfpkvb18&sl=0&se=8c&tt=0&bcn=%2F%2F684d0d48.akstat.io%2F&hd=bh1k\"; AKA_A2=A; _abck=C8C54D7F593C360E092186B2E6DE2133~0~YAAQrIzQF79+rlGZAQAAKtmaeQ6TVLsCLtssXHsEt1x8NHHdDFJgcEIBiSh1CGZ3snoVqNu8JNr5xLEWFJnQ6Oi6xZgVDBcBYG05E5BR6unZXLzwSV1SY/7w+tqMGr9O5TjfmIV6GY2tH+SzYhaPDnRyooD0Nk8O5AWjLyVOqARoavy17lx57xwibV5zGf6hTjxJ+Gz0ajbefmqqcGt8ZPmSkqbQ178kvbx32W511wBRoLwuQBFv0nhQThJ0P5hTbiI6KrvGIqn13AJK6nGAnS9jcmbi3uRCjSuf8b4H1g57+6rBMJt4mi1OQqdak0LhjAvuqm3Pxwk0mn4+Dwvf8+jNszpEE1jzWvjN/U7CGJwm6XhgFrF5kJj0K66J/EHYB8jps+eAn0lqrM/m9aNS6RDvSBuEYv2swXoDdEF3JvfL8Qa4rw0hTR2PPBdhv0DA/YmdoSyspfHPkFVwdxe/wUGuXVHSKWvFP36BB9SYp7qKsdg6KBOtvHHInr8iIXvAJRU5aamNBcyraYQlyJ9yQ8nsiuFVmZuH9qUCZnKdoOkG6IPhYmTJKOppibg2kI9Fd14cSmS1Hkq61eq0H/poTgXZDh/RYuxy7ZlEzuFkr4sk0XVUIxZHZHNG0hhksf70jtv6aQ==~-1~-1~-1~AAQAAAAE%2f%2f%2f%2f%2f1GCKG8ldjYl41l1GM9d2DS3+La11KcRSJ037wYhQkN4FwS6P3JaW5SVAzKHcFpum6NQHuo%2fh8jE74EyOpBceyvFu2%2fhqYNO+Qg6~-1",
        priority: "u=0, i",
        "sec-ch-ua":
          '"Chromium";v="140", "Not=A?Brand";v="24", "Microsoft Edge";v="140"',
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
    if (!cookies) {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch NSE cookies.",
      });
    }

    // Step 2: Fetch live quote
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

    const livePrice = quoteResponse.data?.priceInfo?.lastPrice;

    if (!livePrice) {
      return res.status(404).json({
        success: false,
        message: "Live price not available.",
      });
    }

    res.status(200).json({
      success: true,
      symbol,
      price: livePrice,
      rawData: quoteResponse.data,
    });
  } catch (error) {
    console.error("Error fetching live price:", error.message);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};