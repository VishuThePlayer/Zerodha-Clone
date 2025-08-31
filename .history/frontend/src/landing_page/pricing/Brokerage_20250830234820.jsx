// Brokerage.jsx
import React, { useMemo, useState } from "react";


const DATA = {
  Equity: {
    columns: ["Equity delivery", "Equity intraday", "F&O - Futures", "F&O - Options"],
    rows: [
      ["Brokerage", "Zero Brokerage", "0.03% or ₹20/executed order whichever is lower", "0.03% or ₹20/executed order whichever is lower", "Flat ₹20 per executed order"],
      [
        "STT/CTT",
        "0.1% on buy & sell",
        "0.025% on the sell side",
        "0.02% on the sell side",
        <>
          <ul className="mb-0 ps-3">
            <li>0.125% of the intrinsic value on options bought &amp; exercised</li>
            <li>0.1% on sell side (on premium)</li>
          </ul>
        </>
      ],
      [
        "Transaction charges",
        <>NSE: 0.00297%<br/>BSE: 0.00375%</>,
        <>NSE: 0.00297%<br/>BSE: 0.00375%</>,
        <>NSE: 0.00173%<br/>BSE: 0</>,
        <>NSE: 0.03503% (on premium)<br/>BSE: 0.0325% (on premium)</>
      ],
      ["GST", "18% on (brokerage + SEBI + txn charges)", "18% on (brokerage + SEBI + txn charges)", "18% on (brokerage + SEBI + txn charges)", "18% on (brokerage + SEBI + txn charges)"],
      ["SEBI charges", "₹10 / crore", "₹10 / crore", "₹10 / crore", "₹10 / crore"],
      ["Stamp charges", "0.015% or ₹1500 / crore on buy side", "0.003% or ₹300 / crore on buy side", "0.002% or ₹200 / crore on buy side", "0.003% or ₹300 / crore on buy side"]
    ]
  },
  Currency: {
    columns: ["Currency futures", "Currency options"],
    rows: [
      ["Brokerage", "0.03% or ₹20/executed order", "₹20 per executed order"],
      ["Transaction charges", "Exchange as applicable", "Exchange as applicable"],
      ["GST", "18% on (brokerage + exchange/SEBI/clearing)", "18% on (brokerage + exchange/SEBI/clearing)"],
      ["SEBI charges", "₹10 / crore", "₹10 / crore"],
      ["Stamp charges", "As per rules", "As per rules"]
    ]
  },
  Commodity: {
    columns: ["Commodity futures", "Commodity options"],
    rows: [
      ["Brokerage", "0.03% or ₹20/executed order", "₹20 per executed order"],
      ["Transaction charges", "Exchange as applicable", "Exchange as applicable"],
      ["GST", "18% on (brokerage + exchange/SEBI/clearing)", "18% on (brokerage + exchange/SEBI/clearing)"],
      ["SEBI charges", "₹10 / crore", "₹10 / crore"],
      ["Stamp charges", "As per rules", "As per rules"]
    ]
  }
};

function Brokerage() {
  const [active, setActive] = useState("Equity");
  const section = DATA[active];

  // For Equity, hide the last two columns on mobile (d-none d-md-table-cell)
  const colClasses = useMemo(() => {
    if (active === "Equity") {
      // index 0/1 visible on all sizes, 2/3 hidden on < md
      return section.columns.map((_, i) =>
        i >= 2 ? "d-none d-md-table-cell" : ""
      );
    }
    return section.columns.map(() => "");
  }, [active, section.columns]);

  return (
    <div className="container-lg py-5 brokerage">

      {/* Tabs */}
      <div className="d-flex justify-content-center mb-4">
        <ul className="nav nav-tabs border-0">
          {Object.keys(DATA).map(key => (
            <li className="nav-item mx-2" key={key}>
              <button
                className={`nav-link px-4 py-2 rounded-pill fw-semibold brokerage-tab ${active === key ? "active" : ""}`}
                onClick={() => setActive(key)}
              >
                {key}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Table */}
      <div className="table-responsive brokerage-card">
        <table className="table align-middle mb-0">
          <thead>
            <tr>
              <th className="fw-semibold brokerage-firstcol"> </th>
              {section.columns.map((col, i) => (
                <th key={i} className={`text-muted ${colClasses[i]}`}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row, idx) => {
              const [label, ...cells] = row;
              return (
                <tr key={idx} className={idx % 2 ? "brokerage-zebra" : ""}>
                  <td className="fw-semibold brokerage-firstcol-text">{label}</td>
                  {cells.map((cell, i) => (
                    <td key={i} className={`small ${colClasses[i]}`}>{cell}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Bottom note */}
      <div className="text-center mt-4">
        <a href="#" className="fw-semibold text-decoration-none text-primary">
          Calculate your costs upfront
        </a>{" "}
        <span className="text-muted">using our brokerage calculator</span>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Brokerage;
