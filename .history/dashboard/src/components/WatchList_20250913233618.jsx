import React from "react";

function WatchList() {
  return (
    <div className="watchlist">
      {/* Search Bar */}
      <input
        type="text"
        className="watchlist-search"
        placeholder="Search eg: INFY, NIFTY"
      />
    </div>
  );
}

export default WatchList;
