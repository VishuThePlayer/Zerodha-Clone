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
              <li className="mb-2">
                <p>
                © 2010 - 2025, Zerodha Broking Ltd.
                All rights reserved.
                </p>
                </li>
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

        {/* <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center small text-muted">
          <p className="mb-2 mb-md-0">© {new Date().getFullYear()} Zerodha — All rights reserved.</p>
          <ul className="list-inline mb-0">
            <li className="list-inline-item me-3"><a className="link-secondary text-decoration-none" href="/privacy">Privacy</a></li>
            <li className="list-inline-item me-3"><a className="link-secondary text-decoration-none" href="/terms">Terms</a></li>
            <li className="list-inline-item"><a className="link-secondary text-decoration-none" href="/security">Security</a></li>
          </ul>
        </div> */}
      </div>
      <div className="container">
        <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF

            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances

            Smart Online Dispute Resolution | Grievances Redressal Mechanism

            Investments in securities market are subject to market risks; read all the related documents carefully before investing.

            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.

            India's largest broker based on networth as per NSE. NSE broker factsheet

            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
