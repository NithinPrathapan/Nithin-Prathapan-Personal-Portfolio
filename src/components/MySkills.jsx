import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "./LineGradient";
import { motion } from "framer-motion";
import skills from "../assets/skills-image.png";
import SkillSet from "./SkillSet";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1080px)");
  return (
    <div id="skills" className="pt-10 pb-24">
      {/* header and image section */}

      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className=" md:w-1/3 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red ">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            I am a Full Stack developer (MERN) and I love in designing scalable
            applications and solving complex problems through efficient,
            responsive UIs, optimized backend services, and robust database
            management.
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
           before:w-full  before:h-full
          before:border-2 before:border-blue before:z-[-1] "
            >
              <img className="" src={skills} alt="skills" />
            </div>
          ) : (
            <div>
              <img className="" src={skills} alt="skills" />
            </div>
          )}
        </div>
      </div>
      {/* skills */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-2xl mt-3">
                Web Design <br />
              </p>
            </div>
            <div className="w-2/4 rounded-r-md h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I love designs and it's the first step before creating any website
            as I can give layout to my imagination.
          </p>
        </motion.div>
        {/* innovative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-2xl mt-3">
                Web Development
              </p>
            </div>
            <div className="w-2/4 rounded-r-md h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I am a Full Stack Web Developer (MERN).Skilled in Node.js and
            Express.js for building robust APIs
          </p>
        </motion.div>
        {/* imaginative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-2xl mt-3">
                Problem Solving
              </p>
            </div>
            <div className="w-2/4 rounded-r-md h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I love solving problems whether programming problems or real life
            problems.
          </p>
        </motion.div>
      </div>
      <SkillSet />
    </div>
  );
};

export default MySkills;
