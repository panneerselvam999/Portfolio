import React from "react";
import { FaHtml5, FaBootstrap, FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { RiJavascriptFill,RiTailwindCssFill } from "react-icons/ri";




// import { motion } from "framer-motion";

// import ResumeCard from "./ResumeCard";

const Professional = () => {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1, transition: { duration: 0.5 } }}
    //   className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-16 "
    // >
    <div className="w-full   ">
      <div className=" py-4 lgl:py-12 font-titleFont">
        {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
        <h2 className=" text-3xl md:text-4xl font-bold">Frontend Languages</h2>

        <div className=" flex gap-6 mt-10">

         <span className="bannerIcon">  <FaHtml5 /></span>
         <span className="bannerIcon">  <DiCss3 /></span>
         <span className="bannerIcon">  <RiJavascriptFill /></span>
         <span className="bannerIcon">  <FaBootstrap /></span>
         <span className="bannerIcon">  <FaReact /></span>
         <span className="bannerIcon">  <RiTailwindCssFill /></span>

        </div>
      </div>
    </div>

    // </motion.div>
  );
};

export default Professional;
