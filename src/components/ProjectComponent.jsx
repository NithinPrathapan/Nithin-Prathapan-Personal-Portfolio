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
  skills,
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
      className=" md:w-full flex flex-col justify-between md:flex md:flex-row-reverse p-4 max-h-[100%] items-center gap-2 rounded-md  border border-white shadow-xl "
    >
      <div className="md:w-[45%] relative">
        <img
          className="rounded-md min-w-full md:object-contain object-cover max-h-[200px] md:max-h-[380px] "
          src={img}
          alt=""
        />
      </div>
      <div className="md:w-[55%] w-full md:text-start text-center flex flex-col gap-2">
        <h1 className="text-2xl  font-playfair font-semibold text-yellow">
          {title}
        </h1>
        <div className="w-[15%] flex justify-center mx-auto md:mx-0">
          <LineGradient />
        </div>
        <p className="italic my-2 md:text-start mx-auto md:mx-0  ">
          {description}
        </p>

        {skills && skills.length > 0 ? (
          <div className="flex justify-center md:justify-start md:text-start items-center gap-2  mt-4 flex-wrap   md:mx-0 mx-auto  ">
            {" "}
            {skills.map((skill) => {
              return (
                <p className=" rounded-md  cursor-default text-xs">{skill},</p>
              );
            })}
          </div>
        ) : (
          <></>
        )}
        <div className="flex md:justify-start justify-center items-center gap-4 my-1">
          <img
            className="w-[30px] hover:scale-[105%]  duration-300 transition-all cursor-pointer"
            title="Visit website"
            src={web}
            alt=""
          />
          <img
            className="w-[30px] hover:scale-[105%] duration-300 transition-all cursor-pointer"
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
