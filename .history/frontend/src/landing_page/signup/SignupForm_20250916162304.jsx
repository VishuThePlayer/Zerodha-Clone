import React, { useState } from "react";
import { Snackbar, Alert, Slide } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { useEffect } from "react";
import axios from 'axios';
function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}

function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  let data = {
    email: email,
    firstName:firstName,
    lastName:lastName,
    password: password,
    phone: phone,
    username: username,
  }

 
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ firstName, lastName, username, email, password, phone });
    setOpenSnackbar(true);

    // setFirstName("");
    // setLastName("");
    // setUsername("");
    // setEmail("");
    // setPassword("");
    // setPhone("");
  };

   useEffect(() => {
    axios.post("http://localhost:5000/signup", {data}).then((res) => {
      console.log(res.data);
      co
    })
  }, [handleSubmit])


  

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
              style={{ maxWidth: "90%" }}
            />
          </div>

          {/* Right side form */}
          <div className="col-lg-6">
            <h1 className="fw-bold mb-3 display-5">Create Your Account</h1>
            <p className="text-muted mb-4 fs-5">
              Fill in the details below to get started.
            </p>

            <form
              className="p-5 rounded-4 shadow bg-white"
              style={{ fontSize: "1.1rem" }}
              onSubmit={handleSubmit}
            >
              {/* First & Last Name */}
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label fw-semibold">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="firstName"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label fw-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="lastName"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Username */}
              <div className="mb-4">
                <label htmlFor="username" className="form-label fw-semibold">
                  Username
                </label>
                <div className="input-group input-group-lg">
                  <span className="input-group-text bg-light text-muted">@</span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="johndoe"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-text fs-6">
                  Choose a unique username for your account.
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="password"
                  placeholder="Enter a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Mobile Number */}
              <div className="mb-5">
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg py-3 fs-4 shadow-lg"
                  style={{ borderRadius: "12px" }}
                >
                  🚀 Sign Up
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

      {/* ✅ Snackbar Notification */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={SlideTransition}
      >
        <Alert
          severity="success"
          variant="filled"
          icon={<CheckCircle fontSize="large" />}
          onClose={() => setOpenSnackbar(false)}
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            borderRadius: 3,
            boxShadow: 3,
            backgroundColor: "#4caf50",
          }}
        >
          🎉 Account created successfully!
        </Alert>
      </Snackbar>
    </section>
  );
}

export default SignupForm;
