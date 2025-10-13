import React from 'react'

function Apps() {
    return ( 
        <>
            import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LiveStocks() {
  const [stocks, setStocks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/stock/live")
      .then((res) => {
        setStocks(res.data.data.trending_stocks);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching stocks", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-500 mt-10">Loading...</p>;

  return (
    <div className="p-6 space-y-10">
      {/* Top Gainers */}
      <section>
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          🔥 Top Gainers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stocks.top_gainers.map((stock) => (
            <div
              key={stock.ticker_id}
              className="p-4 rounded-2xl shadow-md bg-white border border-green-200 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">
                  {stock.company_name}
                </h3>
                <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded-lg">
                  {stock.percent_change}%
                </span>
              </div>
              <p className="text-xl font-bold text-green-600 mt-1">
                ₹{stock.price}
              </p>
              <p className="text-sm text-gray-500">
                Net: <span className="text-green-600">+{stock.net_change}</span>
              </p>
              <p className="text-xs text-gray-400 mt-2">
                H: {stock.high} | L: {stock.low}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Losers */}
      <section>
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          📉 Top Losers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stocks.top_losers.map((stock) => (
            <div
              key={stock.ticker_id}
              className="p-4 rounded-2xl shadow-md bg-white border border-red-200 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">
                  {stock.company_name}
                </h3>
                <span className="bg-red-100 text-red-700 text-sm px-2 py-1 rounded-lg">
                  {stock.percent_change}%
                </span>
              </div>
              <p className="text-xl font-bold text-red-600 mt-1">
                ₹{stock.price}
              </p>
              <p className="text-sm text-gray-500">
                Net: <span className="text-red-600">{stock.net_change}</span>
              </p>
              <p className="text-xs text-gray-400 mt-2">
                H: {stock.high} | L: {stock.low}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

        </>
     );
}

export default Apps;