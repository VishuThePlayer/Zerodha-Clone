import React, { useState } from "react";
import { watchlist } from "../data";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Grow } from '@mui/material';

function WatchList() {

    const [showWatchListActions, setHoveredIndex] = useState(null);

    const handleMouseEnter = (e) => {
      setHoveredIndex(true);
    };

    const handleMouseLeave = (e) => {
      setHoveredIndex(false);
    };

  return (
    <div className="watchlist">
      {/* Search Bar */}
      <input
        type="text"
        className="watchlist-search"
        placeholder="Search eg: INFY, NIFTY"
      />

      {/* Watchlist Items */}
      <div className="watchlist-items">\<div style={{ padding: "20px" }}>
      <Tooltip title="Hello MUI!" arrow>
        <Button variant="contained" color="primary">
          Test Button
        </Button>
      </Tooltip>
    </div>
        {watchlist.map((stock, index) => {
          const changeClass = stock.isDown ? "down" : "up";
          return (
            <div 
              className="watchlist-item" 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              >
              <div className="stock-name">{stock.name}</div>
              <div className="stock-price">{stock.price.toFixed(2)}</div>
              <div className={`stock-percent ${changeClass}`}>
                {stock.percent}
              </div>
              {showWatchListActions && <WatchListActions uid={stock.name}/>}
            </div>
          );
        })}
      </div>
    </div>
  );
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
