import React from "react";
import project1 from "../assets/real-estate.png";
import { motion } from "framer-motion";
import ProjectComponent from "./ProjectComponent";
import LineGradient from "./LineGradient";
const Projects = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <section id="projects" className="flex justify-center pt-48 pb-48">
      <div>
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
              <LineGradient width="w-1/6" />
            </div>
          </div>

          <p className="mt-10 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            dolores excepturi, inventore in alias cumque earum. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Voluptate autem
            quibusdam mollitia.
          </p>
        </motion.div>
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          variants={container}
        >
          {/* row1  */}
          {/* add github and project link  */}
          {/* <div
          className="flex uppercase justify-center text-center items-center p-10 bg-red 
    max-w-[400px]  text-2xl font-playfair font-semibold"
        >
          beautiful user ineterface
        </div> */}
          <ProjectComponent
            title="Real Estate Application"
            description={
              "It has been developed using MERN Stack and designed using Tailwind CSS. It includes modern and responsive design."
            }
            skills={[
              "React.js",
              "Node.js",
              "Tailwind CSS",
              "Express.js",

              "MongoDB",
              "JWT",
              "Redux Toolkit",
              "Tailwind",
              "Firebase",
            ]}
            img={project1}
          />

          {/* row 2 */}

          {/* <div
          className="flex justify-center text-center items-center p-10 bg-blue uppercase 
    max-w-[400px]  text-2xl font-playfair font-semibold"
        >
          smooth user interface
        </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
