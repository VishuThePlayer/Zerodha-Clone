import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

export const AuthContext = createContext();

function AuthGuard({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log("Checking authentication...");

        // Use env variable for base URL
        const BASE_URL =
          process.env.REACT_APP_API_URL || "http://localhost:5000";

        const response = await axios.get(`${BASE_URL}/api/auth/me`);

        if (response.data.success) {
          setUser(response.data.user); // ✅ store actual user object
        } else {
          window.location.href = "http://localhost:3000/login";
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        window.location.href = "http://localhost:3000/login";
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontSize: "18px",
        }}
      >
        Checking authentication...
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthGuard;
