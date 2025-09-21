import React from "react";

function Footer() {
  return (
    <footer className="bg-light pt-5 pb-4">
      <div className="container">
        <div className="row g-4 justify-content-between">
          {/* Brand / intro */}
          <div className="col-12 col-md-3">
            <a className="navbar-brand d-inline-block mb-3" href="/" aria-label="Zerodha Home">
              <img
                src="https://zerodha.com/static/images/logo.svg"
                alt="Zerodha"
                style={{ maxWidth: "160px", width: "100%", height: "auto" }}
              />
            </a>
            <ul className="list-unstyled small text-muted">
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/open-account">Open demat account</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/minor-account">Minor demat account</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/nri">NRI demat account</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/commodity">Commodity</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/dematerialisation">Dematerialisation</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/fund-transfer">Fund transfer</a></li>
            </ul>
          </div>

          {/* Columns */}
          <div className="col-6 col-md-2">
            <h6 className="fw-semibold mb-3">Account</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/open-account">Open demat account</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/minor-account">Minor demat account</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/nri">NRI demat account</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/commodity">Commodity</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/dematerialisation">Dematerialisation</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/fund-transfer">Fund transfer</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-semibold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/support">Help center</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/contact">Contact us</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/status">System status</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/pricing">Pricing</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/downloads">Downloads</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-semibold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/about">About</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/careers">Careers</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/press">Press</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/legal">Legal</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/security">Security</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-semibold mb-3">Quick links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/market-overview">Market overview</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/products">Products</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/refer">Refer & earn</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/blog">Blog</a></li>
              <li className="mb-2"><a className="link-secondary text-decoration-none" href="/disclosures">Disclosures</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center small text-muted">
          <p className="mb-2 mb-md-0">© {new Date().getFullYear()} Zerodha — All rights reserved.</p>
          <ul className="list-inline mb-0">
            <li className="list-inline-item me-3"><a className="link-secondary text-decoration-none" href="/privacy">Privacy</a></li>
            <li className="list-inline-item me-3"><a className="link-secondary text-decoration-none" href="/terms">Terms</a></li>
            <li className="list-inline-item"><a className="link-secondary text-decoration-none" href="/security">Security</a></li>
          </ul>
        </div>
      </div>
      <div></div>
    </footer>
  );
}

export default Footer;
