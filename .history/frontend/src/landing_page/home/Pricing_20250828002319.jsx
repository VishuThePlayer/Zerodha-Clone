import React from "react";

function PriceItem({ icon, value, text }) {
  return (
    <div className="col d-flex align-items-center justify-content-center">
      <div className="d-flex flex-row align-items-center me-2">
        {icon && <img src={icon} alt="icon" className="me-2" style={{ width: "40px", height: "40px" }} />}
        {value !== null && (
          <>
            <span className="fw-bold text-warning fs-4">₹</span>
            <span className="fw-bolder text-warning display-5">{value}</span>
          </>
        )}
      </div>
      <div className="fs-6 text-muted">{text}</div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left */}
          <div className="col-md-6">
            <h1 className="fw-semibold mb-3">Unbeatable pricing</h1>
            <p className="text-muted">
              We pioneered the concept of discount broking and price transparency in India.
              Flat fees and no hidden charges.
            </p>
            <a href="#" className="text-primary text-decoration-none">See pricing →</a>
          </div>

          {/* Right */}
          <div className="col-md-6">
            <div className="row text-center">
              <PriceItem icon="https://zerodha.com/static/images/pricing-eq.svg" value={0} text={<><strong>Free</strong>&nbsp;account opening</>} />
              <PriceItem icon="https://zerodha.com/static/images/pricing-eq.svg" value={0} text={<><strong>Free</strong>&nbsp;equity delivery and direct mutual funds</>} />
              <PriceItem icon="https://zerodha.com/static/images/other-trades.svg" value={20} text={<><strong>Intraday</strong>&nbsp;and F&amp;O</>} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
