import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import ProductPage from "./landing_page/products/ProductPage";
import AboutPage from "./landing_page/about/AboutPage";
import "./landing_page/home.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Signup/>}></Route>
      <Route path="/pricing" element={<PricingPage/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/support" element={<SupportPage/>}></Route>
      <Route path="/products" element={<ProductPage/>}></Route>
    </Routes>
  </BrowserRouter>
);
