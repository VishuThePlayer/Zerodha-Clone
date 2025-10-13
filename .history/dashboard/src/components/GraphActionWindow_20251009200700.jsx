import React, { useContext } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box, IconButton, Typography, Paper, Divider } from "@mui/material";
import { Close as CloseIcon, ShowChart as ShowChartIcon } from "@mui/icons-material";
import { GeneralContext } from "../context/GeneralContextProvider"; // ✅ adjust path as per your structure

function GraphActionWindow({ open = true, uid }) {
  const { closeGraph } = useContext(GeneralCont); // ✅ use context

  if (!open) return null;

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        mt: 2,
        borderRadius: 3,
        position: "relative",
        bgcolor: "background.paper",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        border: "1px solid",
        borderColor: "grey.200",
        transition: "all 0.3s ease",
      }}
    >
      {/* Header */}
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Box display="flex" alignItems="center" gap={1}>
          <ShowChartIcon color="primary" />
          <Typography variant="h6" fontWeight="600" color="primary.main">
            Stock Performance Graph
          </Typography>
        </Box>

        <IconButton
          size="small"
          onClick={closeGraph} // ✅ directly from context
          sx={{
            color: "grey.600",
            bgcolor: "grey.100",
            "&:hover": {
              bgcolor: "error.light",
              color: "white",
              transform: "rotate(90deg)",
              transition: "all 0.2s ease-in-out",
            },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Chart */}
      <LineChart
        sx={{
          "& .MuiChartsAxis-line": { stroke: "#ccc" },
          "& .MuiChartsLegend-root": { display: "none" },
        }}
        xAxis={[{ data: [1, 2, 3, 5, 8, 10, 11, 12] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5, 7, 9, 8],
            color: "#1976d2",
            label: "Price Trend",
            showMark: true,
          },
        ]}
        height={400}
      />
    </Paper>
  );
}

export default GraphActionWindow;
