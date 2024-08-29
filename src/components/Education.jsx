import React from "react";
import LineGradient from "./LineGradient";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="qualifications" className="pt-32 pb-16">
      <motion.div
        className=" flex flex-col justify-center items-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 ">
          EDU<span className="text-red">CATION</span>
        </p>
        <LineGradient width="w-[10%] " />
      </motion.div>
      <div className="w-full flex flex-col gap-4 justify-center items-center py-16  ">
        <motion.div
          className=" text-center "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-blue font-semibold text-2xl">
              Master Of Business Administration
            </h1>
            <p>
              Mangalam College of Management Studies <br /> APJ Abdul Kalam
              Technological University <br />
              CGPA - 8.7 <br />
              2019-2021
            </p>
          </div>
        </motion.div>
        <motion.div
          className=" text-center "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-blue font-semibold text-2xl">
              Bachelor Of Computer Applications
            </h1>
            <p>
              Mar Augusthinose College Ramapuram <br /> MG University <br />
              CGPA - 6.9 <br />
              2016-2019
            </p>
          </div>
        </motion.div>
        <motion.div
          className=" text-center "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-blue font-semibold text-2xl">
              Higher Secondary Education
            </h1>
            <p>
              Govt. H.S.S Panamattam <br />
              80 % <br />
              2014-2016
            </p>
          </div>
        </motion.div>
        <motion.div
          className=" text-center "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-blue font-semibold text-2xl">
              High School Education
            </h1>
            <p>
              Govt. H.S.S Panamattam <br /> 99 % <br />
              2014
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
