import React from "react";
import LineGradient from "./LineGradient";
import { motion } from "framer-motion";
import project1 from "../assets/project-1.jpeg";
import project2 from "../assets/project-2.jpeg";
import project3 from "../assets/project-3.jpeg";
import project4 from "../assets/project-4.jpeg";
import project5 from "../assets/project-5.jpeg";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const Project = ({ title, img }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep_blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
      </div>
      <img src={img} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48 ">
      {/* heading section */}
      <motion.div
        className=" md:w-2/5 mx-auto text-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl ">
            PRO<span className="text-red ">JECTS</span>
          </p>

          <div className=" flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          dolores excepturi, inventore in alias cumque earum. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Voluptate autem quibusdam
          mollitia.
        </p>
      </motion.div>
      {/* projects */}
      <div className="flex justify-center">
        <motion.div
          className=" sm:grid sm:grid-cols-3  "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={container}
        >
          {/* row1  */}
          <div
            className="flex uppercase justify-center text-center items-center p-10 bg-red 
          max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            beautiful user ineterface
          </div>
          <Project title="Project 1" img={project1} />
          <Project title="Project 2" img={project2} />

          {/* row 2 */}
          <Project title="Project 3" img={project1} />
          <Project title="Project 4" img={project1} />
          <Project title="Project 5" img={project1} />

          {/* row 3 */}
          <Project title="Project 6" img={project1} />
          <Project title="Project 7" img={project1} />

          <div
            className="flex justify-center text-center items-center p-10 bg-blue uppercase 
          max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            smooth user interface
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
