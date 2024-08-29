import React, { useRef } from "react";
import LineGradient from "./LineGradient";
import { motion, useInView } from "framer-motion";
import website from "../assets/web.png";
import github from "../assets/git.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ProjectComponent = ({
  title,
  git,
  web,
  img,
  description,
  animation,
  delay,
  skills,
  layout,
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
      className={
        layout && layout === "block"
          ? `flex justify-between w-full hover:scale-105 gap-12 border items-center p-4 max-h-full min-h-full h-full    flex-col`
          : `flex justify-between w-full gap-12 border items-center p-4  md:flex-row-reverse flex-col`
      }
    >
      <div
        className={
          layout && layout === "block"
            ? "md:w-[90%] relative"
            : "md:w-[45%] relative"
        }
      >
        <img
          className="rounded-md min-w-full md:object-contain object-cover  md:max-h-[380px] "
          src={img}
          alt=""
        />
      </div>
      <div
        className={
          layout && layout === "block"
            ? "w-[100%] text-center  "
            : "md:w-[55%] w-full md:text-start text-center flex flex-col gap-2"
        }
      >
        <h1 className="text-2xl  font-playfair font-semibold text-yellow">
          {title}
        </h1>
        <div
          className={
            layout && layout === "block"
              ? "w-[15%] flex justify-center mx-auto my-2"
              : "w-[15%] flex justify-center mx-auto md:mx-0"
          }
        >
          <LineGradient />
        </div>
        <p
          className={
            layout && layout == "block"
              ? "md:w-[80%] italic my-2 mx-auto   "
              : "md:w-[80%] italic my-2 md:text-start mx-auto md:mx-0  "
          }
        >
          {description}
        </p>

        {skills && skills.length > 0 ? (
          <div
            className={
              layout && layout == "block"
                ? "flex justify-center items-center gap-2  my-4 text-blue flex-wrap   md:mx-0 mx-auto  "
                : "flex justify-center md:justify-start md:text-start items-center gap-2  my-2 text-blue flex-wrap   md:mx-0 mx-auto  "
            }
          >
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
        <div
          className={
            layout && layout === "block"
              ? " flex gap-4 justify-center mx-auto my-2"
              : " flex gap-4 justify-start mx-auto md:mx-0"
          }
        >
          <a target="_blank" href={web}>
            <img
              className="w-[30px] hover:scale-[105%]  duration-300 transition-all cursor-pointer"
              title="Visit website"
              src={website}
              alt=""
            />
          </a>
          <a target="_blank" href={git}>
            <img
              className="w-[30px] hover:scale-[105%] duration-300 transition-all cursor-pointer"
              title="View code on github"
              src={github}
              alt=""
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectComponent;
