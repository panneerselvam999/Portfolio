import React from "react";

const Experience = () => {
  return (
    <div>
      <div className="w-full ">
        <h2 className=" text-3xl md:text-4xl text-center font-bold">
          Work Experience
        </h2>
      </div>
      <div className="w-full">
        <div className="flex flex-col items-center justify-center my-10 ">
          <div className="w-full max-w-4xl">
            <div className="flex flex-col gap-6">
              <div className="md:flex justify-between items-center">
                <h3 className="text-xl font-bold">
                  Front-End Developer Intern | Macincode, Salem
                </h3>
                <p>Sep 2024 - Oct 2024</p>
              </div>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  <span className=" font-medium text-gray-100">
                    Front-End Development Experience:{" "}
                  </span>
                  Contributed to two projects, gaining experience in React and
                  React Bootstrap for API integration and screen development
                  (Project 1), and utilizing React, Tailwind CSS, and NPM
                  packages for UI development, API integration, and performance
                  optimization (Project 2 - 25% impact).
                </li>
                <li>
                  <span className=" font-medium text-gray-100">
                    Technical Skills Application:{" "}
                  </span>
                  Applied skills in creating user interfaces, integrating REST
                  APIs, and optimizing application performance to enhance the
                  overall user experience across projects.
                </li>
                <li>
                  <span className=" font-medium text-gray-100">
                    Professional Growth:{" "}
                  </span>
                  Developed essential professional skills including
                  understanding production-level project structures, effective
                  team and management communication, task ownership, time
                  management, and task distribution.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center my-10 ">
          <div className="w-full max-w-4xl">
            <div className="flex flex-col gap-6">
              <div className=" md:flex justify-between items-center">
                <h3 className="text-xl font-bold">
                  Front-End Developer Freelancers | Alfa Service Center,
                  Bangalore
                </h3>
                <p>Dec 2023</p>
              </div>
              <ul className="list-disc list-inside flex flex-col gap-2">
                <li>
                  Developed a website for Alfa Service Center in Bangalore,
                  increasing customer visits by 20%
                </li>
                <li>
                  Key contributions: contact page design, Email.js
                  implementation, bug fixing, and user experience enhancements.
                </li>
                <li>Achieved a 25% improvement in overall website quality.</li>
                <li>
                  Technologies used: HTML, CSS, JavaScript, jQuery, Bootstrap,
                  Email.js.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
