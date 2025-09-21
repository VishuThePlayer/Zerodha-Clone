import React, { useState } from "react";
import { watchlist } from "../data";
import Tooltip from '@mui/material/Tooltip';
import Grow from "@mui/material/Grow";

function WatchList() {
  const [showWatchListActions, setWatchListActions] = useState(null);

  const handleMouseEnter = (index) => {
    setWatchListActions(index);
  };

  const handleMouseLeave = () => {
    setWatchListActions(null);
  };

  return (
    <div className="watchlist">
      <input
        type="text"
        className="watchlist-search"
        placeholder="Search eg: INFY, NIFTY"
      />

      <div className="watchlist-items">
        {watchlist.map((stock, index) => {
          const changeClass = stock.isDown ? "down" : "up";
          return (
            <div
              className="watchlist-item"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="stock-name">{stock.name}</div>
              <div className="stock-price">{stock.price.toFixed(2)}</div>
              <div className={`stock-percent ${changeClass}`}>
                {stock.percent}
              </div>
              {showWatchListActions === index && <WatchListActions uid={index} />}
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
      <Tooltip
        title="Buy (B)"
        placement="top"
        arrow
        TransitionComponent={Grow} // ✅ correct usage
      >
        <button className="buy">Buy</button>
      </Tooltip>
    </span>
  );
};

export default WatchList;
