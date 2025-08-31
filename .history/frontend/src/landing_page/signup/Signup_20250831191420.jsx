import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar"
import Footer from "../Footer"

function Signup() {
  // Simple state for mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <Navbar/>

      {/* HERO / HEADLINE */}
      <section className="py-5 bg-light border-bottom">
        <div className="container">
          <h1 className="text-center fw-semibold">
            Open a free demat and trading account online
          </h1>
          <p className="text-center text-muted mt-2">
            Start investing brokerage free and join a community of <span className="fw-semibold">1.6+ crore</span> investors and traders
          </p>
        </div>
      </section>

      {/* SIGNUP SPLIT */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center">
              <img
                src="/static/images/account_open.svg"
                alt="Open account"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="h4 mb-1">Signup now</h2>
              <small className="text-muted d-block mb-3">
                Or track your existing application
              </small>

              {/* form */}
              <form className="needs-validation" noValidate>
                <div className="input-group input-group-lg mb-2">
                  <span className="input-group-text">
                    <img
                      src="/static/images/india-flag.svg"
                      alt="India"
                      height="16"
                      className="me-1"
                    />
                    +91
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter your mobile number"
                    min="1000000000"
                    max="9999999999"
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Get OTP
                  </button>
                </div>
              </form>

              <p className="text-muted small mt-3">
                By proceeding, you agree to the Zerodha{" "}
                <a
                  href="https://zerodha.com/terms-and-conditions"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  terms
                </a>{" "}
                &amp;{" "}
                <a
                  href="https://zerodha.com/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  privacy policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENT OPTIONS */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Investment options with Zerodha demat account</h2>

          <div className="row g-4 justify-content-center">
            {[
              { img: "/static/images/stocks-acop.svg", title: "Stocks", text: "Invest in all exchange-listed securities" },
              { img: "/static/images/mf-acop.svg", title: "Mutual funds", text: "Invest in commission-free direct mutual funds" },
              { img: "/static/images/ipo-acop.svg", title: "IPO", text: "Apply to the latest IPOs instantly via UPI" },
              { img: "/static/images/fo-acop.svg", title: "Futures & options", text: "Hedge and mitigate market risk through simplified F&O trading" },
            ].map((card, i) => (
              <div className="col-12 col-sm-6 col-lg-3" key={i}>
                <div className="d-flex gap-3 align-items-center p-3 bg-white border rounded-3 h-100">
                  <img src={card.img} alt={card.title} width="48" height="48" />
                  <div>
                    <h3 className="h6 mb-1">{card.title}</h3>
                    <p className="text-muted mb-0 small">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <a href="https://zerodha.com/investments/" className="btn btn-outline-primary">
              Explore Investments
            </a>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Steps to open a demat account with Zerodha</h2>
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center">
              <img
                src="/static/images/steps-acop.svg"
                alt="Steps"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              {[
                "Enter the requested details",
                "Complete e-sign & verification",
                "Start investing!",
              ].map((s, i) => (
                <div className="d-flex align-items-center mb-3" key={i}>
                  <div className="rounded-circle border text-center me-3" style={{width: 42, height: 42, lineHeight: "42px"}}>
                    {`0${i + 1}`}
                  </div>
                  <p className="mb-0">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-6">
              <p className="text-center mb-3">
                <img
                  src="/static/images/acop-benefits.svg"
                  alt="Benefits"
                  className="img-fluid"
                />
              </p>
              <h2>Benefits of opening a Zerodha demat account</h2>
            </div>
            <div className="col-lg-6">
              <h3 className="h5">Unbeatable pricing</h3>
              <p className="text-muted">
                Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&amp;O trades.
              </p>

              <h3 className="h5 mt-3">Best investing experience</h3>
              <p className="text-muted">
                Simple and intuitive trading platform with an easy-to-understand user interface.
              </p>

              <h3 className="h5 mt-3">No spam or gimmicks</h3>
              <p className="text-muted">
                Committed to transparency — no gimmicks, spam, “gamification”, or intrusive push notifications.
              </p>

              <h3 className="h5 mt-3">The Zerodha universe</h3>
              <p className="text-muted">
                More than just an app — gain free access to the entire ecosystem of our partner products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOUNT TYPES */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Explore different account types</h2>
          <div className="row g-4">
            {[
              { img: "/static/images/acop-individual.svg", title: "Individual Account", text: "Invest in equity, mutual funds and derivatives", link: "https://signup.zerodha.com/" },
              { img: "/static/images/acop-huf.svg", title: "HUF Account", text: "Make tax-efficient investments for your family", link: "https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening/huf" },
              { img: "/static/images/acop-nri.svg", title: "NRI Account", text: "Invest in equity, mutual funds, debentures, and more", link: "https://zerodha.com/open-account/nri" },
              { img: "/static/images/acop-minor.svg", title: "Minor Account", text: "Teach your little ones about money & invest for their future with them", link: "https://signup.zerodha.com/minor/" },
              { img: "/static/images/acop-corporate.svg", title: "Corporate / LLP/ Partnership", text: "Manage your business surplus and investments easily", link: "https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening" },
            ].map((card, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <a href={card.link} className="text-decoration-none">
                  <div className="p-3 border rounded-3 h-100 bg-white">
                    <img src={card.img} alt={card.title} className="mb-3" height="64" />
                    <h3 className="h6 text-dark">{card.title}</h3>
                    <p className="text-muted mb-0 small">{card.text}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (Bootstrap Accordion) */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">FAQs</h2>

          <div className="accordion" id="faqAccordion">
            {[
              {
                q: "What is a Zerodha account?",
                a: "A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.",
              },
              {
                q: "What documents are required to open a demat account?",
                a: (
                  <>
                    The following documents are required to open a Zerodha account online:
                    <ul className="mt-2">
                      <li>PAN number</li>
                      <li>Aadhaar Card (Linked with a phone number for OTP verification)</li>
                      <li>Cancelled cheque or bank account statement (To link your bank account)</li>
                      <li>Income proof (Required only if you wish to trade in Futures &amp; options)</li>
                    </ul>
                  </>
                ),
              },
              { q: "Is Zerodha account opening free?", a: "Yes, It is completely free." },
              {
                q: "Are there any maintenance charges for a demat account?",
                a: (
                  <>
                    The account maintenance charges are applicable based on the account type.
                    <br />
                    For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000.
                    <br />
                    For non-Basic Services Demat Account: ₹300 per year + GST.
                  </>
                ),
              },
              {
                q: "Can I open a demat account without a bank account?",
                a: (
                  <>
                    To open a demat account, you must have a bank account in your name. If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a cancelled cheque or a bank statement to link your bank account to Zerodha.
                  </>
                ),
              },
            ].map((item, i) => {
              const id = `faq${i}`;
              return (
                <div className="accordion-item" key={id}>
                  <h2 className="accordion-header" id={`heading-${id}`}>
                    <button
                      className={`accordion-button ${i === 0 ? "" : "collapsed"}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${id}`}
                      aria-expanded={i === 0 ? "true" : "false"}
                      aria-controls={`collapse-${id}`}
                    >
                      {item.q}
                    </button>
                  </h2>
                  <div
                    id={`collapse-${id}`}
                    className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                    aria-labelledby={`heading-${id}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{item.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5">
        <div className="container text-center">
          <h2>Open a Zerodha account</h2>
          <h3 className="h5 text-muted">
            Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and F&amp;O trades.
          </h3>
          <div className="mt-3">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="btn btn-primary"
            >
              Signup for free
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER (optional: you can replace with your shared <Footer/> component) */}
      <Footer/>
      {/* Keep your existing global footer to avoid duplication */}
    </>
  );
}

export default Signup;
