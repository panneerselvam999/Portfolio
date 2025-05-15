import React from "react";
import { Tooltip } from "react-tooltip";
import { FaNpm, FaGithub, FaChrome } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";

const SkillTools = () => {
    return (
        <div className="w-full flex items-center justify-center ">
            <div className="py-4 lgl:py-12 font-titleFont flex flex-col items-center justify-center">
                <h2 className=" mx-auto text-3xl md:text-4xl font-bold ">Tools</h2>

                <div className="  flex mt-10 ">
                    <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
                        <span className="skillsIcon" id="vs-code">
                            <TbBrandVscode />
                        </span>
                        <Tooltip anchorSelect="#vs-code" content="VS - Code" />
                        <span className="skillsIcon" id="npm">
                            <FaNpm />
                        </span>
                        <Tooltip anchorSelect="#npm" content="Node Package Manager" />
                        <span className="skillsIcon" id="github">
                            <FaGithub />
                        </span>
                        <Tooltip anchorSelect="#github" content="GitHub" />
                        <span className="skillsIcon" id="chrome-dev">
                            <FaChrome />
                        </span>
                        <Tooltip
                            anchorSelect="#chrome-dev"
                            content="Chrome Developer Tools"
                        />
                        <span className="skillsIcon" id="postman">
                            <SiPostman />
                        </span>
                        <Tooltip
                            anchorSelect="#postman"
                            content="Postman"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillTools;
