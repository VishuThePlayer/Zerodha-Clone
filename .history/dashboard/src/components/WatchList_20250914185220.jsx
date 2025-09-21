import React, { useState } from "react";
import { watchlist } from "../data";
import Tooltip from '@mui/material/Tooltip';
import Grow from "@mui/material/Grow";
impor
function WatchList() {
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
            <div className="watchlist-item" key={index}>
              <div className="stock-name">{stock.name}</div>
              <div className="stock-price">{stock.price.toFixed(2)}</div>
              <div className={`stock-percent ${changeClass}`}>
                {stock.percent}
              </div>
            </div>
          );
        })}
      </div>
      {showWatchListActions }
    </div>
  );
}

const WatchListItems = ({ stock }) => {
  const [showWatchListActions, setWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setWatchListActions(true);
  };

   const handleMouseLeave = (e) => {
    setWatchListActions(false);
  };
}

const WatchListActions = ({ uid }) => {
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          slots={{ transition: Grow }} // ✅ use slots.transition instead of TransitionComponent
        >
          <button className="buy">Buy</button>
        </Tooltip>
      </span>
    </span>
  );
};

export default WatchList;
