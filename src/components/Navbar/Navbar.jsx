import React from "react";
import "./Navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome size={28} />
      </a>
      <a href="#about">
        <AiOutlineUser size={28} />
      </a>
      <a href="#experience">
        <BiBookBookmark size={28} />
      </a>
      <a href="#services">
        <MdOutlineDesignServices size={28} />
      </a>
      <a href="#contact">
        <BsInfoCircle size={28} />
      </a>
    </nav>
  );
};

export default Navbar;
