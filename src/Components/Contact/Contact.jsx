import React from 'react';
import './Contact.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e729470f-aa81-4922-9a52-10289ef92169");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Contact</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's Talk</h2>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
          <div className="contact-details">
            <p><FaEnvelope /> <span>nitinbharti6394358223@gmail.com</span></p>
            <p><FaPhone /> <span>+916394358223</span></p>
            <p><FaMapMarkerAlt /> <span>Noida Sector 62, Uttar Pradesh</span> </p>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Write your message here</label>
              <textarea id="message" name="message" rows="4" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
