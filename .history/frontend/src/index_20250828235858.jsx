import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./landing_page/home/HomePage";
import Signup from "../public/"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/" element={<HomePage/>}></Route>
    </Routes>
  </BrowserRouter>
);
