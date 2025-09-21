import React from "react";

function CreateTicket() {
  return (
    <div className="container my-4">
      <div className="row g-4">
        {/* LEFT: Categories accordion */}
        <div className="col-lg-8">
          <div className="support-accordion accordion accordion-flush" id="supportAccordion">
            {/* Account Opening */}
            <div className="accordion-item support-card">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button support-acc-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <span className="acc-icon me-2">+</span> Account Opening
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul className="support-list">
                    <li><a href="#" className="link-primary text-decoration-none">Resident individual</a></li>
                    <li><a href="#" className="link-primary text-decoration-none">Minor</a></li>
                    <li><a href="#" className="link-primary text-decoration-none">Non Resident Indian (NRI)</a></li>
                    <li><a href="#" className="link-primary text-decoration-none">Company, Partnership, HUF and LLP</a></li>
                    <li><a href="#" className="link-primary text-decoration-none">Glossary</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Zerodha Account */}
            <div className="accordion-item support-card">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed support-acc-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <span className="acc-icon me-2">+</span> Your Zerodha Account
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul className="support-list">
                    <li><a href="#" className="link-primary text-decoration-none">Login issues</a></li>
                    <li><a href="#" className="link-primary text-decoration-none">Profile / KYC</a></li>
                    <li><a href="#" className="link-primary text-decoration-none">Security</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Kite */}
            <div className="accordion-item support-card">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed support-acc-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <span className="acc-icon me-2">+</span> Kite
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul className="support-list">
                    <li><a href="#" className="link-primary text-decoration-none">Order types</a></li>
                    <li><a href="#" className="link-primary text-decoration-none">Charts</a></li>
                    <li><a href="#" className="link-primary text-decoration-none">Shortcuts</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Funds */}
            <div className="accordion-item support-card">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed support-acc-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <span className="acc-icon me-2">+</span> Funds
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul className="support-list">
                    <li><a href="#" className="link-primary text-decoration-none">Add / Withdraw funds</a></li>
                    <li><a href="#" className="link-primary text-decoration-none">Charges</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Console */}
            <div className="accordion-item support-card">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed support-acc-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <span className="acc-icon me-2">+</span> Console
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul className="support-list">
                    <li><a href="#" className="link-primary text-decoration-none">P&L / Reports</a></li>
                    <li><a href="#" className="link-primary text-decoration-none">Tax P&L</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Coin */}
            <div className="accordion-item support-card">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed support-acc-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  <span className="acc-icon me-2">+</span> Coin
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul className="support-list">
                    <li><a href="#" className="link-primary text-decoration-none">SIP</a></li>
                    <li><a href="#" className="link-primary text-decoration-none">Redeem / Switch</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Notices + Quick links */}
        <div className="col-lg-4">
          {/* Notices */}
          <div className="notice-box p-3 mb-3">
            <div className="ps-3">
              <p className="mb-2">
                <a href="#" className="text-decoration-none link-primary">
                  Exclusion of F&O contracts on 8 securities from August 29, 2025
                </a>
              </p>
              <p className="mb-0">
                <a href="#" className="text-decoration-none link-primary">
                  Revision in expiry day of Index and Stock derivatives contracts
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="quick-links-box p-3">
            <h6 className="mb-3">Quick links</h6>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item border-0 ps-0">
                <a href="#" className="text-decoration-none link-primary">Track account opening</a>
              </li>
              <li className="list-group-item border-0 ps-0">
                <a href="#" className="text-decoration-none link-primary">Track segment activation</a>
              </li>
              <li className="list-group-item border-0 ps-0">
                <a href="#" className="text-decoration-none link-primary">Intraday margins</a>
              </li>
              <li className="list-group-item border-0 ps-0">
                <a href="#" className="text-decoration-none link-primary">Kite user manual</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
