import React, { useEffect, useState } from "react";
import {
  Box, Card, CardContent, TextField, Button, Typography, Chip, Grid,
  Alert, CircularProgress, Container, Paper, Divider, InputAdornment
} from "@mui/material";
import {
  Search, TrendingUp, TrendingDown, ShowChart, ErrorOutline
} from "@mui/icons-material";
import axios from "axios";

export default function LiveStocks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState(null);

  // ✅ Fetch when searchClicked changes
  useEffect(() => {
    if (!searchClicked || !searchTerm.trim()) return;

    const fetchStock = async () => {
      try {
        setSearchLoading(true);
        setError(null);

        const res = await axios.get(
          `http://localhost:5000/api/stock/live?q=${encodeURIComponent(searchTerm)}`
        );

        console.log("📊 API Response:", res.data);

        // ✅ Assuming API returns { success: true, data: { ... } }
        if (res.data && res.data.data) {
          setSearchResult([res.data.data]);
        } else {
          setSearchResult([]);
          setError(`No results found for "${searchTerm}"`);
        }
      } catch (err) {
        console.error("❌ Error fetching:", err);
        setSearchResult([]);
        setError(`No results found for "${searchTerm}"`);
      } finally {
        setSearchLoading(false);
        setSearchClicked(false);
      }
    };

    fetchStock();
  }, [searchClicked]);

  // ✅ Trigger effect on button click
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setError("Please enter a stock name or symbol");
      return;
    }
    setSearchClicked(true);
    setSearchResult(null);
  };

  const formatCurrency = (value) => {
    if(searchResult){
      if (!value) return "N/A";
    return `₹${parseFloat(value).toFixed(2)}`;
    }
  };

  const formatMarketCap = (value) => {
  console.log("Market Cap Raw:", value);

  if (!value) return "N/A";
  const num = parseFloat(value);

  if (isNaN(num)) return "N/A";

  // Convert large values properly
  if (num >= 100000) {
    // 1 lakh crore or more
    return `₹${(num / 100000).toFixed(2)} Lakh Cr`;
  } else if (num >= 1000) {
    // 1 thousand crore or more
    return `₹${(num / 1000).toFixed(2)} K Cr`;
  } else {
    return `₹${num.toFixed(2)} Cr`;
  }
};

  


  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: "100vh" }}>
      <Paper elevation={3} sx={{ p: 4, mb: 3 }}>
        <Box display="flex" alignItems="center" gap={2} mb={4}>
          <ShowChart color="primary" sx={{ fontSize: 40 }} />
          <Typography variant="h3" fontWeight="bold" color="text.primary">
            Stock Market Search
          </Typography>
        </Box>

        {/* 🔍 Search Section */}
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
            disabled={searchLoading}
            startIcon={
              searchLoading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <Search />
              )
            }
            sx={{ minWidth: 120, height: 56, px: 3 }}
          >
            {searchLoading ? "Searching..." : "Search"}
          </Button>
        </Box>

        {/* ⚠️ Error Message */}
        {error && (
          <Alert severity="error" sx={{ mb: 3 }} icon={<ErrorOutline />}>
            {error}
          </Alert>
        )}

        {/* 📈 Search Results */}
        {searchResult && (
          <Box>
            <Typography variant="h5" fontWeight="600" color="text.primary" mb={3}>
              Search Results for "{searchTerm}"
            </Typography>

            {searchResult.length > 0 ? (
              <Grid container spacing={3}>
                {searchResult.map((stock) => (
                  <Grid item xs={12} key={stock.tickerId}>
                    <Card
                      variant="outlined"
                      sx={{
                        p: 2,
                        "&:hover": {
                          boxShadow: 4,
                          transform: "translateY(-2px)",
                          transition: "all 0.2s ease-in-out",
                        },
                      }}
                    >
                      <CardContent>
                        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                          <Box>
                            <Typography variant="h5" fontWeight="bold" color="text.primary">
                              {stock.companyName}
                            </Typography>
                            <Box display="flex" alignItems="center" gap={2} mt={1}>
                              <Chip label={stock.companyName} color="primary" size="small" variant="outlined" />
                              <Typography variant="body2" color="text.secondary">
                                NSA
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                • {stock.industry}
                              </Typography>
                            </Box>
                          </Box>

                          <Box textAlign="right">
                            <Typography variant="h4" fontWeight="bold" color="text.primary">
                              {formatCurrency(stock.currentPrice?.NSE || stock.currentPrice)}
                            </Typography>
                            <Box
                              display="flex"
                              alignItems="center"
                              justifyContent="flex-end"
                              gap={0.5}
                              color={parseFloat(stock.percentChange) >= 0 ? "success.main" : "error.main"}
                            >
                              {parseFloat(stock.percentChange) >= 0 ? <TrendingUp fontSize="small" /> : <TrendingDown fontSize="small" />}
                              <Typography variant="body1" fontWeight="600">
                                {stock.percentChange}%
                              </Typography>
                            </Box>
                          </Box>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        <Grid container spacing={3}>
                          <Grid item xs={6} md={3}>
                            <Typography variant="body2" color="text.secondary">Market Cap</Typography>
                            <Typography variant="body1" fontWeight="600">
                              {formatMarketCap(stock.keyMetrics.priceandVolume[0].value)}
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
                              {stock.industry || stock.sector}
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Card sx={{ p: 6, textAlign: "center" }}>
                <Search sx={{ fontSize: 64, color: "text.disabled", mb: 2 }} />
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  No stocks found matching your search.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Try searching for "Tata Steel" or "JSW Steel"
                </Typography>
              </Card>
            )}
          </Box>
        )}

        {/* 💡 Sample Searches */}
        <Paper elevation={1} sx={{ p: 3, mt: 4, bgcolor: "grey.50" }}>
          <Typography variant="h6" fontWeight="600" color="text.primary" mb={2}>
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
                sx={{ "&:hover": { backgroundColor: "action.hover" } }}
              />
            ))}
          </Box>
        </Paper>
      </Paper>
    </Container>
  );
}
