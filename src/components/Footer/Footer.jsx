import { AiOutlineLinkedin } from "react-icons/ai";
import { DiGithubFull } from "react-icons/di";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="" className="footer__logo">
        ZORAN JANJIC
      </a>

      <ul className="footer__permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/janjiczoran/">
          <AiOutlineLinkedin size={50} />
        </a>
        <a href="https://github.com/ZoranUTF8">
          <DiGithubFull size={50} />
        </a>
      </div>

      <div className="footer__copyrights">
        <small>&copy; Zoran Janjic 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
