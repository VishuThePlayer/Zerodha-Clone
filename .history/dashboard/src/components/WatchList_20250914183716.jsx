import React from "react";
import { watchlist } from "../data";

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
    </div>
  );
}

const WatchListActions = ({uid}) => {
  return(
    span
  )
}

export default WatchList;
