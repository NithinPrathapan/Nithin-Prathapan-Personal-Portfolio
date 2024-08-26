import React from "react";
import LineGradient from "./LineGradient";

const ProjectComponent = () => {
  return (
    <div className=" w-full flex flex-col justify-between md:flex md:flex-row-reverse md:p-8 p-4 items-center gap-2 rounded-md border border-blue shadow-2xl  shadow-black">
      <div className="md:w-[45%] relative">
        <img
          className="rounded-md min-w-full object-cover h-full"
          src="https://t4.ftcdn.net/jpg/05/50/33/47/360_F_550334715_0d2cdaljV4Xd3x7yVUhRxfmLLEUyMdXr.jpg"
          alt=""
        />
      </div>
      <div className="md:w-[55%] md:text-start text-center flex flex-col gap-2">
        <h1 className="text-2xl md:text-3xl font-playfair font-semibold text-yellow">
          Project 1
        </h1>
        <div className="w-[10%] flex justify-center mx-auto md:mx-0">
          <LineGradient />
        </div>
        <p className="italic my-2 md:text-start mx-auto md:mx-0 w-[80%] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          sunt debitis quos, hic, voluptatem eos ad deserunt eligendi natus
          consequatur maiores soluta reiciendis. Adipisci facilis asperiores
          eligendi saepe aliquid earum ullam temporibus.
        </p>
        <div className="flex justify-center md:justify-start md:text-start items-center gap-4 flex-wrap  w-[80%] md:mx-0 mx-auto  ">
          <p className="text-center  font-semibold text-yellow font-playfair">
            Lorem
          </p>
          <p className="text-center  font-semibold text-yellow font-playfair">
            Lorem
          </p>
          <p className="text-center  font-semibold text-yellow font-playfair">
            Lorem
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
