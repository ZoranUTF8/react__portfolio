import React from "react";
import "./Portfolio.css";
import portfolio1 from "../../assets/portfolio1.png";
import Projects from "../../assets/portfolioData/projects.json";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Some of my projects</h5>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={portfolio1} alt="project image" />
          </div>
          <h3>This is a title</h3>

          <div className="portfolio__item-cta">
            <a href="#" className="btn btn-primary" target="_blank">
              Live demo
            </a>
            <a href="#" className="btn" target="_blank">
              Github Code
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={portfolio1} alt="project image" />
          </div>
          <h3>This is a title</h3>

          <div className="portfolio__item-cta">
            <a href="#" className="btn btn-primary" target="_blank">
              Live demo
            </a>
            <a href="#" className="btn" target="_blank">
              Github Code
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={portfolio1} alt="project image" />
          </div>
          <h3>This is a title</h3>

          <div className="portfolio__item-cta">
            <a href="#" className="btn btn-primary" target="_blank">
              Live demo
            </a>
            <a href="#" className="btn" target="_blank">
              Github Code
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
