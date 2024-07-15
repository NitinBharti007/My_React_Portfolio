import React from "react";
import "./About.css";
import Profile_img from "../../assets/Passport_Photo-removebg-preview.png";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={Profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi! My name is Nitin Bharti. I'm a very dedicated and hardworking
              person who always thrives working on end-to-end products. With my
              experience and knowledge, I learn many skills and make many
              successful projects.
            </p>
            <p>
              I enjoyed every step of creation, learning, development, and
              collaboration.
            </p>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>0+</h1>
          <p>FRESHER</p>
        </div>
        <div className="about-achivement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="about-achivement">
          <h1>3</h1>
          <p>INTERNSHIPS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
