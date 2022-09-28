import { useRef, useState } from "react";
import "./Contacts.css";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { Triangle } from "react-loader-spinner";

import Loading from "../Loading/Loading";

const Contacts = () => {
  const form = useRef();
  const [loadingState, setLoadingState] = useState(false);
  const [isActive, setActive] = useState(false);

  const clearFields = () => {
    form.current.from_email.value = "";
    form.current.from_name.value = "";
    form.current.message.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setActive(true);

    try {
      emailjs
        .sendForm(
          process.env.REACT_APP_YOUR_SERVICE_ID,
          process.env.REACT_APP_YOUR_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_YOUR_PUBLIC_KEY
        )
        .then((result) => {
          if (result.status === 200) {
            setActive(false);

            toast.success("Message sent, thank you", {
              position: "bottom-right",
              autoClose: 2000,
            });
          }
        })
        .finally(clearFields());
    } catch (error) {
      setActive(false);
      toast.error("Message not sent, please try again.", {
        position: "bottom-right",
        autoClose: 2000,
      });
      console.log(error);
    }
  };

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

        {isActive ? (
          <div className="contact__loading">
            <Triangle
              height="120"
              width="120"
              color="#fff"
              ariaLabel="triangle-loading"
              visible={true}
            />
          </div>
        ) : (
          <form ref={form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="from_name"
              id="name"
              placeholder="Your name"
              required
            />
            <input
              type="email"
              name="from_email"
              id="email"
              placeholder="Your email"
              required
            />
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
        )}
      </div>
    </section>
  );
};

export default Contacts;
