import React from "react";
import "./Portfolio.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import IMG1 from "../../assets/ArdorStudios.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/CarRental.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/Kay3ess.png";
import IMG7 from "../../assets/Dashboard.png";
import IMG8 from "../../assets/TapeTech.png";
import IMG9 from "../../assets/portfolio9.png";
import IMG10 from "../../assets/Jewellery.png";
import IMG11 from "../../assets/FoodUI.png";
import IMG12 from "../../assets/Podcast.png";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Ardor Studios",
    github: "https://github.com/NitinBharti007/ARDOR.git",
    demo: "https://ardorstudios.in/",
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
    title: "Car Rental App",
    github: "https://github.com/NitinBharti007/ZYMO_ReactUI.git",
    demo: "https://zymouireact.netlify.app/",
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
    title: "Manufacturing App",
    github: "https://github.com/NitinBharti007/KAY3ESS_PROJECT.git",
    demo: "https://kay3ess.vercel.app/",
  },

  {
    id: 7,
    image: IMG7,
    title: "Admin Dashboard",
    github: "https://github.com/NitinBharti007/Tic-tac-toe",
    demo: "https://admindashboardvrv.vercel.app/",
  },

  {
    id: 8,
    image: IMG8,
    title: "Manufacturing App",
    github: "https://github.com/NitinBharti007/TapeTech_Solutions.git",
    demo: "https://tape-tech-solutions.vercel.app/",
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
    title: "Jewellery App",
    github: "https://github.com/NitinBharti007/Jewellery_React_UI_App.git",
    demo: "https://pahadi-sunar.vercel.app/",
  },
  {
    id: 11,
    image: IMG11,
    title: "Food App",
    github: "https://github.com/NitinBharti007/Food_App_ReactUI.git",
    demo: "https://uttrakhandifood.vercel.app/",
  },
  {
    id: 12,
    image: IMG12,
    title: "Podcast",
    github: "https://github.com/NitinBharti007/Fresh-egg.git",
    demo: "https://fresh-egg.vercel.app/",
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
