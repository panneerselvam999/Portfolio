import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Features from "./Components/Features/Features";
import Projects from "./Components/Project/Projects";
import Resume from "./Components/Resume/Resume";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import FooterBottom from "./Components/Footer/FooterBottom";

const App = () => {
  return (
    <div className="w-screen h-auto  text-lightText bg-bodyColor -translate-x-2">
      <div className="max-w-screen-xl mx-auto px-4 m-0 ">
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
};

export default App;
