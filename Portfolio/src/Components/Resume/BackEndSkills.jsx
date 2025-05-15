import React from 'react'
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { TbApi } from 'react-icons/tb';
import { SiExpress } from "react-icons/si";



const BackEndSkills = () => {
  return (
    <div className="w-full flex items-center justify-center ">
      <div className=" py-4 lgl:py-12 font-titleFont flex flex-col items-center justify-center">
        <h2 className=" text-3xl md:text-4xl font-bold">Back-End</h2>

        <div className="  flex flex-wrap items-center justify-center gap-6 mt-10 ">
          <span className="skillsIcon"> <IoLogoNodejs /></span>
          <span className="skillsIcon"> <SiExpress /></span>
          <span className="skillsIcon"> <SiMongodb /></span>
          <span className="skillsIcon"> <TbApi /></span>


        </div>
      </div>
    </div>
  )
}

export default BackEndSkills