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
} from "@mui/material";

export default function LiveStocks() {
  const [stocks, setStocks] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" mt={10}>
        <CircularProgress />
      </Box>
    );

  return (
    <Box p={4}>
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
