import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AuthGuard({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Call backend to check if user is authenticated
    axios
      .get("http://localhost:5000/api/auth/me", { withCredentials: true }) // cookie sent automatically
      .then((res) => {
        if (!res.data.success) {
          window.location.href = "http://localhost:3000/login";

        } else {
          setLoading(false); // user authenticated
        }
      })
      .catch((err) => {
        navigate("http://localhost:3000/login"); // redirect if not authenticated
      });
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // show spinner or placeholder
  }

  return <>{children}</>; // user is authenticated → render dashboard
}

export default AuthGuard;
