import React from "react";
import "./Contacts.css";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Contacts = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail size={50} />
            <h4>Email</h4>
            <h5>zoranjanjic@my.uopeople.edu</h5>
            <a
              href="mailto:zoranjanjic@my.uopeople.edu"
              rel="noreferrer"
              target="_blank"
            >
              Send me a email
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin size={50} />
            <h4>Linked in</h4>
            <h5>Zoran Janjic</h5>
            <a
              href="https://www.linkedin.com/in/janjiczoran/"
              rel="noreferrer"
              target="_blank"
            >
              Find me on Linkedin
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp size={50} />
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=00387644357829"
              rel="noreferrer"
              target="_blank"
            >
              Message me
            </a>
          </article>
        </div>

        <form action="">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            required
          />
          <input type="email" name="" id="" placeholder="Your email" required />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your message..."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
