import React from "react";
import { motion } from "framer-motion";

import ResumeCard from "./ResumeCard";

const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }} className="flex justify-between gap-10">
      <div className=" w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className=" mt-14  h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
          <ResumeCard
            title="Under Graduation"
            subTitle="Vysya College"
            result="7.2 CGPA"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure sed tempore enim architecto dignissimos, "
          />
          <ResumeCard
            title="Higher Secondary School"
            subTitle="Sri Ramakrishna Saradha"
            result="55.5 %"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure sed tempore enim architecto dignissimos, "
          />
          <ResumeCard
            title="Secondary School"
            subTitle="Sri Ramakrishna Saradha"
            result="90.2 %"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure sed tempore enim architecto dignissimos, "
          />
        </div>
      </div>
      <div className="w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className=" mt-14  h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
          <ResumeCard
            title="Under Graduation"
            subTitle="Vysya College"
            result="7.2 CGPA"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure sed tempore enim architecto dignissimos, "
          />
          <ResumeCard
            title="Higher Secondary School"
            subTitle="Sri Ramakrishna Saradha"
            result="55.5 %"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure sed tempore enim architecto dignissimos, "
          />
          <ResumeCard
            title="Secondary School"
            subTitle="Sri Ramakrishna Saradha"
            result="90.2 %"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure sed tempore enim architecto dignissimos, "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;
