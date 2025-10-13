const axios = require("axios");


module.exports.getLivePrice = async (req, res) => {
  const config = {
    headers: {
      "x-rapidapi-host": "indian-stock-exchange-api2.p.rapidapi.com",
      "x-rapidapi-key": "97a2ee11damsh40e28189eb2c37ap1d409ajsnc1fbe3a59633",
    },
  };

  try {
    const response = await axios.get(
      "import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/orders/allorders",
          { withCredentials: true }
        );

        console.log("Orders Response:", res.data);

        // ✅ Access the nested array correctly
        setOrders(res.data.orders || []);
      } catch (err) {
        console.error("Error fetching orders:", err.response?.data || err.message);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders-empty">
      {loading ? (
        <h1>Loading Orders...</h1>
      ) : orders.length > 0 ? (
        <div className="positions">
          <table className="positions-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <h2>You haven’t placed any orders yet</h2>
          <button className="get-started-btn">Get Started</button>
        </>
      )}
    </div>
  );
}

export default Orders;
",
      config
    );

    res.status(200).json({
      success: true,
      data: response.data
    });
  } catch (error) {
    console.error("Error fetching stock data:", error.message);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
