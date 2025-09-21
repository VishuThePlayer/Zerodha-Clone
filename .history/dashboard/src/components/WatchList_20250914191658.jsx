import React, { useState } from "react";
import { watchlist } from "../data";
import Tooltip from "@mui/material/Tooltip";
import Grow from "@mui/material/Grow";

function WatchList() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
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
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px" }}
            >
              <div className="stock-name">{stock.name}</div>
              <div className="stock-price">{stock.price.toFixed(2)}</div>
              <div className={`stock-percent ${changeClass}`}>{stock.percent}</div>

              {/* Buy button appears inside the item on hover */}
              {hoveredIndex === index && <WatchListActions />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const WatchListActions = () => {
  return (
    <Tooltip title="Buy (B)" placement="top" arrow slots={{ transition: Grow }}>
      <button className="buy" style={{ marginLeft: "auto" }}>
        Buy
      </button>
    </Tooltip>
  );
};

export default WatchList;
