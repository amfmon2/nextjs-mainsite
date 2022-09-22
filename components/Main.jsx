import React from "react";
import Slide from 'react-awesome-reveal'
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Main = () => {
  return (
    <div id='home' className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
            <p className="uppercase text-sm tracking-widest text-gray-600">LET'S BUILD SOMETHING TOGETHER</p>
            <Slide>
                <h1 className="py-4 text-gray-700">Hi, I'm <span className="text-[#5651e5]">Raymond</span></h1>
            </Slide>
            
            <h1 className="py-2 text-gray-700">A Full-Stack Developer</h1>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                I'm a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive front-end web applications while creating casual back-end technologies.
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-100">
                    <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-100">
                    <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-100">
                    <FaTwitter />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
