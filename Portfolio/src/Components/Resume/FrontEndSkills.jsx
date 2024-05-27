import React from 'react'
import { FaHtml5, FaBootstrap, FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";



const FrontEndSkills = () => {
    return (
        <div className="w-full flex items-center justify-center ">
            <div className=" py-4 lgl:py-12 font-titleFont flex flex-col items-center justify-center">
                <h2 className=" text-3xl md:text-4xl font-bold">Frontend Languages</h2>

                <div className="  flex gap-6 mt-10 ">
                    <span className="skillsIcon">  <FaHtml5 /></span>
                    <span className="skillsIcon">  <DiCss3 /></span>
                    <span className="skillsIcon">  <RiJavascriptFill /></span>
                    <span className="skillsIcon">  <FaBootstrap /></span>
                    <span className="skillsIcon">  <RiTailwindCssFill /></span>
                    <span className="skillsIcon">  <FaReact /></span>
                </div>
            </div>
        </div>
    )
}

export default FrontEndSkills