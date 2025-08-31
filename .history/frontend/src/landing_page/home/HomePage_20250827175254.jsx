import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";

import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

function HomePage() {
  return (
    <>
    <h1>hello</h1>
      <Navbar />
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  );
}

export default HomePage;