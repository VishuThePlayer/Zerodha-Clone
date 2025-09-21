import React from "react";
import { positions } from "../data"; // <-- correct path to your data file

function Positions() {
  return (
    <div className="positions scroll-table">
      <table className="positions-table" role="table">
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
            const qty = item.qty ?? 0;
            const avg = Number(item.avg ?? 0);
            const ltp = Number(item.ltp ?? item.price ?? 0);
            const curVal = (ltp * qty).toFixed(2);
            const pnl = (curVal - avg * qty).toFixed(2);
            const isProfit = Number(pnl) >= 0;
            const pnlClass = isProfit ? "profit" : "loss";

            return (
              <tr key={index}>
                <td>{item.product ?? item.name ?? "-"}</td>
                <td>{item.instrument ?? item.symbol ?? "-"}</td>
                <td>{qty}</td>
                <td>{avg.toFixed ? avg.toFixed(2) : Number(avg).toFixed(2)}</td>
                <td>{Number(ltp).toFixed(2)}</td>
                <td className={pnlClass}>{pnl}</td>
                <td className="col-chg">{item.change ?? item.chg ?? "-"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Positions;
