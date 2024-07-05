import React, { useState } from "react";

import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full h-navbar paddingX flex items-center fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-content mx-auto">
        <a
          href="/#"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">Leonardo Collazo</p>
        </a>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(link => (
            <li key={link.title}>
              <a
                href={link.path}
                className="text-[18px] font-medium text-secondary hover:text-white cursor-pointer"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-shrink-0 justify-end items-center sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu icon"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } absolute top-navbar right-0 w-1/2 min-w-[140px] max-w-[200px] m-2 p-6 rounded-xl black-gradient z-10`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map(link => (
                <li key={link.title}>
                  <a
                    href={link.path}
                    className="text-[16px] font-medium text-white cursor-pointer"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    {link.title}
                  </a>
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
