import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between fixed w-[100%] z-10 top-0 items-center px-10 py-4 shadow-md bg-white border-b-4 border-teal-600">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent tracking-wide">
          MAHESH MEDICAL
        </h1>
        {/* <p className="text-sm text-gray-700">மகேஷ் மெடிக்கல்</p> */}
      </div>

      {/* Nav Links */}
      <ul className="flex gap-20 font-semibold text-gray-800 ">
        <li>
          <a href="#home" className="hover:text-green-600">
            HOME
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-green-600">
            CATEGORIES
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-green-600">
            ABOUT US
          </a>
        </li>
        
      </ul>
      <div>
        <a
          href="#contact"
          className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
        >
          CONTACT US
        </a>
      </div>
    </nav>
  );
};

export default Nav;
