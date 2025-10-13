import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  CircularProgress,
  Divider,
  TextField,
  Button,
} from "@mui/material";

export default function LiveStocks() {
  const [stocks, setStocks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);

  // Fetch live trending stocks
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/stock/live")
      .then((res) => {
        setStocks(res.data.data.trending_stocks);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching stocks", err);
        setLoading(false);
      });
  }, []);

  // Handle Search
  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    setSearchLoading(true);
    setSearchResult(null);

    try {
      const res = await axios.get(
        `https://indian-stock-exchange-api2.p.rapidapi.com/stock?name=${encodeURIComponent(
          searchTerm
        )}`,
        {
          headers: {
            "x-rapidapi-host": "indian-stock-exchange-api2.p.rapidapi.com",
            "x-rapidapi-key":
              "97a2ee11damsh40e28189eb2c37ap1d409ajsnc1fbe3a59633",
          },
        }
      );
      setSearchResult(res.data);
    } catch (error) {
      console.error("Error searching stock", error);
    } finally {
      setSearchLoading(false);
    }
  };

  if (loading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" mt={10}>
        <CircularProgress />
      </Box>
    );

  return (
    <Box p={4}>
      {/* Search Section */}
      <Box display="flex" gap={2} mb={4}>
        <TextField
          label="Search Stock"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          disabled={searchLoading}
        >
          {searchLoading ? "Searching..." : "Search"}
        </Button>
      </Box>
        
      {/* Search Result */}
      {searchResult && (
        <Box mb={4}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Search Results
          </Typography>
          <Grid container spacing={3}>
            {searchResult.length > 0 ? (
              searchResult.map((stock) => (
                <Grid item xs={12} sm={6} md={4} key={stock.symbol}>
                  <Card
                    variant="outlined"
                    sx={{
                      borderColor: "primary.light",
                      "&:hover": { boxShadow: 3 },
                      borderRadius: 3,
                    }}
                  >
                    <CardContent>
                      <Box display="flex" justifyContent="space-between">
                        <Typography fontWeight="bold">{stock.companyName}</Typography>
                        <Chip
                          label={stock.symbol}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        NSE/BSE: {stock.exchange}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Sector: {stock.sector || "N/A"}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography color="text.secondary">No stocks found.</Typography>
            )}
          </Grid>
        </Box>
      )}

      {/* Top Gainers */}
      <Typography variant="h5" fontWeight="bold" color="success.main" mb={2}>
        🔥 Top Gainers
      </Typography>
      <Grid container spacing={3}>
        {stocks.top_gainers.map((stock) => (
          <Grid item xs={12} sm={6} md={4} key={stock.ticker_id}>
            <Card
              variant="outlined"
              sx={{
                borderColor: "success.light",
                "&:hover": { boxShadow: 3 },
                borderRadius: 3,
              }}
            >
              <CardContent>
                <Box display="flex" justifyContent="space-between">
                  <Typography fontWeight="bold">{stock.company_name}</Typography>
                  <Chip
                    label={`${stock.percent_change}%`}
                    size="small"
                    color="success"
                    variant="outlined"
                  />
                </Box>

                <Typography variant="h6" fontWeight="bold" color="success.main">
                  ₹{stock.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Net:{" "}
                  <span style={{ color: "green" }}>+{stock.net_change}</span>
                </Typography>

                <Divider sx={{ my: 1 }} />
                <Typography variant="caption" color="text.secondary">
                  H: {stock.high} | L: {stock.low}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Top Losers */}
      <Typography
        variant="h5"
        fontWeight="bold"
        color="error.main"
        mt={5}
        mb={2}
      >
        📉 Top Losers
      </Typography>
      <Grid container spacing={3}>
        {stocks.top_losers.map((stock) => (
          <Grid item xs={12} sm={6} md={4} key={stock.ticker_id}>
            <Card
              variant="outlined"
              sx={{
                borderColor: "error.light",
                "&:hover": { boxShadow: 3 },
                borderRadius: 3,
              }}
            >
              <CardContent>
                <Box display="flex" justifyContent="space-between">
                  <Typography fontWeight="bold">{stock.company_name}</Typography>
                  <Chip
                    label={`${stock.percent_change}%`}
                    size="small"
                    color="error"
                    variant="outlined"
                  />
                </Box>

                <Typography variant="h6" fontWeight="bold" color="error.main">
                  ₹{stock.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Net:{" "}
                  <span style={{ color: "red" }}>{stock.net_change}</span>
                </Typography>

                <Divider sx={{ my: 1 }} />
                <Typography variant="caption" color="text.secondary">
                  H: {stock.high} | L: {stock.low}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
