import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Profile from "../assets/images/profile.jpg";

const home = () => {
  return (
    <div name="home" className="pt-52 h-max w-full ">
      <div className="shadow bg-[#DBE2EF] max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full sm:mx-auto md:w-fit md:p-10 md:flex-row p-10 pb-10 border-b border-gray-200 ">
        <div className=" flex flex-col text-justify justify-start h-full md:w-fit lg:w-screen">
          <p className="text-4xl md:text-2xl font-bold">
            Hello, I'm
            <span className="md:text-2xl text-red-400">
              {" "}
              Hadiza Cahya Firdaus
            </span>
          </p>
          <h5 className="text-4xl md:text-2xl pt-2 font-bold">
            Software Engineer
          </h5>
          <p className=" py-2 max-w-md">
            I’m a passionate, hard-working, and adaptive software engineer with
            a passion for developing and combining technology with
            multi-disciplinary knowledge to solve an organizational problem.
          </p>
          <div className="text-center">
            <button className="group px-6 py-3 w-fit my-2 flex items-center justify-center rounded-md bg-[#112D4E] text-white cursor-pointer">
              Let's Talk
              <a
                href="https://www.linkedin.com/in/hadizacahyafirdaus/"
                target="_blank"
                className="group-hover:rotate-90 duration-300"
              >
                <MdOutlineKeyboardArrowRight className="ml-1" size={25} />
              </a>
            </button>
          </div>
        </div>

        <div className="flex items-stretch justify-right">
          <img
            src={Profile}
            alt="my person"
            className="rounded-3xl mx-auto lg:w-3/4 md:w-80 h-full p-3 w-2/3"
          />
        </div>
        {/* className="rounded-3xl md:w-80 mx-auto h-auto md:w-1/2 lg:w-2/3 md:p-10 md:h-max sm:p-60 mx-auto" */}
      </div>
    </div>
  );
};

export default home;
