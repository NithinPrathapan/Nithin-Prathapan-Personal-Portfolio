import React from "react";
import LineGradient from "./LineGradient";
import { useForm } from "react-hook-form";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <footer id="footer" className="h-64  pt-10">
      <div className="w-5/6 mx-auto ">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <div className="flex flex-col justify-start text-start">
            <p className="font-playfair font-semibold text-2xl ">
              NITHIN PRATHAPAN
            </p>
            <p>+91-8848946278</p>
          </div>
          <p className="font-playfair text-sm ">
            ©️2024 Nithin Prathapan. All Rigts Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
