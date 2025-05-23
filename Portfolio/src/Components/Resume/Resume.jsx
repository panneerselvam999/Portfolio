import React, { useState } from "react";
import Title from "../Layout/Title";
import Education from "./Education";
import ProfessionalSkills from "./ProfessionalSkills";
import Experience from "./Experience";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("Skills");

  const sections = [
    { name: "Skills", component: <ProfessionalSkills /> },
    { name: "Education", component: <Education /> },
  ];

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div>
        <Title title={"MERN Stack developer"} des={"Resume"} />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 ">
          {sections.map((section) => (
            <li
              key={section.name}
              className={` ${section.name === activeSection
                ? "border-designColor"
                : "border-transparent"
                }  resumeLi`}
              onClick={() => setActiveSection(section.name)}
            >
              {section.name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        {sections.map((section) => {
          if (section.name === activeSection) {
            return <div key={section.name}>{section.component}</div>;
          }
          return null;
        })}
      </div>
    </section>
  );
};

export default Resume;
