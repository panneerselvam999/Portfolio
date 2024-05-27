import React, { useState } from "react";
import Title from "../Layout/Title";
import Education from "./Education";
import ProfessionalSkills from "./ProfessionalSkills";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("Web Development Skills");

  const sections = [
    { name: "Web Development Skills", component: <ProfessionalSkills /> },
    { name: "Education", component: <Education /> },

  ];

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div>
        <Title title={"Front-end Developer"} des={"My Resume"} />
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
