import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// 🔧 FIXED: Configure axios defaults for credentials
axios.defaults.withCredentials = true;

function AuthGuard({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = usestate()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log("Checking authentication...");
        
        // 🔧 FIXED: Correct endpoint (/me instead of /getCurrentUser)
        const response = await axios.get("http://localhost:5000/api/auth/me", {
          withCredentials: true,
        });

        // console.log("Auth response:", response.data);

        if (response.data.success) {
          setIsAuthenticated(true);
          setLoading(false);
        } else {
          // Redirect to frontend login
          window.location.href = "http://localhost:3000/login";
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        // Redirect to frontend login
        window.location.href = "http://localhost:3000/login";
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div style={{ 
        textAlign: "center", 
        marginTop: "50px",
        fontSize: "18px" 
      }}>
        Checking authentication...
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : null;
}

export default AuthGuard;