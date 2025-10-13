import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [orders, setorder] = useState(null);
  useEffect(() => {
  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/orders/allorders", { withCredentials: true });
      console.log("Orders Response:", res.data);
      setorder(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err.response?.data || err.message);
    } finally {
      setLoading(false); // ✅ moves here
    }
  };
  
  fetchOrders();
}, []);


  return (

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
                    </tr>
                    {orders.map((item, index) => {
                        return (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>{item.price}</td>
                        </tr>
                        );
                    })}
                </table>
            </div>
          // orders.map((ele, i) => (
          //   <div key={i}>
          //     <h1>{ele.name}</h1>
          //     <h1>{ele.qty}</h1>
          //     <h1>{ele.price}</h1>
          //   </div>
          // ))
        ) : (
          <>
            <h2>You haven’t placed any orders yet</h2>
            <button className="get-started-btn">Get Started</button>
          </>
        )
      }
      </div>
  );
}

export default Orders;
