import React from "react";
import { motion } from "framer-motion";

import ResumeCard from "./ResumeCard";

const Professional = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex justify-between gap-16 "
    >
      <div className=" w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-4xl font-bold">Design skils</h2>

          <div className="my-5 overflow-x-hidden">
            <p className="text-sm uppercase font-medium">React</p>
            <span
              className="w-full h-2 bgOpacity
            inline-flex rounded-md mt-2  "
            >
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>

          <div className="my-5">
            <p className="text-sm uppercase font-medium">html</p>
            <span
              className="w-full h-2 bgOpacity
            inline-flex rounded-md mt-2 "
            >
              <span className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">90%</span>
              </span>
            </span>
          </div>

          <div className="my-5">
            <p className="text-sm uppercase font-medium">css3</p>
            <span
              className="w-full h-2 bgOpacity
            inline-flex rounded-md mt-2 "
            >
              <span className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">80%</span>
              </span>
            </span>
          </div>

          <div className="my-5">
            <p className="text-sm uppercase font-medium">javascript</p>
            <span
              className="w-full h-2 bgOpacity
            inline-flex rounded-md mt-2 "
            >
              <span className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">75%</span>
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
      <div className="w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-4xl font-bold">Development skils</h2>

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
