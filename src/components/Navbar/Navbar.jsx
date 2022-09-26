import { useState } from "react";
import "./Navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("home");

  // Change active nav
  const handleActiveNav = (item) => {
    switch (item) {
      case "home":
        setActiveNav("home");
        break;
      case "about":
        setActiveNav("about");
        break;
      case "experience":
        setActiveNav("experience");
        break;
      case "services":
        setActiveNav("services");
        break;
      case "contact":
        setActiveNav("contact");
        break;
      default:
        console.log("No such option")
        break;
    }
  };

  return (
    <nav>
      <a
        href="#"
        onClick={() => handleActiveNav("home")}
        className={activeNav === "home" ? "active" : ""}
      >
        <AiOutlineHome size={28} />
      </a>
      <a
        href="#about"
        onClick={() => handleActiveNav("about")}
        className={activeNav === "about" ? "active" : ""}
      >
        <AiOutlineUser size={28} />
      </a>
      <a
        href="#experience"
        onClick={() => handleActiveNav("experience")}
        className={activeNav === "experience" ? "active" : ""}
      >
        <BiBookBookmark size={28} />
      </a>
      <a
        href="#services"
        onClick={() => handleActiveNav("services")}
        className={activeNav === "services" ? "active" : ""}
      >
        <MdOutlineDesignServices size={28} />
      </a>
      <a
        href="#contact"
        onClick={() => handleActiveNav("contact")}
        className={activeNav === "contact" ? "active" : ""}
      >
        <BsInfoCircle size={28} />
      </a>
    </nav>
  );
};

export default Navbar;
