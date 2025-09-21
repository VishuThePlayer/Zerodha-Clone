import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthGuard({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token"); // ✅ Get token from login project
    if (!token) {
      // ❌ Token missing → redirect to main login project
      window.location.href = "http://localhost:3000/login"; 
    }
  }, []);

  return <>{children}</>; // ✅ If token exists, show dashboard
}

export default AuthGuard;
