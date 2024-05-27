import React from "react";
// import { VscVscodeInsiders } from "react-icons/vsc";
// import { TbBrandVscode } from "react-icons/tb";
import { FaCode } from "react-icons/fa";

const SkillTools = () => {
    return (
        <div className="w-full flex items-center justify-center ">
            <div className="py-4 lgl:py-12 font-titleFont flex flex-col items-center justify-center">
                <h2 className=" mx-auto text-3xl md:text-4xl font-bold ">Tools</h2>

                <div className="  flex mt-10 ">
                    <span className="skillsIcon">
                        {/* <VscVscodeInsiders /> */}
                        {/* <TbBrandVscode /> */}
                        <FaCode />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SkillTools;
