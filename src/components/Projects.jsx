import React from "react";
import LineGradient from "./LineGradient";
import { motion } from "framer-motion";
import project1 from "../assets/real-estate.png";
import project2 from "../assets/project-2.jpeg";

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
const Project = ({ title, img, description, url, skills }) => {
  const overlayStyles = `absolute opacity-0 hover:bg-[#03030a] hover:opacity-95 w-full h-full py-16 p-10 flex flex-col gap-4 cursor-pointer `;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div className="relative md:w-[400px] md:h-[400px] w-full h-full rounded-md border">
      <div
        className="absolute opacity-0 hover:bg-[#03030a] hover:opacity-95 
      w-full h-full  flex flex-col  cursor-pointer "
      >
        <motion.div
          initial="hidden"
          whileInView="hidden"
          whileHover={{ opacity: 1, y: 0 }}
          whileFocus={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col gap-2 "
        >
          <div className="flex flex-col  px-10 pt-16">
            <p className="text-2xl font-playfair  max-h-32 text-white">
              {title}
            </p>
            <div className="w-2/4 my-2">
              <LineGradient />
            </div>
            <p className="mt-3 w-full italic">{description}</p>
          </div>
          <div className="px-10 ">
            <h1 className="font-semibold uppercase text-yellow">Tech used</h1>
            {skills && skills.length > 0 ? (
              <div className="flex flex-wrap  mb-3  mx-auto text-sm ">
                {skills.map((tech, index) => (
                  <p
                    className=" font-semibold mr-2 text-slate-300 "
                    key={index}
                  >
                    {tech}
                  </p>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
        </motion.div>
      </div>
      <img
        className="w-full h-full object-fill  rounded-lg"
        src={img}
        alt={projectTitle}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-48 pb-48
     "
    >
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
            <LineGradient width="w-1/6" />
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
          className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          variants={container}
        >
          {/* row1  */}
          {/* add github and project link  */}
          <div
            className="flex uppercase justify-center text-center items-center p-10 bg-red 
          max-w-[400px]  text-2xl font-playfair font-semibold"
          >
            beautiful user ineterface
          </div>
          <Project
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
          <Project
            title="Project 2"
            img={project1}
            skills={["helo", "there"]}
          />

          {/* row 2 */}
          <Project title="Project 3" img={project1} />
          <Project title="Project 4" img={project1} />
          <Project title="Project 5" img={project1} />

          {/* row 3 */}
          <Project title="Project 6" img={project1} />
          <Project title="Project 6" img={project1} />

          <div
            className="flex justify-center text-center items-center p-10 bg-blue uppercase 
          max-w-[400px]  text-2xl font-playfair font-semibold"
          >
            smooth user interface
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
