import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [loading, setLoading] = useState(true); // ✅ start as true (since API fetches)
  const [orders, setOrders] = useState([]);     // ✅ initialize as empty array

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/orders/allorders",
          { withCredentials: true } // ✅ include cookies for auth
        );

        console.log("Orders Response:", res.data);
        setOrders(res.data || []); // ✅ handle undefined/null safely
      } catch (err) {
        console.error("Error fetching orders:", err.response?.data || err.message);
        setOrders([]); // ✅ fallback to empty array if failed
      } finally {
        setLoading(false); // ✅ always stop loading (success or fail)
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
