import React, { useContext, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Grow from "@mui/material/Grow";
import Button from "@mui/material/Button";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import { GeneralContext, GeneralContextProvider } from ".";
import { watchlist } from "../data";

function WatchList() {
  const [showWatchListActions, setWatchListActions] = useState(null);

  return (
    // ✅ Wrap entire WatchList with Provider so context works
    <GeneralContextProvider>
      <div className="watchlist">
        {/* Search Bar */}
        <input
          type="text"
          className="watchlist-search"
          placeholder="Search eg: INFY, NIFTY"
        />

        {/* Watchlist Items */}
        <div className="watchlist-items">
          {watchlist.map((stock, index) => {
            const changeClass = stock.isDown ? "down" : "up";
            return (
              <div
                className="watchlist-item"
                key={stock.name} // ✅ Better key
                onMouseEnter={() => setWatchListActions(index)}
                onMouseLeave={() => setWatchListActions(null)}
              >
                <div className="stock-name">{stock.name}</div>
                <div className="stock-price">{stock.price.toFixed(2)}</div>
                <div className={`stock-percent ${changeClass}`}>
                  {stock.percent}
                </div>

                {showWatchListActions === index && (
                  <WatchListActions uid={stock.name} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </GeneralContextProvider>
  );
}

const WatchListActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext); // ✅ context now works

  return (
    <span
      className="actions"
      style={{
        display: "flex",
        gap: "10px",
        position: "absolute",
        left: "15%",
      }}
    >
      <Tooltip title="Buy (B)" placement="top" arrow slots={{ transition: Grow }}>
        <Button variant="contained" onClick={() => openBuyWindow(uid)}>
          Buy
        </Button>
      </Tooltip>

      <Tooltip title="Sell (S)" placement="top" arrow slots={{ transition: Grow }}>
        <Button variant="contained" color="error">
          Sell
        </Button>
      </Tooltip>

      <Tooltip
        title="View Chart"
        placement="top"
        arrow
        slots={{ transition: Grow }}
      >
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>
    </span>
  );
};

export default WatchList;
