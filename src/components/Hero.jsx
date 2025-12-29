import React from "react";

import { LuSearch } from "react-icons/lu";

const Hero = () => {
  return (
    <div className="main_section flex flex-col justify-center items-center text-white  my-auto h-[calc(100vh-350px)]">
      <h1 className="text-4xl md:text-6xl font-bold text-center leading-[130%] mt-26 md:mt-0">
        Make Your Interior More <span className="hidden sm:block"></span>
        Minimalistic & Modern
      </h1>

      <p className="text-center mt-4">
        Turn your room with panto into a lot more minimalist{" "}
        <span className="hidden sm:block"></span> and modern with ease and speed
      </p>
      <div className="mt-8 relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search furniture"
          className="w-full pl-4 pr-12 py-2 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
        />

        <button className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 bg-[#E58411] rounded-full text-white cursor-pointer hover:bg-[#cf7510] transition">
          <LuSearch />
        </button>
      </div>
    </div>
  );
};

export default Hero;
