import React from 'react'
import { holdings } from '../data';
import { useState, useEffect} from 'react';
import axios from 'axios';

function Holdings() {

  const [holding, setHolding] = useState([]);
  const [loadig, setLoading] = useState(true)
  useEffect(() => {
    axios.get("http://localhost:5000/api/orders/holdings")
      .then((res) => {
        setHolding(res.data);
      })
  }, []);

  const totalInvestment = holding.reduce((sum, stock) => sum + stock.avg * stock.qnty, 0);
  const currentValue = holding .reduce((sum, stock) => sum + stock.price * stock.qnty, 0);
  const pnl = currentValue - totalInvestment;
  const pnlPercent = (pnl / totalInvestment) * 100;
  const pnlClass = pnl >= 0 ? "profit" : "loss";
  console.log(holding);
  return (
    <>
      <h3 className="title">Holdings ({holding.length})</h3>

      <div className="order-table">
        <table className='scroll-table'>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {holding.map((stock, index) => {
              const curValue = stock.price * stock.qnty;
              const isProfit = curValue - stock.avg * stock.qnty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td className={`${profClass}`}>{stock.name}</td>
                  <td>{stock.qnty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qnty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ✅ FIXED ROW SECTION */}
      <div className="row">
        <div className="col">
          <h5>
            {totalInvestment.toFixed(2)}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {currentValue.toFixed(2)}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={pnlClass}>
            {pnl.toFixed(2)} ({pnlPercent.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
}

export default Holdings;
