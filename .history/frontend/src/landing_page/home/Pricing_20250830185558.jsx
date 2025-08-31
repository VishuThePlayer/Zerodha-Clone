import React from "react";
import {}

export default function Pricing() {
  return (
    <section className="py-5">
      <div className="pricing container">
        <div className="row align-items-center">
          {/* Left */}
          <div className="col-md-6">
            <h1 className="fw-semibold mb-3 fs-3">Unbeatable pricing</h1>
            <p className="text-muted fs-5">
              We pioneered the concept of discount broking and price transparency in India.
              Flat fees and no hidden charges.
            </p>
            <a href="#" className="text-primary text-decoration-none">
              See pricing →
            </a>
          </div>

          {/* Right */}
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="row text-center gy-4 gy-sm-0">
              <div className="col-12 col-sm-4 d-flex align-items-center justify-content-center mb-4 mb-sm-0">
                <div className="d-flex flex-row align-items-baseline me-2 text-nowrap">
                  <span className="fw-bold text-warning fs-4">₹</span>
                  <span className="fw-bolder text-warning display-5">0</span>
                </div>
                <div className="fs-7 text-muted">
                  <strong>Free</strong>&nbsp;account opening
                </div>
              </div>

              <div className="col-12 col-sm-4 d-flex align-items-center justify-content-center mb-4 mb-sm-0">
                <div className="d-flex flex-row align-items-baseline me-2 text-nowrap">
                  <span className="fw-bold text-warning fs-4">₹</span>
                  <span className="fw-bolder text-warning display-5">0</span>
                </div>
                <div className="fs-7 text-muted">
                  <strong>Free</strong>&nbsp;equity delivery and direct mutual funds
                </div>
              </div>

              <div className="col-12 col-sm-4 d-flex align-items-center justify-content-center">
                <div className="d-flex flex-row align-items-baseline me-2 text-nowrap">
                  <span className="fw-bold text-warning fs-4">₹</span>
                  <span className="fw-bolder text-warning display-5">20</span>
                </div>
                <div className="fs-7 text-muted">
                  <strong>Intraday</strong>&nbsp;and F&amp;O
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
