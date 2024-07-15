import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skill from "./Components/Skills/Skill";
import Service from "./Components/Services/Service";
import Portfolio from "./Components/Portfolio/Portfolio";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/> 
      <About/>
      <Education/>
      <Skill/>
      <Service/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
