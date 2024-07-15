import React, { useRef, useState } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0";
  }
  const closeMenu = () =>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <h1>NiTiИ</h1>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
            {menu === "home" ? <img src={underline} alt="underline"/> : ""}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About</p>
            {menu === "about" ? <img src={underline} alt="underline"/> : ""}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#education'>
            <p onClick={() => setMenu("education")}>Education</p>
            {menu === "education" ? <img src={underline} alt="underline"/> : ""}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#skills'>
            <p onClick={() => setMenu("skills")}>Skills</p>
            {menu === "skills" ? <img src={underline} alt="underline"/> : ""}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => setMenu("services")}>Services</p>
            {menu === "services" ? <img src={underline} alt="underline"/> : ""}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#portfolio'>
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
            {menu === "portfolio" ? <img src={underline} alt="underline"/> : ""}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
            {menu === "contact" ? <img src={underline} alt="underline"/> : ""}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connects"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
