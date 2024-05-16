import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [typeText] = useTypewriter({
    words: ["Professional Coder.", "Front-end Developer.", "Web Developer."],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="w-full py-20 flex items-center font-titleFont border-b-[1px] border-b-black "
    >
      <div className="w-1/2">
        <div className=" flex flex-col gap-5">
          <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-6xl font-bold text-white ">
            Hi, i'm <span className="text-designColor capitalize">Panneer</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{typeText}</span>
            {/* <Cursor cursorColor='red' /> */}
            <Cursor cursorColor="#ff014f" />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quos ducimus eos eveniet saepe explicabo magni. Error officia dolore
            dolor saepe eos nulla recusandae inventore ipsam, corporis cumque
            perferendis aliquam.
          </p>
        </div>
      </div>
      <div className="w-1/2"></div>
    </section>
  );
};

export default Banner;
