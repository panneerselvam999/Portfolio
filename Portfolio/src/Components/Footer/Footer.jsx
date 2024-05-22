import React from "react";
import { logo } from "../../assets";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { navLinksData } from "../../Constants/index.js";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <footer id="resume" className="w-full h-auto py-20 border-b-[1px] border-b-black grid grid-cols-4 gap-8">
            <div className="w-full h-full">
                <img className="w-32" src={logo} alt="logo" />
                <div className="flex gap-5 mt-6">
                    <span className="bannerIcon">
                        <FaGithub />
                    </span>
                    <span className="bannerIcon">
                        <FaLinkedin />
                    </span>
                </div>
            </div>
            <div className="w-full h-full overflow-y-hidden">
                <ul className="flex flex-col  gap-2">
                    <h3 className="text-xl uppercase text-designColor tracking-wide">QUICK LINK</h3>
                    {navLinksData.map(({ _id, title, link }) => (
                        <li
                            key={_id}
                            className="group text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 "
                        >
                            <Link
                                className="relative "
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                            >
                                {title}
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 "></span>
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>
            <div className="w-full h-full overflow-y-hidden">
                <ul className="flex flex-col  gap-2">
                    <h3 className="text-xl uppercase text-designColor tracking-wide">RESOURCES</h3>
                    {navLinksData.map(({ _id, title, link }) => (
                        <li
                            key={_id}
                            className="group text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 "
                        >
                            <Link
                                className="relative "
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                            >
                                {title}
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 "></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full h-full overflow-y-hidden">
                <ul className="flex flex-col  gap-2">
                    <h3 className="text-xl uppercase text-designColor tracking-wide">RESOURCES</h3>
                    {navLinksData.map(({ _id, title, link }) => (
                        <li
                            key={_id}
                            className="group text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 "
                        >
                            <Link
                                className="relative "
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                            >
                                {title}
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 "></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

                {/* <ul>
                    <li> <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer "> About <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%]  group-hover:translate-x-0 transition-transform duration-300"></span> </span> </li>
                    <li> <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer "> About <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%]  group-hover:translate-x-0 transition-transform duration-300"></span> </span> </li>
                    <li> <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer "> About <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%]  group-hover:translate-x-0 transition-transform duration-300"></span> </span> </li>
                    <li> <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer "> About <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%]  group-hover:translate-x-0 transition-transform duration-300"></span> </span> </li>
                    <li> <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer "> About <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%]  group-hover:translate-x-0 transition-transform duration-300"></span> </span> </li>
                </ul> */}