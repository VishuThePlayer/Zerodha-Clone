import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import PricingPage from "./landing_page/pricing/PricingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/pricing" element={<PricingPage/>}></Route>
      <Route path="/about" element={<HomePage/>}></Route>
      <Route path="/support" element={<HomePage/>}></Route>
    </Routes>
  </BrowserRouter>
);
