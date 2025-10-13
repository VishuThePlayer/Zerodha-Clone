import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [orders, setorder] = useState(null);
  useEffect(() => {
    axios.get(
      "http://localhost:5000/api/orders/allorders",
      { withCredentials: true } // ✅ cookie-based auth ke liye
    )
    .then((res) => {
      console.log("Orders Response:", res.data);
      setLoading(false);
      console.log(loading);
      setorder(res.data);
    })
    .catch((err) => {
      console.error("Error fetching orders:", err.response?.data || err.message);
    });
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
