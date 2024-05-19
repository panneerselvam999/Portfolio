import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Features from "./Components/Features/Features";
import Projects from "./Components/Project/Projects";
import Resume from "./Components/Resume/Resume";

const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Resume />
      </div>
    </div>
  );
};

export default App;
