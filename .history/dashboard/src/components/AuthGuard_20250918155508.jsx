import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AuthGuard({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/me", { withCredentials: true })
      .then((res) => {
        if (res.data.success) {
          setLoading(false); // ✅ user authenticated → allow dashboard
        } else {
          // ✅ user not authenticated → redirect to login page
          window.location.href = "http://localhost:3000/login";
        }
      })
      .catch(() => {
        // ✅ any error (invalid token, server issue) → redirect to login
        window.location.href = "http://localhost:3000/login";
      });
  }, [navigate]);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
        <h2>Checking authentication...</h2>
      </div>
    );
  }

  return <>{children}</>;
}

export default AuthGuard;
