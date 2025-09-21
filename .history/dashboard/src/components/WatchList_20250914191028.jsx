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
              style={{ position: "relative", top: "1"}} // needed for actions
            >
              <div className="stock-name">{stock.name}</div>
              <div className="stock-price">{stock.price.toFixed(2)}</div>
              <div className={`stock-percent ${changeClass}`}>
                {stock.percent}
              </div>

              {/* Show actions only for hovered item */}
              {hoveredIndex === index && <WatchListActions uid={stock.name} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const WatchListActions = ({ uid }) => {
  return (
    <span
      className="actions"
      style={{
        position: "absolute",
        top: "-35px", // shows above the item
        right: "0",
        zIndex: 10,
      }}
    >
      <Tooltip
        title="Buy (B)"
        placement="top"
        arrow
        slots={{ transition: Grow }} // MUI v5 recommended
      >
        <button className="buy">Buy</button>
      </Tooltip>
    </span>
  );
};

export default WatchList;
