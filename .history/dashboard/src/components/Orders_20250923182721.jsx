import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function Orders() {
  const [loading, setLoading] = useState(true);
  const [orders, setorder] = useState(null);
  useEffect(() => {
    axios.get(
      "http://localhost:5000/api/orders/allorders",
      {},
      { withCredentials: true } // ✅ cookie-based auth ke liye
    )
    .then((res) => {
      console.log("Orders Response:", res.data);
      setorder(orders);
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
          orders.map((ele, i) => {
            <div key={i}>
              <h1>ele.name</h1>
              <h1>ele.qty</h1>
              <h1>ele.price</h1>
            </div>
          })
        ): 
      }
      </div>
    </div>
  );
}

export default Orders;
