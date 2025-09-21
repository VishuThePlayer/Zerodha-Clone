import React from "react";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import AuthGuard from "./AuthGuard";

function Home() {
  return (
    <AuthGuard>
      {/* Yeh part sirf tab render hoga jab user logged in hai */}
      <TopBar />
      <Dashboard />
    </AuthGuard>
  );
}

export default Home;
