import React, { useState } from "react";
import {
  Box, Card, CardContent, TextField, Button, Typography, Chip, Grid,
  Alert, CircularProgress, Container, Paper, Divider, InputAdornment
} from "@mui/material";
import { Search, TrendingUp, TrendingDown, ShowChart, ErrorOutline, RefreshOutlined, Timer } from "@mui/icons-material";
import axios from "axios";

export default function LiveStocks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastSearchTerm, setLastSearchTerm] = useState("");
  const [responseTime, setResponseTime] = useState(null);
  const [isCached, setIsCached] = useState(false);

  // 🔍 Handle search click
  const handleSearch = async (retryAttempt = false) => {
    const term = searchTerm.trim().toUpperCase();
    
    if (!term) {
      setError("Please enter a stock symbol");
      return;
    }

    setError(null);
    setSearchResult(null);
    setLoading(true);
    setLastSearchTerm(term);
    setResponseTime(null);
    setIsCached(false);

    try {
      const res = await axios.get(
        `http://localhost:5000/api/stock/live/${encodeURIComponent(term)}`,
        { timeout: 30000 }
      );

      console.log("📊 API Response:", res.data);

      if (!res.data.success) {
        handleApiError(res.data.error, term, retryAttempt);
      } else if (res.data.data && res.data.data.info) {
        setSearchResult(res.data.data);
        setResponseTime(res.data.responseTime);
        setIsCached(res.data.cached || false);
        setError(null);
      } else {
        setError(`Invalid response format for "${term}"`);
        setSearchResult(null);
      }
    } catch (err) {
      console.error("❌ Fetch Error:", err);
      
      if (err.code === 'ECONNABORTED') {
        setError("Request timed out. Please try again.");
      } else if (err.response) {
        handleApiError(err.response.data?.error || err.message, term, retryAttempt);
      } else if (err.request) {
        setError("Cannot connect to server. Ensure API is running on http://localhost:3000");
      } else {
        setError(`Error: ${err.message}`);
      }
      
      setSearchResult(null);
    } finally {
      setLoading(false);
    }
  };

  // Handle different types of API errors
  const handleApiError = (errorMsg, term, isRetry) => {
    if (errorMsg.includes("Cannot read properties of undefined") || errorMsg.includes("reading 'length'")) {
      setError(`Invalid stock symbol: "${term}". Please check and try again.`);
    } else if (errorMsg.includes("403")) {
      setError("Access denied by NSE. Please try again in a moment.");
    } else if (errorMsg.includes("401")) {
      if (!isRetry) {
        setError("Session expired. Retrying...");
        setTimeout(() => handleSearch(true), 2000);
      } else {
        setError("Authentication failed. Please try again later.");
      }
    } else if (errorMsg.includes("429")) {
      setError("Too many requests. Please wait a minute.");
    } else if (errorMsg.includes("timeout")) {
      setError("Request timed out. NSE server may be slow.");
    } else if (errorMsg.includes("ECONNREFUSED")) {
      setError("Cannot connect to API. Start the server: node nse-api-fast.js");
    } else {
      setError(errorMsg || "Failed to fetch stock data.");
    }
  };

  // Retry last search
  const handleRetry = () => {
    if (lastSearchTerm) {
      setSearchTerm(lastSearchTerm);
      handleSearch();
    }
  };

  // 💰 Helpers
  const formatCurrency = (value) => {
    if (!value && value !== 0) return "N/A";
    const num = parseFloat(value);
    return isNaN(num) ? "N/A" : `₹${num.toFixed(2)}`;
  };

  const formatNumber = (value) => {
    if (!value && value !== 0) return "N/A";
    return value.toLocaleString('en-IN');
  };

  const formatChange = (change, pChange) => {
    if ((!change && change !== 0) || (!pChange && pChange !== 0)) return { value: "N/A", isPositive: false };
    const changeVal = parseFloat(change);
    const pChangeVal = parseFloat(pChange);
    return {
      value: `${changeVal >= 0 ? '+' : ''}${changeVal.toFixed(2)} (${pChangeVal >= 0 ? '+' : ''}${pChangeVal.toFixed(2)}%)`,
      isPositive: changeVal >= 0
    };
  };

  return (
    <Container maxWidth="lg" 
    sx={{
        py: 4,
        minHeight: "100vh",
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}

    >
      <Paper elevation={3}  sx={{
          p: 4,
          mb: 3,
          background: "var(--glass-bg)",
          backdropFilter: "blur(12px)",
          border: "1px solid var(--glass-border)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--glass-shadow)",
        }}>
        {/* 🔹 Header */}
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={4}>
          <Box display="flex" alignItems="center" gap={2}>
            <ShowChart color="primary" sx={{ fontSize: 40, color: "var(--accent-primary)" }} />
            <Typography variant="h3" fontWeight="bold" color="text.primary">
              NSE Stock Search
            </Typography>
          </Box>
          {responseTime && (
            <Chip 
              icon={<Timer />} 
              label={`${responseTime} ${isCached ? '(cached)' : ''}`}
              color={isCached ? "success" : "default"}
              size="small"
            />
          )}
        </Box>

        {/* 🔹 Search Bar */}
        <Box display="flex" gap={2} mb={3}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter NSE symbol (e.g., RELIANCE, TCS, TATASTEEL)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            disabled={loading}
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
            onClick={() => handleSearch()}
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
          <Alert 
            severity="error" 
            sx={{ mb: 3 }} 
            icon={<ErrorOutline />}
            action={
              lastSearchTerm && !loading && (
                <Button 
                  color="inherit" 
                  size="small" 
                  onClick={handleRetry}
                  startIcon={<RefreshOutlined />}
                >
                  Retry
                </Button>
              )
            }
          >
            {error}
          </Alert>
        )}

        {/* 📊 Results */}
        {searchResult && searchResult.info && (
          <Box>
            <Typography variant="h5" fontWeight="600" color="text.primary" mb={3}>
              Stock Details
            </Typography>

            <Card
              variant="outlined"
              sx={{
                p: 2,
                "&:hover": { boxShadow: 4, transform: "translateY(-2px)", transition: "all 0.2s" },
              }}
            >
              <CardContent>
                {/* Header Section */}
                <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                  <Box>
                    <Typography variant="h5" fontWeight="bold">
                      {searchResult.info.companyName}
                    </Typography>
                    <Box display="flex" alignItems="center" gap={2} mt={1} flexWrap="wrap">
                      <Chip label={searchResult.info.symbol} color="primary" size="small" variant="outlined" />
                      <Typography variant="body2" color="text.secondary">
                        {searchResult.industryInfo?.industry || searchResult.info.industry || "N/A"}
                      </Typography>
                      {searchResult.metadata?.status && (
                        <Chip label={searchResult.metadata.status} size="small" color="success" />
                      )}
                      {searchResult.info.isFNOSec && (
                        <Chip label="F&O" size="small" variant="outlined" />
                      )}
                    </Box>
                  </Box>

                  {/* Price Info */}
                  <Box textAlign="right">
                    <Typography variant="h4" fontWeight="bold">
                      {formatCurrency(searchResult.priceInfo?.lastPrice)}
                    </Typography>
                    {searchResult.priceInfo && (
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-end"
                        color={formatChange(searchResult.priceInfo.change, searchResult.priceInfo.pChange).isPositive ? "success.main" : "error.main"}
                        gap={0.5}
                        mt={0.5}
                      >
                        {formatChange(searchResult.priceInfo.change, searchResult.priceInfo.pChange).isPositive ? (
                          <TrendingUp fontSize="small" />
                        ) : (
                          <TrendingDown fontSize="small" />
                        )}
                        <Typography variant="body1" fontWeight="600">
                          {formatChange(searchResult.priceInfo.change, searchResult.priceInfo.pChange).value}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Price Metrics */}
                <Typography variant="h6" fontWeight="600" mb={2}>Price Information</Typography>
                <Grid container spacing={2} mb={3}>
                  <Grid item xs={6} md={3}>
                    <Typography variant="body2" color="text.secondary">Open</Typography>
                    <Typography variant="body1" fontWeight="600">
                      {formatCurrency(searchResult.priceInfo?.open)}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Typography variant="body2" color="text.secondary">Previous Close</Typography>
                    <Typography variant="body1" fontWeight="600">
                      {formatCurrency(searchResult.priceInfo?.previousClose)}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Typography variant="body2" color="text.secondary">Day High</Typography>
                    <Typography variant="body1" fontWeight="600" color="success.main">
                      {formatCurrency(searchResult.priceInfo?.intraDayHighLow?.max)}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Typography variant="body2" color="text.secondary">Day Low</Typography>
                    <Typography variant="body1" fontWeight="600" color="error.main">
                      {formatCurrency(searchResult.priceInfo?.intraDayHighLow?.min)}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Typography variant="body2" color="text.secondary">52W High</Typography>
                    <Typography variant="body1" fontWeight="600" color="success.main">
                      {formatCurrency(searchResult.priceInfo?.weekHighLow?.max)}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Typography variant="body2" color="text.secondary">52W Low</Typography>
                    <Typography variant="body1" fontWeight="600" color="error.main">
                      {formatCurrency(searchResult.priceInfo?.weekHighLow?.min)}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Typography variant="body2" color="text.secondary">Upper Circuit</Typography>
                    <Typography variant="body1" fontWeight="600" color="success.main">
                      {formatCurrency(searchResult.priceInfo?.upperCP)}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Typography variant="body2" color="text.secondary">Lower Circuit</Typography>
                    <Typography variant="body1" fontWeight="600" color="error.main">
                      {formatCurrency(searchResult.priceInfo?.lowerCP)}
                    </Typography>
                  </Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />

                {/* Trading Info */}
                <Typography variant="h6" fontWeight="600" mb={2}>Trading Information</Typography>
                <Grid container spacing={2} mb={3}>
                  <Grid item xs={6} md={3}>
                    <Typography variant="body2" color="text.secondary">Volume</Typography>
                    <Typography variant="body1" fontWeight="600">
                      {formatNumber(searchResult.priceInfo?.totalTradedVolume)}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Typography variant="body2" color="text.secondary">Value (Cr)</Typography>
                    <Typography variant="body1" fontWeight="600">
                      {searchResult.priceInfo?.totalTradedValue ? 
                        `₹${(searchResult.priceInfo.totalTradedValue / 10000000).toFixed(2)}` : "N/A"}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Typography variant="body2" color="text.secondary">VWAP</Typography>
                    <Typography variant="body1" fontWeight="600">
                      {formatCurrency(searchResult.priceInfo?.vwap)}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Typography variant="body2" color="text.secondary">Face Value</Typography>
                    <Typography variant="body1" fontWeight="600">
                      {formatCurrency(searchResult.securityInfo?.faceValue)}
                    </Typography>
                  </Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />

                {/* Company Info */}
                <Typography variant="h6" fontWeight="600" mb={2}>Company Information</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body2" color="text.secondary">Sector</Typography>
                    <Typography variant="body1" fontWeight="600">
                      {searchResult.industryInfo?.sector || "N/A"}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body2" color="text.secondary">Industry</Typography>
                    <Typography variant="body1" fontWeight="600">
                      {searchResult.industryInfo?.industry || "N/A"}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body2" color="text.secondary">Basic Industry</Typography>
                    <Typography variant="body1" fontWeight="600">
                      {searchResult.industryInfo?.basicIndustry || "N/A"}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body2" color="text.secondary">Listing Date</Typography>
                    <Typography variant="body1" fontWeight="600">
                      {searchResult.info.listingDate || searchResult.metadata?.listingDate || "N/A"}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body2" color="text.secondary">ISIN</Typography>
                    <Typography variant="body1" fontWeight="600">
                      {searchResult.info.isin || "N/A"}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body2" color="text.secondary">Series</Typography>
                    <Typography variant="body1" fontWeight="600">
                      {searchResult.metadata?.series || "N/A"}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        )}

        {/* 💡 Sample Searches */}
        <Paper elevation={1} sx={{ p: 3, mt: 4, bgcolor: "grey.50" }}>
          <Typography variant="h6" fontWeight="600" mb={2}>
            Popular NSE Stocks:
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {["RELIANCE", "TCS", "INFY", "HDFCBANK", "SBIN", "ITC", "TATASTEEL", "BHARTIARTL", "ICICIBANK", "LT", "WIPRO", "AXISBANK"].map((term) => (
              <Chip
                key={term}
                label={term}
                variant="outlined"
                onClick={() => {
                  setSearchTerm(term);
                  setError(null);
                }}
                clickable
              />
            ))}
          </Box>
          <Typography variant="caption" color="text.secondary" display="block" mt={2}>
            💡 Make sure your API is running: <code>node nse-api-fast.js</code>
          </Typography>
        </Paper>
      </Paper>
    </Container>
  );
}