import React from "react";
import HeroSection from "./HeroSection";
import Award from "./Avard";
import Education from "./Education";
import Pricing from "./Pricing";
import Stats from "./Stats";
import OpenAcc from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Homepage() {
    return(
        <>
       
          <HeroSection/>
          <Stats/>
          <Pricing/>
          <Education/>          
          <OpenAcc/>
       
        </>
    );
}

export default Homepage;