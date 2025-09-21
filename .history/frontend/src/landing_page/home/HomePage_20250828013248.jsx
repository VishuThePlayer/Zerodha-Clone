import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Educations from "./Educations";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";
import "./"

function HomePage() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Awards/>
    <Pricing/>
    <Educations/>
    <OpenAccount/>
    <Footer/>
    </>
  );
}

export default HomePage;