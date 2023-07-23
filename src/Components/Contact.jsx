import React from "react";

function Contact() {
  return (
    <div name="contact" className="w-full h-[100vh] bg-[#1e1e1e] text-[#fefefe] m-auto">
      <div className="flex flex-col justify-center items-center w-full min-h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-10">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline  text-[#1D94D4] border-b-4 border-cyan-600">
              Say Hello!
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-sm sm:text-md p-auto">
            <p>
              Do you have some big ideas and need help bringing them to
              fruition? Then please reach out, I would love to hear more about
              you, your project and how I can help! Submit the form below or
              send me an email at 
            </p>
            <p className="text-[#1D94D4] text-base">contact@shivashrestha7.com.np</p>
          </div>
          <div>
            <form
              method="POST"
              action="https://getform.io/f/5557d374-4155-49d3-9941-0263d7408821"
              className="flex flex-col max-w-[1000px] w-full">
              <div className="block">
                <div>
                  <input
                    className="bg-[#444] p-2 w-full"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div>
                  <input
                    className="mt-4 p-2 bg-[#444] w-full"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div>
                  <input
                    className="my-4 p-2 bg-[#444] w-full"
                    type="text"
                    placeholder="Subject"
                    name="subject"
                  />
                </div>
                <div>
                  <textarea
                    className="bg-[#444] p-2 w-full"
                    name="message"
                    rows="5"
                    placeholder="Message"></textarea>
                </div>
                <div>
                  <button className="text-white border-2 hover:bg-[#1D94D4] hover:border-[#1D94D4] shadow-lg shadow-[#040c16] duration-500 rounded-xl px-8 py-3 my-8 w mx-auto flex items-center">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
