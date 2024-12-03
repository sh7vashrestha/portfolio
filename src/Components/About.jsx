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
               Hi,I have recently completed my undergraduate at <a
                                            href="https://ioepas.edu.np/" target="_blank">Tribhuvan University,
                                            Institute of Engineering (IOE), Pashchimanchal Campus</a> where I earned a
                                        Bachelor's degree in Electronics, Communication and Information Engineering
                                        under the guidance of <a
                                            href="https://www.researchgate.net/profile/Smita-Adhikari-2"
                                            target="_blank" className="text-[#1D94D4] hover:text-[#82c4fe] duration-100">Asst. Prof. Smita Adhikari. </a>
                                            During my time at university, I worked on various embedded systems projects, with a focus on automation and machine learning.</p>
                                            <br />

                                    <p>I'm also honored to have worked with CTO <a
                                            href="https://www.linkedin.com/in/bhattaprashant00/" className="text-[#1D94D4] hover:text-[#82c4fe] duration-100" target="_blank"
                                            >Er. Prashant Bhatta</a> and Embedded System Engineer <a
                                            href="https://www.linkedin.com/in/amrit-aryal/" className="text-[#1D94D4] hover:text-[#82c4fe] duration-100" target="_blank"
                                            >Er. Amrit Aryal </a>at <a
                                            href="https://yarsa.tech/" className="text-[#1D94D4] hover:text-[#82c4fe] duration-100" target="_blank"
                                            >Yarsa Tech </a>
                                            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
