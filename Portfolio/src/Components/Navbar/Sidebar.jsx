import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { navLinksData } from "../../Constants/index.js";
import { Link } from "react-scroll";

const Sidebar = ({ showMenu, setShowMenu }) => {
    return (
        <div
            className={`absolute top-0 -left-4 h-screen w-[80%] bg-gray-900 p-4 overflow-scroll duration-300 transform ${showMenu ? "translate-x-0" : "-translate-x-full -left-2"
                }
             `}
        >
            <span
                onClick={() => setShowMenu(!showMenu)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
            >
                <MdOutlineCancel />
            </span>

            <div>
                <ul className=" flex flex-col items-start gap-6 lg:gap-10  mt-16">
                    {navLinksData.map(({ _id, title, link }) => (
                        <li
                            key={_id}
                            className=" text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 "
                        >
                            <Link
                                activeClass="active"
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                onClick={() => setShowMenu(false)}
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
