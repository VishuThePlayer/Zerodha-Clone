import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";

function HomePage() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Awards/>
    <Stats/>
    </>
  );
}

export default HomePage;