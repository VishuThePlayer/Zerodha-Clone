// ChargesTabs.jsx
import React, { useState } from "react";

/** Example data — tweak freely */
const DATA = {
  Equity: {
    columns: ["Equity delivery", "Equity intraday", "F&O - Futures", "F&O - Options"],
    rows: [
      ["Brokerage", "Zero Brokerage", "0.03% or ₹20/executed order whichever is lower", "0.03% or ₹20/executed order whichever is lower", "Flat ₹20 per executed order"],
      ["STT/CTT", "0.1% on buy & sell", "0.025% on the sell side", "0.02% on the sell side",
        <>
          <ul className="mb-0">
            <li>0.125% of the intrinsic value on options that are bought and exercised</li>
            <li>0.1% on sell side (on premium)</li>
          </ul>
        </>
      ],
      ["Transaction charges",
        <>NSE: 0.00297%<br/>BSE: 0.00375%</>,
        <>NSE: 0.00297%<br/>BSE: 0.00375%</>,
        <>NSE: 0.00173%<br/>BSE: 0</>,
        <>NSE: 0.03503% (on premium)<br/>BSE: 0.0325% (on premium)</>
      ],
      ["GST",
        "18% on (brokerage + SEBI charges + transaction charges)",
        "18% on (brokerage + SEBI charges + transaction charges)",
        "18% on (brokerage + SEBI charges + transaction charges)",
        "18% on (brokerage + SEBI charges + transaction charges)"
      ],
      ["SEBI charges", "₹10 / crore", "₹10 / crore", "₹10 / crore", "₹10 / crore"],
      ["Stamp charges",
        "0.015% or ₹1500 / crore on buy side",
        "0.003% or ₹300 / crore on buy side",
        "0.002% or ₹200 / crore on buy side",
        "0.003% or ₹300 / crore on buy side"
      ]
    ]
  },

  // Put your own structures here:
  Currency: {
    columns: ["Currency futures", "Currency options"],
    rows: [
      ["Brokerage", "0.03% or ₹20/executed order", "₹20 per executed order"],
      ["Transaction charges", "Exchange as applicable", "Exchange as applicable"],
      ["GST", "18% on (brokerage + exchange/SEBI/clearing)", "18% on (brokerage + exchange/SEBI/clearing)"],
      ["SEBI charges", "₹10 / crore", "₹10 / crore"],
      ["Stamp charges", "As per state/segment rules", "As per state/segment rules"]
    ]
  },

  Commodity: {
    columns: ["Commodity futures", "Commodity options"],
    rows: [
      ["Brokerage", "0.03% or ₹20/executed order", "₹20 per executed order"],
      ["Transaction charges", "Exchange as applicable", "Exchange as applicable"],
      ["GST", "18% on (brokerage + exchange/SEBI/clearing)", "18% on (brokerage + exchange/SEBI/clearing)"],
      ["SEBI charges", "₹10 / crore", "₹10 / crore"],
      ["Stamp charges", "As per state/segment rules", "As per state/segment rules"]
    ]
  }
};

function Brokerage() {
  const [active, setActive] = useState("Equity");
  const section = DATA[active];

  return (
    <div className="container-lg py-5">
      {/* Tabs */}
      <div className="d-flex justify-content-center mb-3">
        <ul className="nav nav-tabs">
          {Object.keys(DATA).map(key => (
            <li className="nav-item" key={key}>
              <button
                className={`nav-link ${active === key ? "active" : ""}`}
                onClick={() => setActive(key)}
              >
                {key}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead>
            <tr>
              <th style={{ width: 220 }}></th>
              {section.columns.map((col, i) => (
                <th key={i} className="text-muted fw-normal">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row, idx) => {
              const [label, ...cells] = row;
              return (
                <tr key={idx}>
                  <td className="text-muted">{label}</td>
                  {cells.map((cell, i) => (
                    <td key={i}>
                      <div className="small">{cell}</div>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Bottom note / link */}
      <div className="text-center mt-4">
        <a href="#" className="link-primary text-decoration-none">
          Calculate your costs upfront
        </a>{" "}
        <span className="text-muted">using our brokerage calculator</span>
      </div>
    </div>
  );
}

export default Brokerage;
