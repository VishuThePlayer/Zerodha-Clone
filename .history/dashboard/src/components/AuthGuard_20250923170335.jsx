import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// 🔧 FIXED: Configure axios globally
axios.defaults.withCredentials = true;

export const AuthContext = createContext();

function AuthGuard({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log("🔍 Checking authentication...");
        console.log("Current domain:", window.location.hostname);
        
        const response = await axios.get(
          "http://localhost:5000/api/auth/loginapi/auth/me",
          {
            withCredentials: true,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }
        );

        console.log("✅ Auth response:", response.data);

        if (response.data.success && response.data.user) {
          console.log("✅ User authenticated:", response.data.user.email);
          setUser(response.data.user);
        } else {
          console.log("❌ Authentication failed - no user data");
          redirectToLogin();
        }
      } catch (error) {
        console.error("❌ Auth check failed:", error);
        
        // Check if it's a 401 (unauthorized) or network error
        if (error.response?.status === 401) {
          console.log("🔒 User not authenticated - redirecting to login");
        } else {
          console.log("🌐 Network or server error:", error.message);
        }
        
        redirectToLogin();
      } finally {
        setLoading(false);
      }
    };

    const redirectToLogin = () => {
      console.log("🔄 Redirecting to login...");
      // Use replace instead of href to avoid browser history issues
      window.location.replace("https://zerodha-clone-three-delta.vercel.app/login");
    };

    // Add a small delay to ensure the page is fully loaded
    const timer = setTimeout(checkAuth, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // 🔧 FIXED: Better loading state
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div
          style={{
            border: "4px solid #f3f3f3",
            borderTop: "4px solid #3498db",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            animation: "spin 1s linear infinite",
            marginBottom: "20px"
          }}
        />
        <div style={{ fontSize: "18px", color: "#666" }}>
          Checking authentication...
        </div>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  // Only render children if user is authenticated
  if (!user) {
    return null; // This should not happen as we redirect, but safety check
  }

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthGuard;