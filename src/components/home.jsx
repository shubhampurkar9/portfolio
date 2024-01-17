import React from "react";
import { HiArrowNarrowRight} from "react-icons/hi"
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
      <div
        name="home"
        className="w-full h-screen bg-gradient-to-r from-[#0e0e0f] to-[#092140]"
      >
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
		    <h2 className="text-4xl sm:text-7xl mt-2 font-bold text-[#ccd6f6]">Hi,<span className="wave">👋</span></h2>
		
          <h1 className="text-4xl sm:text-7xl mt-2 font-bold text-[#ccd6f6]">
            I am Shubham Purkar
          </h1>
          <h3 className="text-2xl sm:text-5xl mt-1 py-2 font-bold text-[#54b4e7]">
			
            <Typewriter
              options={{
                strings: [
                  `Front End Developer.`
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h3>
          <p className="text-[#8892b0] py-4 pt-11 max-w-[700px] ">
            Specialized in building exceptional digital experiences. Currently,
            I'm focused on building responsive front end web applications.
          </p>
          <div>
            <button
              onClick={() => {
                window.open(require("../assets/files/Shubham-Resume.pdf"));
              }}
              className="text-white border-2 group px-6 py-3 mt-4 flex items-center hover:bg-pink-600 hover:border-pink-600 "
            >
              Download Resume
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Home;
