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
        const response = await axios.get("http://192.168.1.10:5000/api/auth/me");

        if (response.data.success) {
          setUser(response.data.user); // store actual user object
        } else {
          window.location.href = "http://192.168.1.10:3000/login";
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        window.location.href = "http://192.168.1.10:3000/login";
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

  // ✅ Provide setUser so other components can update the user state
  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthGuard;
