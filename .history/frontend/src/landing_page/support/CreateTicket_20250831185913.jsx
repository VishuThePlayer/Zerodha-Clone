import React from "react";

function CreateTicket() {
  return (
    <div className="container my-4">
      <div className="row g-4">
        {/* LEFT: Categories accordion */}
        <div className="col-lg-8">
          <div className="accordion" id="supportAccordion">
            {/* Account Opening */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Account Opening
                </button>
              </h2>
              <div
                id="collapseOe"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul className="list-unstyled ms-3">
                    <li className="mb-2"><a href="#" className="text-decoration-none">Resident individual</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none">Minor</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none">Non Resident Indian (NRI)</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none">Company, Partnership, HUF and LLP</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none">Glossary</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Zerodha Account */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Your Zerodha Account
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <p className="mb-0">Links and content go here…</p>
                </div>
              </div>
            </div>

            {/* Kite */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Kite
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <p className="mb-0">Links and content go here…</p>
                </div>
              </div>
            </div>

            {/* Funds */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Funds
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <p className="mb-0">Links and content go here…</p>
                </div>
              </div>
            </div>

            {/* Console */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Console
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <p className="mb-0">Links and content go here…</p>
                </div>
              </div>
            </div>

            {/* Coin */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Coin
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <p className="mb-0">Links and content go here…</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Notices + Quick links */}
        <div className="col-lg-4">
          {/* Notices */}
          <div className="p-3 mb-3 bg-light border rounded">
            <div className="border-start border-4 border-warning ps-3">
              <p className="mb-2">
                <a href="#" className="text-decoration-none">
                  Exclusion of F&O contracts on 8 securities from August 29, 2025
                </a>
              </p>
              <p className="mb-0">
                <a href="#" className="text-decoration-none">
                  Revision in expiry day of Index and Stock derivatives contracts
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="p-3 border rounded">
            <h6 className="mb-3">Quick links</h6>
            <ol className="m-0 ps-3">
              <li className="mb-2"><a href="#" className="text-decoration-none">Track account opening</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none">Track segment activation</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none">Intraday margins</a></li>
              <li className="mb-0"><a href="#" className="text-decoration-none">Kite user manual</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
