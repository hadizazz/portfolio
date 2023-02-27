import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-max">
      <div className="shadow dark:bg-[#DBE2EF] flex flex-wrap justify-center md:w-max mx-auto h-full  mb-20 p-autp">
        <div className="flex py-20 px-3 text-start">
          <div className="lg:py-16 lg:px-20 md:p-14 p-5 border-r-2 border-gray-600">
            <p className="text-4xl font-bold inline border-b-4 border-white-200">
              Contact
            </p>
            <p className="py-6">
              If you have any question don't hesitate to ask me
            </p>
            <div className="pt-2">
              <p className="text-lg pt-1 mb-2 flex">
                <HiOutlineMail className="mr-3" size={30} />
                contact.hadizacahyaf@gmail.com
              </p>
            </div>
            <div className="pt-2">
              <p className="text-lg pt-1 mb-2 flex">
                <FaInstagram className="mr-3" size={30} />
                @hadizazzz
              </p>
            </div>
            <div className="pt-2">
              <p className="text-lg pt-1 mb-2 flex">
                <GrLocation className="mr-3" size={30} />
                Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>

        <div className="lg:py-16 lg:px-20 mt-20">
          <form
            action="https://getform.io/f/2fe01e7d-485b-41fc-9200-a4a3b5365788"
            method="POST"
            className="flex flex-col w-96 p-2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-black rounded-md focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 border-black rounded-md focus:outline-none"
              required
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 border-black rounded-md focus:outline-none"
            ></textarea>
            <button className="shadow dark:bg-[#112D4E] text-white px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
