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
          setLoading(false); // user is authenticated
        } else {
          window.location.href = "http://localhost:3000/login";
        }
      })
      .catch(() => {
        window.location.href = "http://localhost:3000/login";
      });
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center", marginTop: "50px" }}>Checking authentication...</div>;
  }

  return <>{children}</>;
}

export default AuthGuard;