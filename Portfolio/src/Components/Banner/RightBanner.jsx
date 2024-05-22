import React from "react";
import { bannerImg } from "../../assets/index.js";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="
                w-[300px] h-[400px]
                lgl:w-[500px] lgl:h-[680px] z-10"
        src={bannerImg}
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
