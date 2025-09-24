import axios from "axios";
import React, { useEffect } from "react";

function Orders() {
  useEffect(() => {
    axios.get(
      "http://localhost:5000/api/orders/allorders",
      {},
      { withCredentials: true } // ✅ cookie-based auth ke liye
    )
    .then((res) => {
      console.log("Orders Response:", res.data);
    })
    .catch((err) => {
      console.error("Error fetching orders:", err.response?.data || err.message);
    });
  }, []);

  return (
    <div className="orders-container">
      <div className="orders-empty">
        {if(!res) {
          {
            <h2>You haven’t placed any orders yet</h2>
        <button className="get-started-btn">Get Started</button>
          }
        }}
      </div>
    </div>
  );
}

export default Orders;
