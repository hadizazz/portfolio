import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "projects",
      offset: -100,
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className="flex xl:justify-around justify-between items-center w-full h-20 fixed  bg-[#112D4E] text-white">
      <div>
        <h1 className="text-2xl p-20 uppercase font-semibold tracking-widest ">
          Hadizazz.
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link, offset }) => (
          <li
            key={id}
            className="px-2 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
          >
            <Link to={link} offset={offset} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
