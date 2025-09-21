import React, { useState } from "react";
import { watchlist } from "../data";
import Tooltip from '@mui/material/Tooltip';
import Grow from "@mui/material/Grow";
import Button from '@mui/material/Button';
import BarChartOutlined from '@mui/icons-material/BarChartOutlined';


function WatchList() {

    const [showWatchListActions, setWatchListActions] = useState(null);

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
              onMouseEnter={() => setWatchListActions(index)}
              onMouseLeave={() => setWatchListActions(null)}

            >
              
              <div className="stock-name">{stock.name}</div>
              <div className="stock-price">{stock.price.toFixed(2)}</div>
              <div className={`stock-percent ${changeClass}`}>
                {stock.percent}
              </div>
              {showWatchListActions === index && <WatchListActions uid={stock.name}/>}
            </div>
          );
        })}
      </div>
    </div>
  );
}






];
  return (
    <span className="actions" style={{ display: "flex",gap: "10px",  position: "absolute", left: "15%"}}>
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          slots={{ transition: Grow }} // ✅ use slots.transition instead of TransitionComponent
        >
          <Button variant="contained">Buy</Button>
        </Tooltip>
      </span>
      <span>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          slots={{ transition: Grow }} // ✅ use slots.transition instead of TransitionComponent
        >
          <Button variant="contained" color="error">Sell</Button>
        </Tooltip>
      </span>

      <span>
        <Tooltip
          title="View Chart"
          placement="top"
          arrow
          slots={{ transition: Grow }} // ✅ use slots.transition instead of TransitionComponent
        >
            <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
      </span>

    </span>
  );
};

export default WatchList;
