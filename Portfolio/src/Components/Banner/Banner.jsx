import React from "react";
import LeftBanner from "./LeftBanner";
import { bannerImg } from "../../assets/index.js";

const Banner = () => {
  return (
    <section
      id="home"
      className=" w-full py-20 flex items-center font-titleFont border-b-[1px] border-b-black "
    >
      <LeftBanner />
      <div className="w-1/2 flex justify-center items-center relative">
        <img
          className="w-[500px] h-[680px] z-10"
          src={bannerImg}
          alt="bannerImg"
        />
        <div
          className=" absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-centeric
        items-center "
        ></div>
      </div>
    </section>
  );
};

export default Banner;
