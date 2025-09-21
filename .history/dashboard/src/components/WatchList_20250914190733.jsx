import React, { useState } from "react";
import { watchlist } from "../data";
import Tooltip from "@mui/material/Tooltip";
import Grow from "@mui/material/Grow";

function WatchList() {
  const [hoveredIndex, setHoveredIndex] = useState(null); // track hovered item

  return (
    <div className="watchlist">
      {/* Search Bar */}
      <input
        type="text"
        className="watchlist-search"
        placeholder="Search eg: INFY, NIFTY"
      />

      {/* Watchlist Items */}
      <ul className="watchlist-items">
        {watchlist.map((stock, index) => {
          const changeClass = stock.isDown ? "down" : "up";
          return (
            <li
              className="watchlist-item"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ position: "relative" }} // needed for absolute actions
            >
              <span className="stock-name">{stock.name}</span>
              <span className="stock-price">{stock.price.toFixed(2)}</span>
              <span className={`stock-percent ${changeClass}`}>
                {stock.percent}
              </span>

              {/* Show actions only for hovered item */}
              {hoveredIndex === index && <WatchListActions uid={stock.name} />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const WatchListActions = ({ uid }) => {
  return (
    <ul className="actions" style={{ position: "absolute", top: "-35px", right: 0, zIndex: 10 }}>
      <li>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="buy">Buy</button>
        </Tooltip>
      </li>
      {/* You can add more actions like Sell here */}
    </ul>
  );
};

export default WatchList;
