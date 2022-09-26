import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpeg";
import { BiTimeFive } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__container__left about__me">
          <div className="about__me-img">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__container__right">
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <BiTimeFive className="about__icon" size={28} />
                <h5>Experience</h5>
                <small>6+ months working</small>
              </article>
              <article className="about__card">
                <HiOutlineUsers className="about__icon" size={28} />
                <h5>Clients</h5>
                <small>4+ clients worldwide</small>
              </article>
              <article className="about__card">
                <AiOutlineFundProjectionScreen
                  className="about__icon"
                  size={28}
                />
                <h5>Projects</h5>
                <small>10+ completed</small>
              </article>
            </div>
            <p>
              I am a motivated Junior software developer with the ability to
              learn and collaborate in a rapidly changing environment and
              compositions. Currently, I am pursuing my computer science
              bachelor's degree online at the{" "}
              <a href="https://www.uopeople.edu/">university of the people</a>.
              I worked through 500+ hours of Bootcamp structure, learning the
              MERN stack and Java. Feel free to message me.
            </p>
          </div>

          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
