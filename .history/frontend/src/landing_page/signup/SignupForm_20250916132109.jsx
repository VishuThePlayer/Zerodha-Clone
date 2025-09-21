import React from "react";

function SignupForm() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left side illustration */}
          <div className="col-lg-6 text-center">
            <img
              src="https://zerodha.com/static/images/account_open.svg"
              alt="Open account"
              className="img-fluid"
            />
          </div>

          {/* Right side form */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">Create Your Account</h2>
            <p className="text-muted mb-4">
              Fill in the details below to get started.
            </p>

            <form className="p-4 rounded shadow-sm bg-white">
              {/* First & Last Name in one row */}
              <div className="row mb-1 align-it-middle">
                <div className="col-5">
                  <label htmlFor="firstName" className="form-label fw-semibold">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="col-5">
                  <label htmlFor="lastName" className="form-label fw-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              {/* Username */}
              <div className="mb-3">
                <label htmlFor="username" className="form-label fw-semibold">
                  Username
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-light text-muted">
                    workcation.com/
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="johndoe"
                    required
                  />
                </div>
                <div className="form-text">
                  Choose a unique username for your account.
                </div>
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter a strong password"
                  required
                />
              </div>

              {/* Mobile Number */}
              <div className="mb-4">
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
                    className="form-control"
                    id="phone"
                    placeholder="9876543210"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">
                  Sign Up
                </button>
              </div>
            </form>

            <p className="text-muted small mt-3">
              By signing up, you agree to the{" "}
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
