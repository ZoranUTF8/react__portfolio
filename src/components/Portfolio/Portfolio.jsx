import "./Portfolio.css";
import { projectData } from "../../assets/portfolioData/data";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Some of my projects</h5>
      <div className="container portfolio__container">
        {projectData.map(({ id, name, info, gitLink, demoLink, imgPath }) => (
          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-img">
              <img src={imgPath} alt="project image" />
            </div>
            <h3>{name}</h3>
            <h4>{info}</h4>
            <div className="portfolio__item-cta">
              {demoLink != null ? (
                <a href={demoLink} className="btn btn-primary" target="_blank">
                  Live demo
                </a>
              ) : (
                ""
              )}

              <a href={gitLink} className="btn" target="_blank">
                Github Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
