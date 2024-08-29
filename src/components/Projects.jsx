import React from "react";
import project1 from "../assets/real-estate.png";
import nike from "../assets/nike.png";
import grocerry from "../assets/groccerry.png";
import planty from "../assets/planty.png";
import { motion } from "framer-motion";
import ProjectComponent from "./ProjectComponent";
import LineGradient from "./LineGradient";
const Projects = () => {
  return (
    <section id="projects" className="flex justify-center pt-48 pb-48">
      <div>
        <motion.div
          className=" md:w-4/5 mx-auto text-center "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -25 },
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

          <p className="mt-6 mb-10 w-full">
            Discover my passion for building real-world solutions through my
            diverse portfolio of projects. Each project reflects my ability to
            turn ideas into tangible results. Explore my work and see how I
            leverage technology to solve problems and make a positive impact
          </p>
        </motion.div>
        <motion.div
          className="w-full flex flex-col gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          {/* row1  */}
          {/* add github and project link  */}

          {/* first row */}
          <ProjectComponent
            title="Real Estate Application"
            description={
              " Developed using  MERN stack for managing real estate listings. Users can easily add, edit, and delete listings. It includes modern and responsive design using Tailwind CSS. It includes secure login and registration system using JWT (JSON Web Tokens) to protect user data. Integrated real time data updates and handling asynchronous requests using Redux"
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
            animation={{
              hidden: { opacity: 0, x: -25 }, // Slide in from the left
              visible: { opacity: 1, x: 0 },
            }}
            delay={0.5}
            img={project1}
            git={"https://github.com/NithinPrathapan/Real-Estate-App"}
            web={"https://mern-estate-c7gd.onrender.com/"}
          />

          {/* row 2 */}
          <ProjectComponent
            title="Groci Store (E-Commerce Application"
            description={
              "Groci Store is a modern grocery shopping web application designed to provide users with a seamless and user-friendly online shopping experience. Built using the latest React.js ecosystem, the application allows users to browse a wide variety of groceries, add items to their cart, and place orders efficiently. The application emphasizes simplicity, responsiveness, and a streamlined shopping process."
            }
            skills={[
              "React.js",
              "React-Bootstrap",
              "react-multi-carousel",
              "react-slick",
              "Redux Toolkit",
              "React Router DOM",
              "React-Toastify",
              "React Testing Library",
            ]}
            img={grocerry}
            animation={{
              hidden: { opacity: 0, x: 25 }, // Slide in from the left
              visible: { opacity: 1, x: 0 },
            }}
            delay={0.8}
            git={"https://github.com/NithinPrathapan/grocerry"}
            web={"https://grocerry.vercel.app/"}
          />

          <div className="flex flex-col md:flex-row h-full mt-4  justify-center items-center gap-4">
            <ProjectComponent
              title="Planty-Static Website"
              description={
                "Planty is a static, responsive website built for showcasing a variety of plants and gardening solutions. The website is designed to provide users with a visually appealing, fast, and responsive experience. Built using React.js and Tailwind CSS, it ensures a modern, mobile-first approach to web design."
              }
              skills={["React.js", "Tailwind CSS"]}
              img={planty}
              animation={{
                hidden: { opacity: 0, y: 25 }, // Slide in from the left
                visible: { opacity: 1, y: 0 },
              }}
              delay={0.5}
              layout={"block"}
              git={"https://github.com/NithinPrathapan/Planty-static-website"}
              web={"https://planty-nithin-prathapans-projects.vercel.app/"}
            />{" "}
            <ProjectComponent
              title="Nike-Landing Page clone"
              description={
                "This is a landing page for Nike, built using React.js and Tailwind CSS, with a focus on sleek design, interactivity, and responsiveness. The page is designed to showcase Nike’s Shoes, latest collections, and promotional content, providing users with a highly engaging and visually appealing experience."
              }
              skills={["React.js", "Tailwind CSS"]}
              img={nike}
              layout={"block"}
              animation={{
                hidden: { opacity: 0, y: 25 }, // Slide in from the left
                visible: { opacity: 1, y: 0 },
              }}
              delay={0.3}
              git={"https://github.com/NithinPrathapan/nike_store"}
              web={"https://nike-store-blond-iota.vercel.app/"}
            />
          </div>
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
