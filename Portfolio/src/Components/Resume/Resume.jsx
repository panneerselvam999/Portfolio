import React from "react";
import Title from "../Layout/Title";
import ResumeCard from "./ResumeCard";
import Education from "./Education";
import Skills from "./Skills";
import Professional from "./Professional";
import Experience from "./Experience";
import Achievements from "./Achievements";

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div>
        <Title title={"Front-end Developer"} des={"My Resume"} />
      </div>
      <div>
        <ul className="flex">
          <li className="resumeLi"> Education</li>
          <li className="resumeLi"> Skills</li>
          <li className="resumeLi"> Professional</li>
          <li className="resumeLi"> Experience</li>
          <li className="resumeLi"> Achievements</li>
        </ul>
      </div>

      

      {/* <Education /> */}
      {/* <Skills /> */}
      {/* <Professional /> */}
      {/* <Experience /> */}
      {/* <Achievements /> */}
    </section>
  );
};

export default Resume;
