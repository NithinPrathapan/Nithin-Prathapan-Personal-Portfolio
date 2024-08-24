import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedpage }) => {
  console.log(selectedPage);
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
  before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7  ">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-dark_grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedpage("home")}
      />
      <AnchorLink
        href="#skills"
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-dark_grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedpage("skills")}
      />
      <AnchorLink
        href="#projects"
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-dark_grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedpage("projects")}
      />
      <AnchorLink
        href="#testimonials"
        className={`${
          selectedPage === "testimonials" ? selectedStyles : "bg-dark_grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedpage("testimonials")}
      />
      <AnchorLink
        href="#contacts"
        className={`${
          selectedPage === "contacts" ? selectedStyles : "bg-dark_grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedpage("contacts")}
      />
    </div>
  );
};

export default DotGroup;
