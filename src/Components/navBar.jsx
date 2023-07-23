import React from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import resume from "../assets/resume.pdf"
import { Link } from "react-scroll";
function NavBar({ nav, handelClick }) {
  // const [nav, setNav] = useState(false);
  // const handelClick = () => {
  //   setNav(!nav);
  // };

  return (
    <div className="fixed w-full h-[85px] flex justify-between items-center px-4 bg-[#1E1E1E] text-[#f4f4f4] z-1">
      <div>
        <span>
          <Link to="home" smooth={true} duration={500}>
            <img
              className="hover:animate-[pulse_2s_ease-in-out_infinite]  cursor-pointer"
              src="./assets/logo.png"
              alt="Logo"
              style={{ width: "60px", zIndex: "12", position: "relative" }}
            />
          </Link>
        </span>
      </div>
      {/* Menu */}

      <ul className="hidden md:flex">
        <li className="sm:px-4 md:px-6">
          <Link activeClass="active" activeStyle={{color:"#1D94D4"}} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="sm:px-4 md:px-6">
          <Link activeClass="active" activeStyle={{color:"#1D94D4"}} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="sm:px-4 md:px-6">
          <Link activeClass="active" activeStyle={{color:"#1D94D4"}} to="skills" smooth={true} duration={500}>
            My Skills
          </Link>
        </li>
        <li className="sm:px-4 md:px-6">
          <Link activeClass="active" activeStyle={{color:"#1D94D4"}} isDynamic to="projects" offset={50} smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className="sm:px-4 md:px-6">
          <Link activeClass="active" activeStyle={{color:"#1D94D4"}} to="blogs" smooth={true} duration={500}>
            Blogs
          </Link>
        </li>
        <li className="sm:px-4 md:px-6">
          <Link activeClass="active" activeStyle={{color:"#1D94D4"}} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handelClick} className="md:hidden z-10">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile Menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#1E1E1E] flex flex-col justify-center items-center z-5"
        }>
        <li className="py-6 text-4xl">
          <Link activeClass="active" activeStyle={{color:"#1D94D4"}} onClick={handelClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link activeClass="active" activeStyle={{color:"#1D94D4"}} onClick={handelClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link activeClass="active" activeStyle={{color:"#1D94D4"}} onClick={handelClick} to="skills" smooth={true} duration={500}>
            My Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link activeClass="active" activeStyle={{color:"#1D94D4"}} onClick={handelClick} isDynamic to="projects" offset={50} smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link activeClass="active" activeStyle={{color:"#1D94D4"}} onClick={handelClick} to="blogs" smooth={true} duration={500}>
            Blogs
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link activeClass="active" activeStyle={{color:"#1D94D4"}} onClick={handelClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div
        className={
          !nav
            ? "hidden md:flex fixed flex-col top-[35%] left-0"
            : "flex fixed flex-col top-[35%] left-0"
        }>
        <ul>
          <li className="w-[150px] h-[50px] flex justify-between items- ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]">
            <a
              className="flex justify-between items-center w-full text-[#f3f3f3]"
              href="https://www.linkedin.com/in/sh7va/"
              target="_blank"
              rel="noreferrer">
              LinkedIn
              <FaLinkedin size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items- ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1DA1F2]">
            <a
              className="flex justify-between items-center w-full text-[#f3f3f3]"
              href="https://twitter.com/Shivashrestha92"
              target="_blank"
              rel="noreferrer">
              Twitter
              <FaTwitter size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items- ml-[-100px] hover:ml-[-10px] duration-300 bg-[#111]">
            <a
              className="flex justify-between items-center w-full text-[#f3f3f3]"
              href="https://github.com/sh7vashrestha"
              target="_blank"
              rel="noreferrer">
              GitHub
              <FaGithub size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items- ml-[-100px] hover:ml-[-10px] duration-300 bg-[#b99566]">
            <a
              className="flex justify-between items-center w-full text-[#f3f3f3]"
              href={resume}
              download="resume"
              rel="noreferrer">
              Resume
              <BsPersonLinesFill size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
