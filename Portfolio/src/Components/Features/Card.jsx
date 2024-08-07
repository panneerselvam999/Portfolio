import { useState } from "react";
import { HiArrowRight } from "react-icons/hi";


const Card = ({ title, icon, des }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100">
      <div className="h-72  overflow-y-hidden">
        <div className="flex flex-col gap-8 translate-y-14 group-hover:translate-y-0 transition-transform duration-500">
          <div>
            <span className="text-5xl text-designColor">{icon}</span>
          </div>
          <div className="flex flex-col gap-6 overflow-x-hidden">
            <h2 className="text-2xl font-titleFont font-bold text-gray-400">
              {title}
            </h2>
            <p className=" base ">{des}</p>
            <span className=" text-xl  md:text-2xl text-designColor w-6 hover:translate-x-4 transition-transform duration-300 ">
              <HiArrowRight />
            </span>
            {/* <span className="text-2xl text-designColor relative">
              <HiArrowRight
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:translate-x-4 transition-transform duration-300"
              />
            </span> */}
            {/* <span
              className={`text-2xl text-designColor group ${isHovered ? 'hover:w-6 hover:translate-x-4 transition-transform duration-300' : ''
                }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <HiArrowRight />
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
