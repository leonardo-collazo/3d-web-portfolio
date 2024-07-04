import React, { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full h-navbar paddingX flex items-center fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-content mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">Leonardo Collazo</p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(link => (
            <li key={link.id}>
              <Link
                to={`#${link.id}`}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-shrink-0 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointers"
            onClick={() => {
              setToggle(!toggle);
            }}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-10`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map(link => (
                <li key={link.id}>
                  <Link
                    to={`#${link.id}`}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
