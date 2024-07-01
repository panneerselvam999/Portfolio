import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
// import {
//   Gilber,
//   Alfa,
//   aturister,
//   Edusity,
//   LogReg,

// } from "../../assets/index.js";

const ProjectCard = ({ title, des, img, git, live }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          alt={img}
          src={img}
        />
      </div>
      <div className="w-full mt-5">
        <div className="flex justify-between items-center">
          <h3 className=" text-designColor ">{title}</h3>
          <div>
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center to-gray-400 hover:text-designColor duration-300 cursor-pointer">
              <a href={git} target="_blank" rel="noopener noreferrer">
                <BsGithub />
              </a>
            </span>
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center to-gray-400 hover:text-designColor duration-300 cursor-pointer ml-2">
              <a href={live} target="_blank" rel="noopener noreferrer">
                <FaGlobe />
              </a>
            </span>
          </div>
        </div>
        <div>
          <p className="mt-3 text-sm tracking-wide hover:text-gray-300  duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
