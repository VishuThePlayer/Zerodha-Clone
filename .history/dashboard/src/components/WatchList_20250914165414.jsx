import React from "react";

function WatchList() {
  return (
    <div className="watchlist">
      <input
        type="text"
        className="watchlist-search"
        placeholder="Search eg: INFY, NIFTY"
      />
    </div>
    <div className="watchlist-items"></div>
  );
}

export default WatchList;
