import React from "react";
import { positions } from "../data";

function Positions() {
  return (
    <div className="positions scroll-table">
      <table className="positions-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty</th>
            <th>Avg</th>
            <th>LTP</th>
            <th>P&L</th>
            <th className="col-chg">Chg</th>
          </tr>
        </thead>

        <tbody>
          {positions.map((item, index) => {
            const curValue = item.price * item.qty;
            const pnl = curValue - item.avg * item.qty;
            const isProfit = pnl >= 0;
            const pnlClass = isProfit ? "profit" : "loss";
            const dayClass = item.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{item.product}</td>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.avg.toFixed(2)}</td>
                <td>{item.price.toFixed(2)}</td>
                <td className={pnlClass}>{pnl.toFixed(2)}</td>
                <td className={`col-chg ${dayClass}`}>{item.day}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Positions;
