import React from "react";
import "./Service.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { BiCheck } from 'react-icons/bi';

const Service = () => (
  <div id="services" className="services">
    <div className="services-title">
      <h1>Services</h1>
      <img src={theme_pattern} alt="Theme Pattern" />
    </div>
    <div className="services-container">
      <div className="service">
        <div className="service-head">
          <h3>UI/UX Design</h3>
        </div>
        <ul className="service-list">
          <li><BiCheck className="service-list-icon" /><p>User Interface Design</p></li>
          <li><BiCheck className="service-list-icon" /><p>Layout Design</p></li>
          <li><BiCheck className="service-list-icon" /><p>Responsive Design</p></li>
          <li><BiCheck className="service-list-icon" /><p>Prototyping</p></li>
          <li><BiCheck className="service-list-icon" /><p>Style Guide Creation</p></li>
          <li><BiCheck className="service-list-icon" /><p>Usability Testing</p></li>
          <li><BiCheck className="service-list-icon" /><p>User Research</p></li>
          <li><BiCheck className="service-list-icon" /><p>Iterative Design</p></li>
          <li><BiCheck className="service-list-icon" /><p>Collaboration with Development</p></li>
          <li><BiCheck className="service-list-icon" /><p>Information Architecture</p></li>
        </ul>
      </div>

      <div className="service">
        <div className="service-head">
          <h3>Web Development</h3>
        </div>
        <ul className="service-list">
          <li><BiCheck className="service-list-icon" /><p>Web Application Development</p></li>
          <li><BiCheck className="service-list-icon" /><p>Front-End Development</p></li>
          <li><BiCheck className="service-list-icon" /><p>Back-End Development</p></li>
          <li><BiCheck className="service-list-icon" /><p>Database Design and Management</p></li>
          <li><BiCheck className="service-list-icon" /><p>API Integration</p></li>
          <li><BiCheck className="service-list-icon" /><p>Deployment and Hosting</p></li>
          <li><BiCheck className="service-list-icon" /><p>Version Control</p></li>
          <li><BiCheck className="service-list-icon" /><p>Testing and Debugging</p></li>
          <li><BiCheck className="service-list-icon" /><p>Security</p></li>
          <li><BiCheck className="service-list-icon" /><p>Continuous Learning</p></li>
        </ul>
      </div>

      <div className="service">
        <div className="service-head">
          <h3>C++ & DSA</h3>
        </div>
        <ul className="service-list">
          <li><BiCheck className="service-list-icon" /><p>Basic Java Concepts</p></li>
          <li><BiCheck className="service-list-icon" /><p>C++ Collections Framework</p></li>
          <li><BiCheck className="service-list-icon" /><p>Sorting and Searching Algorithms</p></li>
          <li><BiCheck className="service-list-icon" /><p>GUI Applications</p></li>
          <li><BiCheck className="service-list-icon" /><p>Graph Algorithms</p></li>
          <li><BiCheck className="service-list-icon" /><p>Dynamic Programming</p></li>
          <li><BiCheck className="service-list-icon" /><p>Arrays, Linked Lists, Stacks, Queues, Trees, and Graphs</p></li>
          <li><BiCheck className="service-list-icon" /><p>Design Patterns</p></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Service;
