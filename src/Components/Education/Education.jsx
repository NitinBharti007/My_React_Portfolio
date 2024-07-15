import React from "react";
import "./Education.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Education = () => {
  const educationData = [
    {
      year: "Nov 2020 - Jun 2024",
      title: "Bachelor Of Technology In Information Technology",
      description: "I recently graduated from UIET Chhatrapati Shahu Ji Maharaj University Kanpur with a degree in Information Technology. During my studies, I gained comprehensive knowledge in software development, data structures, algorithms, and web technologies."
    },
    {
      year: "Jun 2020",
      title: "Intermediate",
      description: "I completed my secondary education at Government Inter College Basti, Uttar Pradesh, with a focus on Physics, Chemistry, and Mathematics."
    },
    {
      year: "Apr 2018",
      title: "High School",
      description: "I finished my higher education at R.K Educational Academy Tema Rahmat Sant Kabir Nagar, Uttar Pradesh, where I studied Science and Drawing."
    }
  ];

  return (
    <div id="education" className="education">
      <div className="education-title">
        <h1>Education</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-year">{edu.year}</div>
            <div className="education-details">
              <h3>{edu.title}</h3>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
