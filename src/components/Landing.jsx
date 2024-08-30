import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import profile from "../assets/profile-image.png";
import SocialMediaIcons from "./SocialMediaIcons";

const Landing = ({ setSelectedpage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* image section */}
      <div className="basis-3/5 z-10 mt-32 md:mt-32 flex justify-center md:order-2">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
           before:w-full before:rounded-t-[50px] before:max-w-[400px] before:h-full
          before:border-2 before:border-blue before:z-[-1] "
          >
            <img
              className="hover:filter hover:saturate-50 saturate-0 
              transition duration-500 z-10 w-full max-w-[400px]
              md:max-w-[400px]"
              src={profile}
              alt="profile"
            />
          </div>
        ) : (
          <div>
            <img
              className="hover:filter hover:saturate-100 saturate-0 
              transition duration-500 z-10 w-full max-w-[400px]
              md:max-w-[400px]"
              src={profile}
              alt="profile"
            />
          </div>
        )}
      </div>
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* heading */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-[40px] font-playfair z-10 md:text-start text-center ">
            Nithin{" "}
            <span
              className="relative text-deep_blue font-semibold z-20
              xs:before:content-brush before:absolute before:-left-[25px]
              before:-top-[85px] before:z-[-1] 
              "
            >
              Prathapan
            </span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Hi, I am a Full Stack Web Developer and Web Designer. An Open Source
            enthusiast and a Computer Science graduate from India. <br />I am a
            Software engineer with a strong foundation in Computer Science,
            specializing in web development. I love working on new and exciting
            technologies. I have a keen interest in Web Development and I am
            always looking for new opportunities to learn and grow.
          </p>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            href="#contacts"
            className="bg-gradient-rainblue text-deep_blue rounded-sm py-3 
            px-7 font-semibold hover:bg-blue hover:text-white transition
             duration-500"
            onClick={() => setSelectedpage("contacts")}
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            href="#contacts"
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contacts")}
          >
            <div className="bg-deep_blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
              Let's Talk
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink href="#contacts" className="">
            <div className="bg-deep_blue w-[140px] py-2 rounded-md px-4 border mx-auto hover:text-red transition duration-500 hover:border-red md:mx-0 font-playfair my-10">
              Download CV
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex  justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
