import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/me");
        if (response.data.success) {
          setUser(response.data.user); // ✅ Store user globally
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

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
