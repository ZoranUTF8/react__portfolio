import React from "react";
import "./Experience.css";
import {
  SiCss3,
  SiFirebase,
  SiJavascript,
  SiExpress,
  SiMaterialui,
  SiMysql,
  SiReact,
  SiMongodb,
} from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BsBootstrap } from "react-icons/bs";
import { FaNode, FaJava } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Technologies I worked with</h5>

      <div className="container experience__container">
        <div className="experience__frontend ">
          <div className="experience__content">
            <h3>Frontend development</h3>
            <article className="experience__details">
              <AiOutlineHtml5 size={50} className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <BsBootstrap size={50} className="experience__details-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="experience__details">
              <SiCss3 size={50} className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <SiMaterialui size={50} className="experience__details-icon" />
              <h4>Material UI</h4>
            </article>
            <article className="experience__details">
              <SiReact size={50} className="experience__details-icon" />
              <h4>React</h4>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND / START OF BACKEND */}
        <div className="experience__backend ">
          <div className="experience__content">
            <h3>Backend development</h3>
            <article className="experience__details">
              <FaJava size={50} className="experience__details-icon" />
              <h4>Java</h4>
            </article>
            <article className="experience__details">
              <SiJavascript size={50} className="experience__details-icon" />
              <h4>Javascript</h4>
            </article>
            <article className="experience__details">
              <FaNode size={50} className="experience__details-icon" />
              <h4>Node.js</h4>
            </article>
            <article className="experience__details">
              <SiExpress size={50} className="experience__details-icon" />
              <h4>Express.js</h4>
            </article>
            <article className="experience__details">
              <SiMysql size={50} className="experience__details-icon" />
              <h4>MySql</h4>
            </article>
            <article className="experience__details">
              <SiMongodb size={50} className="experience__details-icon" />
              <h4>Mongo</h4>
            </article>
            <article className="experience__details">
              <SiFirebase size={50} className="experience__details-icon" />
              <h4>Firebase</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
