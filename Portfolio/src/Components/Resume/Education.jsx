import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import EducationData from "../../Constants/education.json"

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex  flex-col lgl:flex-row justify-between gap-10"
    >
      <div className=" w-full lgl:w-1/2">
        <div className=" py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2022</p>
          <h2 className=" text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14  h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">

          {
            EducationData.educationData.map(data => (
              <ResumeCard
                key={data.id}
                title={data.title}
                subTitle={data.subTitle}
                result={data.result}
                des={data.des}
              />
            ))
          }

        </div>
      </div>


    </motion.div>
  );
};

export default Education;
