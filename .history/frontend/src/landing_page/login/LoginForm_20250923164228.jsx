import React, { useState } from "react";
import { Snackbar, Alert, Slide } from "@mui/material";
import { CheckCircle, ErrorOutline } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("success");


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://zerodha-clone-bui7.onrender.com/api/auth/login", {
        email,
        password: password,
      },
      {withCredentials: true}
    );

      if (res.data.success) {
        setSnackbarType("success");
        setSnackbarMessage("🎉 Login successful! Redirecting...");
        setOpenSnackbar(true);

        setTimeout(() => {
        window.location.href = "https://l 
        }, 1500);
      } else {
        setSnackbarType("error");
        setSnackbarMessage(res.data.message || "Invalid credentials");
        setOpenSnackbar(true);
      }
    } catch (err) {
      setSnackbarType("error");
      setSnackbarMessage(err.message);
      setOpenSnackbar(true);
    }
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center">
            <img
              src="https://zerodha.com/static/images/account_open.svg"
              alt="Login Illustration"
              className="img-fluid"
              style={{ maxWidth: "90%" }}
            />
          </div>

          <div className="col-lg-6">
            <h1 className="fw-bold mb-3 display-5">Welcome Back</h1>
            <p className="text-muted mb-4 fs-5">
              Enter your email and password to continue.
            </p>

            <form
              className="p-5 rounded-4 shadow bg-white"
              style={{ fontSize: "1.1rem" }}
              onSubmit={handleSubmit}
            >
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
              <div className="mb-5">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Submit */}
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg py-3 fs-4 shadow-lg"
                  style={{ borderRadius: "12px" }}
                >
                  🔑 Login
                </button>
              </div>
            </form>

            <p className="text-muted small mt-3">
              Don’t have an account?{" "}
              <a href="/signup" className="text-decoration-none">
                Sign up here
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={SlideTransition}
      >
        <Alert
          severity={snackbarType}
          variant="filled"
          icon={
            snackbarType === "success" ? (
              <CheckCircle fontSize="large" />
            ) : (
              <ErrorOutline fontSize="large" />
            )
          }
          onClose={() => setOpenSnackbar(false)}
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </section>
  );
}

export default LoginForm;
