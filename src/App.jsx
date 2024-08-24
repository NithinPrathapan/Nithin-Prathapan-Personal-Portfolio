import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./components/DotGroup";
import Landing from "./components/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Education from "./components/Education";

const App = () => {
  const [selectedPage, setSelectedpage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isTopOfPage, setIsTopofPage] = useState(true);
  // this will set the min width to 1060px
  useEffect(() => {
    const handleScrll = () => {
      if (window.scrollY === 0) setIsTopofPage(true);
      if (window.scrollY !== 0) setIsTopofPage(false);
    };
    window.addEventListener("scroll", handleScrll);
    return () => window.removeEventListener("scroll", handleScrll);
  }, []);
  return (
    <div className="app bg-deep_blue">
      <ToastContainer />
      <Navbar isTopOfPage={isTopOfPage} selectedPage={setSelectedpage} />
      <div className="w-5/6 mx-auto md:h-full ">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedpage={setSelectedpage}
          />
        )}
        <Landing setSelectedpage={setSelectedpage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto min-h-full">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto min-h-full">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <Education />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">{/* <Testimonials /> */}</div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <Contact />
      </div>
      <LineGradient />
      <div className=" mx-auto ">
        <Footer />
      </div>
    </div>
  );
};

export default App;
