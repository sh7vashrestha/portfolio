import React from "react";
import { blogData } from "../data/data";

function Blog() {
  return (
    <div
      name="blogs"
      className="w-full min-h-[100vh] text-[#f3f3f3] bg-[#1e1e1e]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#1D94D4] border-[#1D94D4]">
            Blogs
          </p>
          <p className="pt-5 pb-6">
            The following are some blogs that I have written.
          </p>
        </div>
        {/* Blogs Crousel */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-7">
          {blogData.map((item, index) => (
            <div
              key={index}
              className="bg-[#272727] shadow-lg shadow-[#040c16] rounded-lg group container p-4 flex justify-center text-center items-center mx-auto hover:bg-[#333] hover:scale-105 duration-500">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="py-4">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#1D94D4]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
