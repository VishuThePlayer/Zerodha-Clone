import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Chip,
  Grid,
  Alert,
  CircularProgress,
  IconButton,
  Container,
  Paper,
  Divider,
  InputAdornment
} from "@mui/material";
import {
  Search,
  TrendingUp,
  TrendingDown,
  ShowChart,
  ErrorOutline
} from "@mui/icons-material";

// Mock data based on the provided Tata Steel information
const mockStockData = {
  "tata steel": {
    tickerId: "S0003026",
    companyName: "Tata Steel",
    industry: "Iron & Steel",
    symbol: "TATASTEEL",
    currentPrice: {
      BSE: "174.8",
      NSE: "174.85"
    },
    percentChange: "-0.37",
    marketCap: "213428.23",
    yearHigh: "175.7",
    yearLow: "104.3",
    sector: "Iron & Steel",
    exchange: "NSE/BSE"
  },
  "jsw steel": {
    tickerId: "S0003097",
    companyName: "JSW Steel",
    symbol: "JSWSTEEL",
    currentPrice: {
      BSE: "909.05",
      NSE: "909.05"
    },
    percentChange: "-0.92",
    marketCap: "221490.24",
    yearHigh: "929.8",
    yearLow: "687.7",
    sector: "Iron & Steel",
    exchange: "NSE/BSE"
  }
};

export default function LiveStocks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError("Please enter a stock name or symbol");
      return;
    }
    
    setSearchLoading(true);
    setSearchResult(null);
    setError(null);

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Search in mock data (case insensitive)
      const searchKey = searchTerm.toLowerCase();
      const found = mockStockData[searchKey] || 
        Object.values(mockStockData).find(stock => 
          stock.companyName.toLowerCase().includes(searchKey) ||
          stock.symbol.toLowerCase().includes(searchKey)
        );

      if (found) {
        setSearchResult([found]);
      } else {
        setSearchResult([]);
        setError(`No results found for "${searchTerm}"`);
      }
    } catch (error) {
      console.error("Search error:", error);
      setError("Search failed. Please try again.");
    } finally {
      setSearchLoading(false);
    }
  };

  const formatCurrency = (value) => {
    if (!value) return "N/A";
    return `₹${parseFloat(value).toFixed(2)}`;
  };

  const formatMarketCap = (value) => {
    if (!value) return "N/A";
    const num = parseFloat(value);
    if (num >= 1000) {
      return `₹${(num / 1000).toFixed(1)}K Cr`;
    }
    return `₹${num.toFixed(1)} Cr`;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: "100vh" }}>
      <Paper elevation={3} sx={{ p: 4, mb: 3 }}>
        <Box display="flex" alignItems="center" gap={2} mb={4}>
          <ShowChart color="primary" sx={{ fontSize: 40 }} />
          <Typography variant="h3" component="h1" fontWeight="bold" color="text.primary">
            Stock Market Search
          </Typography>
        </Box>

        {/* Search Section */}
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
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: 'primary.main',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'primary.main',
                },
              },
            }}
          />
          <Button
            variant="contained"
            onClick={handleSearch}
            disabled={searchLoading}
            startIcon={searchLoading ? <CircularProgress size={20} color="inherit" /> : <Search />}
            sx={{ 
              minWidth: 120,
              height: 56,
              px: 3
            }}
          >
            {searchLoading ? "Searching..." : "Search"}
          </Button>
        </Box>

        {/* Error Message */}
        {error && (
          <Alert 
            severity="error" 
            sx={{ mb: 3 }}
            icon={<ErrorOutline />}
          >
            {error}
          </Alert>
        )}

        {/* Search Results */}
        {searchResult && (
          <Box>
            <Typography variant="h5" component="h2" fontWeight="600" color="text.primary" mb={3}>
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
                        '&:hover': { 
                          boxShadow: 4,
                          transform: 'translateY(-2px)',
                          transition: 'all 0.2s ease-in-out'
                        },
                        transition: 'all 0.2s ease-in-out'
                      }}
                    >
                      <CardContent>
                        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                          <Box>
                            <Typography variant="h5" component="h3" fontWeight="bold" color="text.primary">
                              {stock.companyName}
                            </Typography>
                            <Box display="flex" alignItems="center" gap={2} mt={1}>
                              <Chip 
                                label={stock.symbol} 
                                color="primary" 
                                size="small"
                                variant="outlined"
                              />
                              <Typography variant="body2" color="text.secondary">
                                {stock.exchange}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                • {stock.sector}
                              </Typography>
                            </Box>
                          </Box>
                          
                          <Box textAlign="right">
                            <Typography variant="h4" component="div" fontWeight="bold" color="text.primary">
                              {formatCurrency(stock.currentPrice.NSE)}
                            </Typography>
                            <Box 
                              display="flex" 
                              alignItems="center" 
                              justifyContent="flex-end"
                              gap={0.5}
                              color={parseFloat(stock.percentChange) >= 0 ? 'success.main' : 'error.main'}
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

                        <Grid container spacing={3}>
                          <Grid item xs={6} md={3}>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              Market Cap
                            </Typography>
                            <Typography variant="body1" fontWeight="600">
                              {formatMarketCap(stock.marketCap)}
                            </Typography>
                          </Grid>
                          <Grid item xs={6} md={3}>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              52W High
                            </Typography>
                            <Typography variant="body1" fontWeight="600" color="success.main">
                              {formatCurrency(stock.yearHigh)}
                            </Typography>
                          </Grid>
                          <Grid item xs={6} md={3}>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              52W Low
                            </Typography>
                            <Typography variant="body1" fontWeight="600" color="error.main">
                              {formatCurrency(stock.yearLow)}
                            </Typography>
                          </Grid>
                          <Grid item xs={6} md={3}>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              Industry
                            </Typography>
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
              <Card sx={{ p: 6, textAlign: 'center' }}>
                <Search sx={{ fontSize: 64, color: 'text.disabled', mb: 2 }} />
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

        {/* Sample Searches */}
        <Paper elevation={1} sx={{ p: 3, mt: 4, bgcolor: 'grey.50' }}>
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
                sx={{
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              />
            ))}
          </Box>
        </Paper>
      </Paper>

      {/* Debug Information */}
    </Container>
  );
}