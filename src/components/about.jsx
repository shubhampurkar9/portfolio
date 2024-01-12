import React from 'react';

const About = () => {
    return (
      <div name="about" className="w-full md:py-48 py-20 bg-gradient-to-r from-[#0e0e0f] to-[#092140] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="pb-8 pl-12">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
            <div className="sm:text-center text-3xl font-bold">
              <p>
                Hi, I'm Shubham, nice to meet you. Please take a look around
              </p>
            </div>
            <div>
              <p>
                Passionate about creating forward-thinking solutions to address
                tomorrow's productivity challenges. I like to take
                responsibility to craft aesthetic user experience using modern
                frontend architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;