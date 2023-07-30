import React from "react";
import { quotes } from "../data/data";
function Footer() {
  const currentYear = new Date().getFullYear();
  const i = Math.floor(Math.random() * (5 - 0))
  return (
    <div className="footer text-xs sm:text-base bg-[#1e1e1e] py-5 flex group justify-center items-center min-w-full cursor-pointer">
      <div className="group-hover:hidden  duration-1000 ease-in-out m-auto">
        &copy;{currentYear} Shiva Shrestha. All rights reserved.
      </div>
      <div className="hidden group-hover:flex group-hover:scale-110 duration-1000 ease-in-out">
       {quotes[i]}
      </div>
    </div>
  );
}

export default Footer;
