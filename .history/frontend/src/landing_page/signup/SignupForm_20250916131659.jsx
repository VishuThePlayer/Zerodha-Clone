import React from "react";

function SignupForm() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left side image */}
          <div className="col-lg-6 text-center">
            <img
              src="https://zerodha.com/static/images/account_open.svg"
              alt="Open account"
              className="img-fluid"
            />
          </div>

          {/* Right side form */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-2">Open a Zerodha account</h2>
            <p className="text-muted mb-4">
              Start investing and trading in just a few minutes.
            </p>

            <form className="p-4 rounded shadow-sm bg-white">
              {/* Username Field */}
              <div className="mb-3">
                <label htmlFor="username" className="form-label fw-semibold">
                  Username
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-light text-muted">
                    workcation.com/
                  </span>
                  <input
                    id="username"
                    type="text"
                    className="form-control"
                    placeholder="janesmith"
                    required
                  />
                </div>
                <div className="form-text">
                  Choose a unique username for your account.
                </div>
              </div>

              {/* Mobile Number Field */}
              <div className="mb-3">
                <label htmlFor="phone" className="form-label fw-semibold">
                  Mobile Number
                </label>
                <div className="input-group input-group-lg">
                  <span className="input-group-text">
                    <img
                      src="https://zerodha.com/static/images/india-flag.svg"
                      alt="India"
                      height="16"
                      className="me-1"
                    />
                    +91
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    placeholder="Enter your 10-digit mobile number"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
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
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupForm;
