import React, { useState, useEffect } from "react";
import {
  Box, Card, CardContent, TextField, Button, Typography, Chip, Grid,
  Alert, CircularProgress, Container, Paper, Divider, InputAdornment
} from "@mui/material";
import { Search, TrendingUp, TrendingDown, ShowChart, ErrorOutline } from "@mui/icons-material";
import axios from "axios";

export default function LiveStocks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const[result, setResult] = useState(false);

  // 🔍 Handle search click
  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError("Please enter a stock name or symbol");
      return;
    }

    setError(null);
    setSearchResult(null);
    setLoading(true);

    try {
      const res = await axios.get(
        `http://localhost:5000/api/stock/live?q=${encodeURIComponent(searchTerm)}`
      );

      console.log("📊 API Response:", res.data);

      if (Array.isArray(res.data) && res.data[0]?.error) {
        // Handle error from API
        setError(res.data[0].error);
        setSearchResult([]);
      } else if (res.data?.data) {
        // Handle valid data response
        setSearchResult([res.data.data]);
        setResult(true);
      } else {
        setError(`No results found for "${searchTerm}"`);
        setSearchResult([]);
        setResult(false);
      }
    } catch (err) {
      console.error("❌ Fetch Error:", err);
      setError("Something went wrong while fetching data.");
      setSearchResult([]);
    } finally {
      setLoading(false);
    }
  };

  // 💰 Helpers
  const formatCurrency = (value) =>
    value ? `₹${parseFloat(value).toFixed(2)}` : "N/A";

  const formatMarketCap = (value) => {
    if (!value) return "N/A";
    const num = parseFloat(value);
    if (isNaN(num)) return "N/A";
    if (num >= 100000) return `₹${(num / 100000).toFixed(2)} Lakh Cr`;
    if (num >= 1000) return `₹${(num / 1000).toFixed(2)} K Cr`;
    return `₹${num.toFixed(2)} Cr`;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: "100vh" }}>
      <Paper elevation={3} sx={{ p: 4, mb: 3 }}>
        {/* 🔹 Header */}
        <Box display="flex" alignItems="center" gap={2} mb={4}>
          <ShowChart color="primary" sx={{ fontSize: 40 }} />
          <Typography variant="h3" fontWeight="bold" color="text.primary">
            Stock Market Search
          </Typography>
        </Box>

        {/* 🔹 Search Bar */}
        <Box display="flex" gap={2} mb={3}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for stocks (e.g., Tata Steel, TATASTEEL)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="action" />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            onClick={handleSearch}
            disabled={loading}
            startIcon={
              loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <Search />
              )
            }
            sx={{ minWidth: 120, height: 56 }}
          >
            {loading ? "Searching..." : "Search"}
          </Button>
        </Box>

        {/* ⚠️ Error Display */}
        {error && (
          <Alert severity="error" sx={{ mb: 3 }} icon={<ErrorOutline />}>
            {error}
          </Alert>
        )}

        {/* 📊 Results */}
        {result searchResult && searchResult.length > 0 && (
          <Box>
            <Typography variant="h5" fontWeight="600" color="text.primary" mb={3}>
              Search Results for "{searchTerm}"
            </Typography>

            <Grid container spacing={3}>
              {searchResult.map((stock) => (
                <Grid item xs={12} key={stock.tickerId || stock.companyName}>
                  <Card
                    variant="outlined"
                    sx={{
                      p: 2,
                      "&:hover": { boxShadow: 4, transform: "translateY(-2px)", transition: "all 0.2s" },
                    }}
                  >
                    <CardContent>
                      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                        {/* Company Info */}
                        <Box>
                          <Typography variant="h5" fontWeight="bold">
                            {stock.companyName}
                          </Typography>
                          <Box display="flex" alignItems="center" gap={2} mt={1}>
                            <Chip label={stock.companyName} color="primary" size="small" variant="outlined" />
                            <Typography variant="body2" color="text.secondary">
                              • {stock.industry || stock.sector || "N/A"}
                            </Typography>
                          </Box>
                        </Box>

                        {/* Price Info */}
                        <Box textAlign="right">
                          <Typography variant="h4" fontWeight="bold">
                            {formatCurrency(stock.currentPrice?.NSE || stock.currentPrice)}
                          </Typography>
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="flex-end"
                            color={parseFloat(stock.percentChange) >= 0 ? "success.main" : "error.main"}
                            gap={0.5}
                          >
                            {parseFloat(stock.percentChange) >= 0 ? (
                              <TrendingUp fontSize="small" />
                            ) : (
                              <TrendingDown fontSize="small" />
                            )}
                            <Typography variant="body1" fontWeight="600">
                              {stock.percentChange}%
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      <Divider sx={{ my: 2 }} />

                      {/* Metrics */}
                      <Grid container spacing={3}>
                        <Grid item xs={6} md={3}>
                          <Typography variant="body2" color="text.secondary">Market Cap</Typography>
                          <Typography variant="body1" fontWeight="600">
                            {formatMarketCap(stock.keyMetrics?.priceandVolume?.[0]?.value)}
                          </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <Typography variant="body2" color="text.secondary">52W High</Typography>
                          <Typography variant="body1" fontWeight="600" color="success.main">
                            {formatCurrency(stock.yearHigh)}
                          </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <Typography variant="body2" color="text.secondary">52W Low</Typography>
                          <Typography variant="body1" fontWeight="600" color="error.main">
                            {formatCurrency(stock.yearLow)}
                          </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <Typography variant="body2" color="text.secondary">Industry</Typography>
                          <Typography variant="body1" fontWeight="600">
                            {stock.industry || stock.sector || "N/A"}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* 💡 Sample Searches */}
        <Paper elevation={1} sx={{ p: 3, mt: 4, bgcolor: "grey.50" }}>
          <Typography variant="h6" fontWeight="600" mb={2}>
            Try these searches:
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {["Tata Steel", "JSW Steel", "TATASTEEL"].map((term) => (
              <Chip
                key={term}
                label={term}
                variant="outlined"
                onClick={() => setSearchTerm(term)}
                clickable
              />
            ))}
          </Box>
        </Paper>
      </Paper>
    </Container>
  );
}
