import axios from "axios";
import React from "react";
import { useEffect } from "react";

function Orders() {
  useEffect(() => {
    axios.post("https://zerodha-clone-bui7.onrender.com/api/orders/allorders").then((res) => {
      console.log(re)
    })
  }, [])
  return (
    <div className="orders-container">
      <div className="orders-empty">
        <h2>You haven’t placed any orders yet</h2>
        <button className="get-started-btn">Get Started</button>
      </div>
    </div>
  );
}

export default Orders;
