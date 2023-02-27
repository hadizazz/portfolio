import React from "react";

const about = () => {
  return (
    <div name="about" className="w-full py-60 bg-[#f4f4f9]">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-justify">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 dark:border-gray-500 ">
            About
          </p>
        </div>
        <p className="text-xl mt-4">
          As a Software Engineer, I am also proficient in several programming
          languages such as Javascript with React.JS framework. Confident
          communicator, strategic thinker, and innovative creator to develop
          software that is customized to meet organizational needs.
        </p>
        <br />
        <p className="text-xl">
          I'm passionate about building excellent software that improves the
          lives of those around me. I specialize in creating software for
          clients ranging from individuals and small-businesses all the way to
          large enterprise corporations. What would you do if you had a software
          expert available at your fingertips?
        </p>
      </div>
    </div>
  );
};

export default about;
