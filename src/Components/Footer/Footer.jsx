import React from 'react'
import './Footer.css';
import {BsFacebook, BsTelegram} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Designed and Developed by Nitin Bharti</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Educations</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/nitin-bharti-519484213/"><BsLinkedin/></a>
        <a href="https://github.com/NitinBharti007"><FaGithub/></a>
        <a href="https://www.facebook.com/"><BsFacebook/></a>
        <a href="https://instagram.com/"><BsInstagram/></a>
        <a href="https://web.telegram.org/k/"><BsTelegram/></a>
      </div>
 
     <div className="footer_copyright">
      <small>
        &copy;2024Copy rights. All rights reserved.</small>
     </div>
    </footer>
  )
}

export default Footer