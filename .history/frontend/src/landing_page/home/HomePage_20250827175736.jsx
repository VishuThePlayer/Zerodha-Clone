import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Educations";

import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Awards from "./Awards";
import Educations from "./Educations";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Awards/>
      <Stats />
      <Pricing />
      <Educations/>
      <OpenAccount />
      <Footer />
    </>
  );
}

export default HomePage;