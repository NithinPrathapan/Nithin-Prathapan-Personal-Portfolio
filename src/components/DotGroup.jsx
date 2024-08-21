import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyle = `relative bg-yellow  before:absolute before:w-6 before:h-6 
  before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        className={`${
          selectedPage === "home" ? selectedStyle : "bg-dark_grey"
        }w-3 h-3 rounded-full`}
        href={`#home`}
        onClick={() => setSelectedPage(lowerCasePage)}
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage === "skills" ? selectedStyle : "bg-dark_grey"
        }w-3 h-3 rounded-full`}
        href={`#skills`}
        onClick={() => setSelectedPage(lowerCasePage)}
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage === "projects" ? selectedStyle : "bg-dark_grey"
        }w-3 h-3 rounded-full`}
        href={`#projects`}
        onClick={() => setSelectedPage(lowerCasePage)}
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage === "testimonials" ? selectedStyle : "bg-dark_grey"
        }w-3 h-3 rounded-full`}
        href={`#testimonials`}
        onClick={() => setSelectedPage(lowerCasePage)}
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage === "contacts" ? selectedStyle : "bg-dark_grey"
        }w-3 h-3 rounded-full`}
        href={`#contacts`}
        onClick={() => setSelectedPage(lowerCasePage)}
      ></AnchorLink>
    </div>
  );
};

export default DotGroup;
