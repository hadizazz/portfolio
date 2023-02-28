import React from "react";
import Cuciin from "../assets/images/cuciin.png";
import Lostinfound from "../assets/images/lostandfound.png";
import Kolektive from "../assets/images/kolektive.png";
import Actionfigure from "../assets/images/actionfigure.png";
import Cigition from "../assets/images/cigition.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Projects = () => {
  const project = [
    {
      id: 1,
      src: Cuciin,
      title: "Cuciin",
      caption:
        "Cuciin is a website-based platform for laundry services that is needed to make it easier for customers to do laundry without having to come.",
      tools: "Laravel, PHP",
      href: "https://github.com/bagasapk/cuciin.git",
    },
    {
      id: 2,
      src: Lostinfound,
      title: "Lost And Found",
      caption:
        "Lost and Found is a website-based platform for lost items for Unpad students and academics to help each other if someone is looking for or reporting finding lost items under certain conditions.",
      tools: "ReactJS, CSS",
      href: "https://github.com/hadizazz/Lost-and-Found.git",
    },
    {
      id: 3,
      src: Kolektive,
      title: "Kolektive",
      caption:
        "Kolektive is a website intended to collect donations. The donation is intended for the organization of the event. Users can be organizers or donors. This website is built with ReactJs framework and Laravel with agile methods.",
      tools: "ReactJS, Bootstrap",
      href: "https://github.com/hadizazz/Kolektive-fe.git",
    },
    {
      id: 4,
      src: Actionfigure,
      title: "Action Figure",
      caption: "Action Figure is an e-commerce designed to sell action figures",
      tools: "ReactJS, NodeJS, Bootstrap",
      href: "https://github.com/hadizazz/ActionFigure-Ecommerce.git",
    },
    {
      id: 5,
      src: Cigition,
      title: "Cigition",
      caption:
        "Cigarette Identification is a website that is intended to fulfill my final assignment as a student at Padjadjaran University. This website is used to detect the activity of someone who is smoking or not by real-time testing and image input. Built using a Convolutional Neural Network with the MobileNetV2 architectural model and Flask as the microframework.",
      tools: "Tensorflow, Flask",
      href: "https://github.com/hadizazz/Cig-detection.git",
    },
  ];

  return (
    <div name="projects" className=" md:h-max lg:h-max">
      <div className=" max-w-screen-xl gap-8 mx-auto">
        <div className=" text-start mx-20">
          <p className="text-4xl font-bold inline border-b-4 pt-4">Projects</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className=" p-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:px-0 mb-20 h-auto m-10">
          {project.map(({ id, src, title, caption, tools, href }) => (
            <div
              key={id}
              className="border border-gray-200 rounded-lg shadow bg-[#f4f4f9] border-[#b8dbd9]"
            >
              <div>
                <img
                  className="rounded-t-lg object-cover duration-200 hover:scale-105 h-82 md:w-96"
                  src={src}
                  alt=""
                />

                <div className="pt-2 md:h-72 h-auto">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    {title}
                  </h5>
                  <p className="mb-3 font-normal px-3 text-justify">
                    {caption}
                  </p>
                  <p className="mb-3 font-normal px-3 text-justify">
                    Tools: {tools}
                  </p>
                </div>
              </div>
              <div className="text-center px-2">
                <a
                  href={href}
                  target="_blank"
                  className="group px-6 py-2 my-2 flex items-center justify-center rounded-md dark:bg-[#112D4E] text-white cursor-pointer"
                >
                  See Projects
                  <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight className="ml-1" size={25} />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
