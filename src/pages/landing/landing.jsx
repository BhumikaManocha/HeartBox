import React from "react";
import "./landing.css";
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import Hero from "../../components/hero"
import Main from "../../components/main"



const Landing = () => {

  const object = <p>“ Best gifts come from the heart, not the store “</p>

  return (
    <div>
      <Navbar />
      {/* <h1>Landing page</h1> */}
      <br />
      <br />
      <Hero />
      <br />
      {object}
      <br />
      <br />
      <Main /> 
      
      <Footer />
    </div>
  );
};






export default Landing;
