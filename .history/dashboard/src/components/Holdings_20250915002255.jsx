import React from 'react'
import { holdings } from '../data';
import { useState, useEffect} from 'react';
import axios from 'axios';

function Holdings() {
  const totalInvestment = holdings.reduce((sum, stock) => sum + stock.avg * stock.qty, 0);
  const currentValue = holdings.reduce((sum, stock) => sum + stock.price * stock.qty, 0);
  const pnl = currentValue - totalInvestment;
  const pnlPercent = (pnl / totalInvestment) * 100;
  const pnlClass = pnl >= 0 ? "profit" : "loss";

  const [holding, setHolding] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/allHoldings")
      .then((res) => {
        console.log(res.data);
        setHolding(res.data);
      })
  }, []);

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

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
            {holdings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
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
