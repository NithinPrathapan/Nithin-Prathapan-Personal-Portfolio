import React, { useRef } from "react";
import LineGradient from "./LineGradient";
import { motion, useInView } from "framer-motion";
import web from "../assets/web.png";
import git from "../assets/git.png";

const ProjectComponent = ({
  title,
  url,
  img,
  description,
  animation,
  delay,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animation}
      transition={{
        delay: isInView ? delay : 0,
        duration: 0.5, // Duration of the animation
      }}
      className=" w-full flex flex-col justify-between md:flex md:flex-row-reverse md:p-8 p-4 items-center gap-2 rounded-md  md:border border-blue shadow-xl   shadow-black"
    >
      <div className="md:w-[45%] relative">
        <img
          className="rounded-md min-w-full object-cover max-h-[380px] h-full"
          src={img}
          alt=""
        />
      </div>
      <div className="md:w-[55%] md:text-start text-center flex flex-col gap-2">
        <h1 className="text-2xl  font-playfair font-semibold text-yellow">
          {title}
        </h1>
        <div className="w-[15%] flex justify-center mx-auto md:mx-0">
          <LineGradient />
        </div>
        <p className="italic my-2 md:text-start mx-auto md:mx-0 w-[80%] ">
          {description}
        </p>
        <div className="flex justify-center md:justify-start md:text-start items-center gap-4 flex-wrap  w-[80%] md:mx-0 mx-auto  ">
          <p className="text-center  font-semibold text-yellow font-playfair">
            Lorem
          </p>
          <p className="text-center  font-semibold text-yellow font-playfair">
            Lorem
          </p>
          <p className="text-center  font-semibold text-yellow font-playfair">
            Lorem
          </p>
        </div>
        <div className="flex md:justify-start justify-center items-center gap-4 my-12">
          <img
            className="w-[35px] hover:scale-[105%]  duration-300 transition-all cursor-pointer"
            title="Visit website"
            src={web}
            alt=""
          />
          <img
            className="w-[35px] hover:scale-[105%] duration-300 transition-all cursor-pointer"
            title="View code on github"
            src={git}
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectComponent;
