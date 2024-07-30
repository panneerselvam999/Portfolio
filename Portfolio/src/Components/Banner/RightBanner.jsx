import React from "react";
import {  panneer } from "../../assets/index.js";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative ">
      <img
        // className="
        //         w-[400px] h-[425px]
        //           z-10"
        className="z-10 w-full md:max-w-[555px]"
        src={panneer}
        alt="bannerImg"
      />
      <div
        className=" absolute bottom-0 w-[300px] h-[300px]  lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-centeric
        items-center  bg-violet-700"
      ></div>

    </div>
  );
};

export default RightBanner;