import React from "react";
import html from "../assets/images/html5.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import bootstrap from "../assets/images/bootstrap.png";
import tailwind from "../assets/images/tailwind.png";
import github from "../assets/images/github.png";
import react from "../assets/images/reactjs.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500 ",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind",
      style: "pt-10 shadow-sky-400",
    },
    {
      id: 5,
      src: bootstrap,
      title: "Bootstrap",
      style: "-pt-{10px} shadow-purple-500",
    },
    {
      id: 6,
      src: react,
      title: "ReactJS",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
    },
  ];

  return (
    <div name="skills" className="py-10 w-full items-center lg:h-max">
      <div className="">
        <div className="max-w-screen-xl md:w-full p-20  mx-auto flex flex-col text-justify">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Skills
            </p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid lg:grid-cols-3 sm:grid-cols-3 gap-20 text-center py-8 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`pt-5 shadow-md hover:sclae-105 duration-500 ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
