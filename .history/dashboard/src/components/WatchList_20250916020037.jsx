import React, { useContext, useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Grow from "@mui/material/Grow";
import Button from "@mui/material/Button";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import { GeneralContext } from "./GeneralContextProvider";


function WatchList() {
  const [showWatchListActions, setWatchListActions] = useState(null);
  const [watchlist, setWatchlist] = useState([]); // ✅ dynamic data state
  const [loading, setLoading] = useState(true);

  // ✅ Fetch data from backend
  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const res = await fetch("http://localhost:5000/allWatchlist");
        if (!res.ok) throw new Error("Failed to fetch watchlist");
        const data = await res.json();
        setWatchlist(data); // store in state
      } catch (error) {
        console.error("Error fetching watchlist:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWatchlist();
  }, []);

  if (loading) return <p>Loading watchlist...</p>;

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
        {watchlist.length === 0 ? (
          <p>No stocks in watchlist</p>
        ) : (
          watchlist.map((stock, index) => {
            const changeClass = stock.isDown ? "down" : "up";
            return (
              <div
                className="watchlist-item"
                key={stock.name}
                onMouseEnter={() => setWatchListActions(index)}
                onMouseLeave={() => setWatchListActions(null)}
              >
                <div className=```stock-name ${changeClass}`>{stock.name}</div>
                <div className="stock-price">{Number(stock.price).toFixed(2)}</div>
                <div className={`stock-percent ${changeClass}`}>
                  {stock.percent}
                </div>
                {showWatchListActions === index && (
                  <WatchListActions uid={stock.name} />
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

const WatchListActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  return (
    <span
      className="actions"
      style={{
        display: "flex",
        gap: "10px",
        position: "absolute",
        left: "15%",
      }}
    >
      <Tooltip title="Buy (B)" placement="top" arrow slots={{ transition: Grow }}>
        <Button variant="contained" onClick={() => openBuyWindow(uid)}>
          Buy
        </Button>
      </Tooltip>

      <Tooltip title="Sell (S)" placement="top" arrow slots={{ transition: Grow }}>
        <Button variant="contained" color="error">
          Sell
        </Button>
      </Tooltip>

      <Tooltip title="View Chart" placement="top" arrow slots={{ transition: Grow }}>
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>
    </span>
  );
};

export default WatchList;
