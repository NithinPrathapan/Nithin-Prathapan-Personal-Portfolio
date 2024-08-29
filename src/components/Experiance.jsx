import React from "react";
import LineGradient from "./LineGradient";
import { motion } from "framer-motion";

const Experiance = () => {
  return (
    <section id="experiances" className="pt-32 pb-32">
      <motion.div
        className=" flex flex-col  justify-start items-start "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl  ">
          EX<span className="text-red">PERIANCE</span>
        </p>
        <div className="flex md:justify-start my-5 w-full">
          <LineGradient width="w-[10%]" />
        </div>
      </motion.div>
      <div className="flex flex-col md:flex-row md:gap-12  gap-6 md:text-end">
        <motion.div
          className=" md:w-1/2 border   border-blue p-8 flex justify-end items-end "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex  flex-col gap-2 text-start">
            <h1 className="text-blue font-semibold text-2xl">Softroniics</h1>
            <h5 className="flex gap-4">
              Role-MERN Stack Intern <span>(2024-Present)</span>
            </h5>
            <p>
              Creating Full-Stack application using
              MongoDB,Express,React.js,Node.js and Tailwind css for responsive
              user interface and efficient backend system
            </p>
            <p>
              Gained in-depth experience in full-stack development, enhancing
              skills in both frontend and backend development with the MERN
              stack
            </p>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 border border-blue p-8 text-end  "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex flex-col gap-2 w-full">
            <h1 className="text-blue font-semibold text-2xl">
              Larson and Toubro
            </h1>
            <h5 className="flex  gap-4 md:justify-end justify-center">
              Sales Officer <span>(2023-2024)</span>
            </h5>
            <p>
              Developed and maintained strong relationships with clients,
              providing tailored solutions and exceptional service to meet their
              needs and build long-term partnerships.
            </p>
            <p>
              Implemented effective sales strategies and tactics to achieve and
              exceed monthly and quarterly sales targets, contributing to
              overall company revenue growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiance;
