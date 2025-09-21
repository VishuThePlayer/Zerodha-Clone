import React, { useState } from "react";
import { watchlist } from "../data";
import Tooltip from '@mui/material/Tooltip';
import { Grow } from '@mui/material';

function WatchList() {
  const [showWatchListActions, setWatchListActions] = useState(null); // track hovered index

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
              style={{ position: "relative" }} // needed for absolute actions
              onMouseEnter={() => setShowWatchListActions(index)}
              onMouseLeave={() => setShowWatchListActions(null)}
            >
              <div className="stock-name">{stock.name}</div>
              <div className="stock-price">{stock.price.toFixed(2)}</div>
              <div className={`stock-percent ${changeClass}`}>
                {stock.percent}
              </div>

              {/* show actions on hover */}
              {showWatchListActions === index && (
                <WatchListActions uid={index} />
              )}
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
        top: "-35px", // show above the item
        right: "0",
        zIndex: 10,
      }}
    >
      <Tooltip
        title="Buy (B)"
        placement="top"
        arrow
        slots={{ transition: Grow }}
      >
        <button className="buy">Buy</button>
      </Tooltip>
    </span>
  );
};

export default WatchList;
