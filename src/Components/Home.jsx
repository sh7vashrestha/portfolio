import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-[100vh] bg-[#1e1e1e]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-5 flex flex-col justify-center items-center h-full md:flex-row">
        <div className="flex flex-col flex-1 justify-center max-h-[50%]">
          <p className="text-[#f3f3f3]">Hi, I am</p>
          <h2 className="text-3xl inline sm:text-5xl font-bold text-[#1D94D4]">
            Shiva Shrestha
          </h2>
          <h3 className="text-3xl sm:text-2xl font-semibold text-[#8892b0]">
            I'm a UI and front-end developer
          </h3>
          <p className="text-[#8892b0] text-justify py-3 max-w-[700px]">
            I am a web designer and aspiring data scientist from Nepal. I am
            currently studying Engineering in IOE, Paschimanchal Campus.
          </p>
          <div>
            <Link
              to="projects"
              offset={50}
              smooth={true}
              duration={800}>
              <button className=" text-[#f3f3f3] group border-2 px-6 py-3 my-2 flex items-center hover:bg-gradient-to-r from-[#1D94D4] to-cyan-900 hover:border-[#1D94D4]">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-1 " />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center max-h-[30%]">
          <img
            src="./assets/myPhoto.png"
            alt="shiva-shrestha"
            className="h-auto w-[60%] sm:w-[50%] md:w-[70%] mx-auto rounded-full shadow-[#fefefe] dark:shadow-gray-800"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
