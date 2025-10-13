import React, { useContext, useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Grow from "@mui/material/Grow";
import Button from "@mui/material/Button";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import { GeneralContext } from "./GeneralContextProvider";
import axios from "axios";

function WatchList() {
  const [showWatchListActions, setWatchListActions] = useState(null);
  const [watchlist, setWatchlist] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // ✅ Added state

  useEffect(() => {
    let isMounted = true;

    const fetchWatchlist = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/watchlist/allWatchlist",
          { withCredentials: true }
        );
        if (isMounted) setWatchlist(res.data);
      } catch (err) {
        if (isMounted)
          setError(err.response?.data?.message || "Failed to fetch watchlist");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchWatchlist();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <p>Loading watchlist...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>; // ✅ Show error

  return (
    <div className="watchlist">
      <input
        type="text"
        className="watchlist-search"
        placeholder="Search eg: INFY, NIFTY"
      />

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
                <div className={`stock-name ${changeClass}`}>{stock.name}</div>
                <div className="stock-price">{Number(stock.price).toFixed(2)}</div>
                <div className={`stock-percent ${changeClass}`}>
                  {stock.percent}
                </div>
                {showWatchListActions === index && (
                  <WatchListActions uid={stock.name} Currprice={stock.price} />
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

const WatchListActions = ({ uid, Currprice }) => {
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
        <Button variant="contained" onClick={() => openBuyWindow(uid, Currprice)}>
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
