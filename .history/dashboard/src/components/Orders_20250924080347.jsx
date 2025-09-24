import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function Orders() {
  const [loading, setLoading] = useState(true);
  const [orders, setorder] = useState(null);
  useEffect(() => {
    axios.get(
      "https://zerodha-clone-bui7.onrender.com/api/orders/allorders",
      { withCredentials: true } // ✅ cookie-based auth ke liye
    )
    .then((res) => {
      console.log("Orders Response:", res.data);
      setLoading(false);
      setorder(res.data);
    })
    .catch((err) => {
      console.error("Error fetching orders:", err.response?.data || err.message);
    });
  }, []);

  return (
    <div className="orders-container">
      <div className="orders-empty">
        {loading ? (
          <h1>Loading Orders</h1>
        ): orders && orders.length > 0 ? (

          <div className="positions">
                <table className='positions-table'>
                    <tr>
                        <td>Product</td>
                        <td>Instrument</td>
                        <td>Qty</td>
                        <td>Avg</td>
                        <td>LTP</td>
                        <td>P&L</td>
                        <td>Chg</td>
                    </tr>
                    {orders.map((item, index) => {
                        return (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>{item.avg.toFixed(2)}</td>
                            <td>{item.price.toFixed(2)}</td>
                            <td className={pnlClass}>{pnl.toFixed(2)}</td>
                            <td className={`col-chg ${dayClass}`}>{item.day}</td>
                        </tr>
                        );
                    })}
                </table>
            </div>
          orders.map((ele, i) => (
            <div key={i}>
              <h1>{ele.name}</h1>
              <h1>{ele.qty}</h1>
              <h1>{ele.price}</h1>
            </div>
          ))
        ) : (
          <>
            <h2>You haven’t placed any orders yet</h2>
            <button className="get-started-btn">Get Started</button>
          </>
        )
      }
      </div>
    </div>
  );
}

export default Orders;
