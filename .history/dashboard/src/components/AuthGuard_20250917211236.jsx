import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const [checking, setChecking] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuth(!!token);
    setChecking(false);
  }, []);

  if (checking) return <div>Loading...</div>; // skeleton ya spinner

  return isAuth ? children : <Navigate to="http://localhost:3000/login" replace />;
};

export default AuthGuard;
