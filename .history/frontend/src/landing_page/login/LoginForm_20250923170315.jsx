import React, { useState } from "react";
import { Snackbar, Alert, Slide } from "@mui/material";
import { CheckCircle, ErrorOutline } from "@mui/icons-material";
import axios from "axios";

// 🔧 FIXED: Configure axios for credentials
axios.defaults.withCredentials = true;

function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("success");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("🔧 Attempting login for:", email);
      
      const res = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          email,
          password: password,
        },
        {
          withCredentials: true, // Ensure cookies are sent and received
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      console.log("✅ Login response:", res.data);

      if (res.data.success) {
        setSnackbarType("success");
        setSnackbarMessage("🎉 Login successful! Redirecting...");
        setOpenSnackbar(true);

        // 🔧 FIXED: Wait a bit longer and use window.location.replace for better redirect
        setTimeout(() => {
          window.location.replace("http://localhost:3001/");
        }, 2000);
      } else {
        setSnackbarType("error");
        setSnackbarMessage(res.data.message || "Invalid credentials");
        setOpenSnackbar(true);
      }
    } catch (err) {
      console.error("❌ Login error:", err);
      
      let errorMessage = "Login failed. Please try again.";
      
      if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setSnackbarType("error");
      setSnackbarMessage(errorMessage);
      setOpenSnackbar(true);
    } finally {
      setIsLoading(false);
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
                  disabled={isLoading}
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
                  disabled={isLoading}
                  required
                />
              </div>

              {/* Submit */}
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg py-3 fs-4 shadow-lg"
                  style={{ borderRadius: "12px" }}
                  disabled={isLoading}
                >
                  {isLoading ? "🔄 Logging in..." : "🔑 Login"}
                </button>
              </div>
            </form>

            <p className="text-muted small mt-3">
              Don't have an account?{" "}
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