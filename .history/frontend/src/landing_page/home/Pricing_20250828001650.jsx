import React from "react";

// Simple, self‑contained version of the Zerodha-like pricing section
// Uses plain CSS + Bootstrap-ish utility classes (but does not require Bootstrap).
// Drop this into your project and it should render like the screenshot.

const styles = `
  .pricing-wrap { padding: 4rem 0; }
  .pricing-container { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 3rem; }
  @media (min-width: 992px) { .pricing-container { grid-template-columns: 1fr 1fr; align-items: center; } }

  .pricing-left h1 { font-size: 2.5rem; line-height: 1.2; margin: 0 0 1rem; font-weight: 600; }
  .pricing-left p { color: #4a5568; font-size: 1.125rem; margin: 0 0 1.25rem; }
  .pricing-left a { color: #2563eb; text-decoration: none; font-weight: 500; }
  .pricing-left a:hover { text-decoration: underline; }

  .pricing-right { display: flex; justify-content: space-between; gap: 2rem; flex-wrap: wrap; }
  .price-item { display: flex; align-items: center; gap: .75rem; min-width: 240px; }
  .price-figure { display: inline-flex; align-items: baseline; gap: .25rem; }
  .rupee { font-weight: 700; color: #e9a302; font-size: 1.5rem; }
  .num { font-weight: 800; color: #e9a302; font-size: 3.25rem; line-height: 1; }
  .tagline { color: #4a5568; font-size: .95rem; line-height: 1.3; max-width: 180px; }

  /* subtle sparkle background to mimic screenshot */
  .sparkle {
    position: relative;
  }
  .sparkle::after {
    content: "";
    position: absolute;
    right: -10px; top: -8px;
    width: 36px; height: 18px;
    background: radial-gradient(circle at 6px 6px, rgba(37,99,235,.22) 2px, transparent 3px),
                radial-gradient(circle at 18px 10px, rgba(37,99,235,.18) 2px, transparent 3px),
                radial-gradient(circle at 28px 4px, rgba(37,99,235,.15) 2px, transparent 3px);
    pointer-events: none;
  }
`;

function PriceItem({ value, text }) {
  return (
    <div className="price-item">
      <div className="price-figure sparkle">
        <span className="rupee">₹</span>
        <span className="num">{value}</span>
      </div>
      <div className="tagline">{text}</div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="pricing-wrap">
      <style>{styles}</style>
      <div className="pricing-container">
        {/* Left */}
        <div className="pricing-left">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>
          <a href="#">See pricing →</a>
        </div>

        {/* Right */}
        <div className="pricing-right">
          <PriceItem value={0} text={<><strong>Free</strong> account opening</>} />
          <PriceItem value={0} text={<><strong>Free</strong> equity delivery<br/>and direct mutual funds</>} />
          <PriceItem value={20} text={<><strong>Intraday</strong> and<br/>F&amp;O</>} />
        </div>
      </div>
    </section>
  );
}
