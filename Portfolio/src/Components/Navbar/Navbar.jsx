import { logo } from "../../assets/index.js";
import { navLinksData } from "../../Constants/index.js";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="w-full h-20 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <ul className=" flex items-center gap-10 ">
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
                offset={-70}
                duration={500}
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

export default Navbar;
