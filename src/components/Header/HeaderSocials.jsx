import { SiLinkedin, SiUpwork } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/janjiczoran/"
        rel="noreferrer"
        target="_blank"
      >
        <SiLinkedin size={28}/>
      </a>
      <a href="https://github.com/ZoranUTF8" rel="noreferrer" target="_blank">
        <BsGithub size={28}/>
      </a>
      <a
        href="https://www.upwork.com/freelancers/~01f2707e88710c0f01?viewMode=1"
        rel="noreferrer"
        target="_blank"
      >
        <SiUpwork size={28}/>
      </a>
    </div>
  );
};

export default HeaderSocials;
