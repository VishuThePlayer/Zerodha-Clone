import React from "react";

function WatchList() {
  return (
    <div className="watchlist">
      <input
        type="text"
        className="watchlist-search"
        placeholder="Search eg: INFY, NIFTY"
      />
      <div className="watchlist-items">
        
      </div>
    </div>
  );
}

export default WatchList;
