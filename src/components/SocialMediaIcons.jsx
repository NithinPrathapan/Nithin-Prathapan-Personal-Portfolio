import React from "react";
import linkdin from "../assets/linkedin.png";
import insta from "../assets/instagram.png";
import github from "../assets/github.png";

const SocialMediaIcons = () => {
  return (
    <div className="justify-center flex my-10 md:justify-start gap-7 ">
      <a
        href="www.linkedin.com/in/nithin-prathapan-67a827240

"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        <img className="w-8" src={linkdin} alt="linkidin" />
      </a>
      <a
        href="https://github.com/NithinPrathapan"
        target="_blank"
        className="hover:opacity-50 transition duration-500"
      >
        <img
          className="w-8 bg-white p-1 rounded-md border-none"
          src={github}
          alt="github"
        />
      </a>
      <a
        href="https://www.instagram.com/_nithin_prathapan_/?igsh=Znh5bHpiaXFidDR0"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        <img className="w-8" src={insta} alt="insta" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
