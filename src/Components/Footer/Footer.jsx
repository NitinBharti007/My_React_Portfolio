import React from "react";
import "./Footer.css";
import { BsFacebook, BsTelegram, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <a href="#" className="footer_logo">
          Designed & Developed by <span>Nitin Bharti</span>
        </a>

        <ul className="footer_links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer_socials">
          <a href="https://www.linkedin.com/in/nitin-bharti-519484213/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
          <a href="https://github.com/NitinBharti007" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
          <a href="https://web.telegram.org/k/" target="_blank" rel="noopener noreferrer"><BsTelegram /></a>
        </div>
      </div>

      <div className="footer_copyright">
        <small>&copy; 2024 All Rights Reserved | Nitin Bharti</small>
      </div>
    </footer>
  );
};

export default Footer;
