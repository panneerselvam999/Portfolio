import React, { useState } from "react";
import Title from "../Layout/Title";
import Education from "./Education";
import ProfessionalSkills from "./ProfessionalSkills";
import Experience from "./Experience";
import Achievements from "./Achievements";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("Education");

  const sections = [
    { name: "Education", component: <Education /> },

    { name: "ProfessionalSkills", component: <ProfessionalSkills /> },
    { name: "Experience", component: <Experience /> },
    { name: "Achievements", component: <Achievements /> },
  ];

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div>
        <Title title={"Front-end Developer"} des={"My Resume"} />
      </div>
      <div>
        <ul className="flex">
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
