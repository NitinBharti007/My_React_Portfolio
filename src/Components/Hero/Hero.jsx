import React from "react";
import "./Hero.css";
import Profile_img from "../../assets/1720854786178.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div>
      <div id="home" className="hero">
        <img src={Profile_img} alt="Profile Image" />
        <h1>
          <span>I'm Nitin Bharti,</span> a passionate frontend developer from Noida,
          India.
        </h1>
        <p>
          With a fresh B.Tech degree in hand, I specialize in creating visually
          stunning and user-friendly web applications. Let's connect and build
          something amazing together!
        </p>
        <div className="hero-action">
          <div className="nav-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
          </div>
          <div className="nav-resume">
            <a href="https://drive.google.com/file/d/1vM9MHpAQJefALn4dWR76i-L5H6028Xjj/view?usp=sharing" className="resume-link">My Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
