import React from "react";
import LineGradient from "./LineGradient";
import { useForm } from "react-hook-form";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <footer id="footer" className="h-64  pt-10">
      <div className="w-5/6 mx-auto flex flex-col gap-12 ">
        <SocialMediaIcons />
        <div className="md:flex md:justify-between  justify-center    ">
          <div className="md:text-start text-center">
            <p className="font-playfair  font-semibold text-2xl ">
              NITHIN PRATHAPAN
            </p>
            <p className="mt-2 md:mt-0 md:text-start">+91-8848946278</p>
          </div>
          <div>
            <p className="font-playfair text-sm mt-2 md:mt-0 text-center md:text-end ">
              ©️2024 Nithin Prathapan. All Rigts Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
