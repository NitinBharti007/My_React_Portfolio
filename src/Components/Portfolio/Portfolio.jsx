import React from "react";
import "./Portfolio.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import IMG7 from "../../assets/portfolio7.png";
import IMG8 from "../../assets/portfolio8.png";
import IMG9 from "../../assets/portfolio9.png";
import IMG10 from "../../assets/portfolio10.png";
import IMG11 from "../../assets/portfolio11.png";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Calculator App",
    github: "https://github.com/NitinBharti007/Calculator_App",
    demo: "https://simplecalculatornitin.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "React E-Commerce",
    github: "https://github.com/NitinBharti007/E-Commerce",
    demo: "https://e-commerce-seven-weld.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Food Delivery App",
    github: "https://github.com/NitinBharti007/Food_Delivery_App",
    demo: "https://tomaato.netlify.app/",
  },

  {
    id: 4,
    image: IMG4,
    title: "Login Form",
    github: "https://github.com/NitinBharti007/Login_form",
    demo: "https://loginformnitin.netlify.app/",
  },

  {
    id: 5,
    image: IMG5,
    title: "Portfolio",
    github: "https://github.com/NitinBharti007/MyPortfolio",
    demo: "https://nitinbharti.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Movie App",
    github: "https://github.com/NitinBharti007/MovieApp",
    demo: "https://movieapp-nitin.vercel.app/",
  },

  {
    id: 7,
    image: IMG7,
    title: "Tic-Tac-Toe Game",
    github: "https://github.com/NitinBharti007/Tic-tac-toe",
    demo: "https://tictactoenitin.netlify.app/",
  },

  {
    id: 8,
    image: IMG8,
    title: "To-Do App",
    github: "https://github.com/NitinBharti007/To-Do_App",
    demo: "https://todonitin.netlify.app/",
  },

  {
    id: 9,
    image: IMG9,
    title: "React UI E-Commerce",
    github: "https://github.com/NitinBharti007/React_UI_E-Commerce",
    demo: "https://reactecommerceui.netlify.app/",
  },
  {
    id: 10,
    image: IMG10,
    title: "Quiz App",
    github: "https://github.com/NitinBharti007/Quiz_App",
    demo: "https://quizappnitin.netlify.app/",
  },
  {
    id: 11,
    image: IMG11,
    title: "Weather App",
    github: "https://github.com/NitinBharti007/Weather_App",
    demo: "https://weatherapp-beta-dusky.vercel.app/",
  },
];
const Portfolio = () => {
  return (
    <div>
      <div id="portfolio" className="portfolio">
        <div className="portfolio-title">
          <h1>Portfolio</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="portfolio-container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio-item">
                <div className="portfolio-item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                  <a href={github} className="btn" target="_blank">
                    GitHub
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
