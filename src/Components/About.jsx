import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#1e1e1e] text-[#fefefe]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline  text-[#1D94D4] border-b-4 border-cyan-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold">
            <p>
              Hello! I'm Shiva Shrestha, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I am a graphic designer, front-end developer and an aspiring Data scientist from Nepal. I love to craft responsive
              and interactive websites where technology meets creativity.  I am
              currently studying Electronics, Communication and Information
              Engineering in IOE, Paschimanchal Campus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
