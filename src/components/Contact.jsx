import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import LineGradient from "./LineGradient";
import contact from "../assets/contact-image.jpeg";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const serviceID = "service_bsk3j1f";
    const templateID = "template_5ww4qaf";
    const userID = "58uN3KasRWwfoEnfA";
    console.log(data);
    emailjs.send(serviceID, templateID, data, userID).then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      toast.success("Message sent successfully, Thank you!", {
        progress: undefined,
        theme: "colored",
      });
      reset(); // Reset form fields after submission
    });
  };
  return (
    <section id="contacts" className="py-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair text-start font-semibold text-4xl  text-yellow">
          CONTACT ME<span className="text-white"> TO GET STARTED</span>
        </p>
        <div className="flex md:justify-start my-5">
          <LineGradient width="w-2/5" />
        </div>
      </motion.div>
      {/* form and image */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2  flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={contact} alt="contact" />
        </motion.div>
        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="w-full bg-blue font-semibold placeholder-opaque_black p-3"
              type="text"
              name="name"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
                minLength: 3,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Maximum 100 characters."}
                {errors.name.type === "minLength" &&
                  "Name should be minimum 3 characters."}
              </p>
            )}
            <input
              className="w-full bg-blue font-semibold placeholder-opaque_black p-3 mt-5"
              type="email"
              name="email"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email"}
              </p>
            )}
            <textarea
              rows={4}
              cols={50}
              name="message"
              className="w-full bg-blue font-semibold placeholder-opaque_black p-3 mt-5"
              type="text"
              placeholder="MESSAGE"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 character"}
              </p>
            )}
            <button
              type="submit"
              className="p-5 bg-yellow font-semibold hover:bg-red hover:text-white text-deep_blue mt-5"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
