import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  /* toggle state that is set at false at the start */
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px]+
             text-white ${
               /* if index is the last element, give it margin right of 0
              otherwise give margin right of 10 */
               index === navLinks.length - 1 ? "mr-0" : "mr-10"
             }`}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* mobile version */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={
            /* if toggle is turned on then show closed icon, 
              otherwise show menu */
            toggle ? close : menu
          }
          alt="menu"
          className="w-[28px] h-[28px]
          object-contain"
          //on click have callback function and set toggle to previous state
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          /* check if toggle is turned on
        if it is, then it will be a flex container
        otherwise it is hidden */
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px]+
             text-white ${
               /* if index is the last element, give it margin right of 0
              otherwise give margin bottom of 4 */
               index === navLinks.length - 1 ? "mr-0" : "mb-4"
             }`}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
