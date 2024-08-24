import React from "react";
import { motion } from "framer-motion";
import LineGradient from "./LineGradient";

const SkillSet = () => {
  return (
    <div className="">
      <div className="flex flex-col md:gap-16 mt-32 justify-center">
        <motion.div
          className=" mt-10 flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1 className="uppercase text-2xl tracking-widest text-center  font-semibold">
            Tech I'm <span className="text-red">familiar with</span>
          </h1>
          <div className="w-1/3 mx-auto ">
            <LineGradient />
          </div>
        </motion.div>
        <motion.div
          className=" mt-12 flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className=" grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 font-playfair text-lg tracking-wide text-yellow justify-center items-center grid-rows-8 text-center gap-4">
            {" "}
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">HTML5</p>
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">Tailwind CSS</p>
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">CSS3</p>
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">Javascript</p>
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">React.js</p>
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">Jest</p>
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">Node.js</p>
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">MongoDB</p>
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">Java</p>
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">Python</p>
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">Bootsrap</p>
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">jQuery</p>
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">Redux-Toolkit</p>
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">Express.js</p>
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">Firebase</p>
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">C</p>
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">C++</p>
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">Git</p>
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">Figma</p>
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">Webpack</p>
            <p className="hover:scale-105 transition ease-in-out duration-300 cursor-default">Canva</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillSet;
