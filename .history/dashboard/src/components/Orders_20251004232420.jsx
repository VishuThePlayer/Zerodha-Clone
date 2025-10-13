import React, { useEffect, useState } from "react";
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
