import axios from "axios";
import React, { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState(null); // state for API response
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/orders/allorders", {
        withCredentials: true, // ✅ cookie-based auth ke liye
      })
      .then((res) => {
        console.log("Orders Response:", res.data);
        setOrders(res.data); // ✅ store response in state
      })
      .catch((err) => {
        console.error("Error fetching orders:", err.response?.data || err.message);
        setOrders([]); // empty array if error
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="orders-container">
      <div className="orders-empty">
        {loading ? (
          <h2>Loading orders...</h2>
        ) : orders && orders.length > 0 ? (
          orders.map((order, i) => (
            <div key={i} className="order-card">
              <h3>{order.name}</h3>
              <p>Quantity: {order.qnty}</p>
              <p>Price: {order.price}</p>
            </div>
          ))
        ) : (
          <>
            <h2>You haven’t placed any orders yet</h2>
            <button className="get-started-btn">Get Started</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Orders;
