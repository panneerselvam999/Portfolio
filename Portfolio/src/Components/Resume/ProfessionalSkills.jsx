import React from "react";
import { motion } from "framer-motion";

import ResumeCard from "./ResumeCard";

const Professional = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-16 "
    >
      <div className="w-full  lgl:w-1/2 ">
        <div className=" py-4 lgl:py-12 font-titleFont">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className=" text-3xl md:text-4xl font-bold">Frontend Languages</h2>

          <div className="my-5 overflow-x-hidden">
            <p className="text-sm uppercase font-medium">html</p>
            <span
              className="w-full h-2 bgOpacity
            inline-flex rounded-md mt-2  "
            >
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>

          <div className="my-5 overflow-x-hidden">
            <p className="text-sm uppercase font-medium">css</p>
            <span
              className="w-full h-2 bgOpacity
            inline-flex rounded-md mt-2  "
            >
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">80%</span>
              </motion.span>
            </span>
          </div>

          <div className="my-5 overflow-x-hidden">
            <p className="text-sm uppercase font-medium">javascript</p>
            <span
              className="w-full h-2 bgOpacity
            inline-flex rounded-md mt-2  "
            >
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">70%</span>
              </motion.span>
            </span>
          </div>

          <div className="my-5">
            <p className="text-sm uppercase font-medium">design</p>
            <span
              className="w-full h-2 bgOpacity
            inline-flex rounded-md mt-2 "
            >
              <span className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">95%</span>
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full  lgl:w-1/2 ">
        <div className="py-4 lgl:py-12 font-titleFont">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className=" text-3xl md:text-4xl font-bold">JavaScript Libraries</h2>

          <div className="my-5 overflow-x-hidden">
            <p className="text-sm uppercase font-medium">react</p>
            <span
              className="w-full h-2 bgOpacity
            inline-flex rounded-md mt-2  "
            >
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">50%</span>
              </motion.span>
            </span>
          </div>

          <div className="my-5">
            <p className="text-sm uppercase font-medium">design</p>
            <span
              className="w-full h-2 bgOpacity
            inline-flex rounded-md mt-2 "
            >
              <span className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">95%</span>
              </span>
            </span>
          </div>

          <div className="my-5">
            <p className="text-sm uppercase font-medium">design</p>
            <span
              className="w-full h-2 bgOpacity
            inline-flex rounded-md mt-2 "
            >
              <span className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">95%</span>
              </span>
            </span>
          </div>

          <div className="my-5">
            <p className="text-sm uppercase font-medium">design</p>
            <span
              className="w-full h-2 bgOpacity
            inline-flex rounded-md mt-2 "
            >
              <span className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">95%</span>
              </span>
            </span>
          </div>

          <div className="my-5">
            <p className="text-sm uppercase font-medium">design</p>
            <span
              className="w-full h-2 bgOpacity
            inline-flex rounded-md mt-2 "
            >
              <span className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">95%</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Professional;
