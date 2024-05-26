import { logo } from "../../assets/index.js";
import { navLinksData } from "../../Constants/index.js";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import Sidebar from "./Sidebar.jsx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-20 sticky top-0 left-0 z-50 bg-bodyColor  mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} alt="Logo" className="w-24 md:w-auto" />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10 ">
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
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <span
            className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FiMenu />
          </span>
          {/* {
            showMenu && (
              <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide duration-300"></div>
            )
          } */}

          <div>
            <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
