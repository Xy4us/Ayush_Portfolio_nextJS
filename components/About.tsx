import Image from "next/image";
import React from "react";
import Me from "../public/Me2.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full flex items-center justify-center mt-[200px]"
    >
      <div className="w-[1280px] flex items-center justify-between">
        {/* image */}
        <div className="h-[540px] w-[37%] border-2 border-[#333333] rounded-3xl ">
          <Image src={Me} alt="" className="w-full h-full rounded-3xl" />
        </div>

        {/* text */}
        <div className="flex flex-col items-start w-[60%] gap-y-10">
          {/* heading */}
          <div className="rounded-4xl py-1 px-5 border-[#333333] border-2 bg-[#1e1e1e] text-white ">
            About
          </div>

          {/* sub heading */}
          <h1 className="text-5xl font-sans ">
            <span className="text-[#999999]">
              Computer Science Student Turned into a
            </span>{" "}
            Passionate Software Engineer.
          </h1>

          {/* para */}
          <p className="text-[#999999]">
            With a background in software engineering, I craft efficient and
            scalable solutions for web development. I blend clean code,
            intuitive design, and innovation to build modern, user-focused
            digital experiences that bring ideas to life.
          </p>

          {/* Showcase */}
          <div className="w-full flex">
            {/* 1st card */}
            <div className="w-[40%] flex flex-col items-start gap-y-5">
              {/* years of exp */}
              <div className="flex flex-col">
                <h1 className="text-[#999999]">Years of exp</h1>
                <p className="text-4xl font-bold">3+</p>
              </div>
              {/* Projects Completed */}
              <div className="flex flex-col ">
                <h1 className="text-[#999999]">Projects completed</h1>
                <p className="text-4xl font-bold">15+</p>
              </div>
            </div>

            {/* 2nd card */}
            <div className="w-[40%] flex flex-col items-start gap-y-5">
              {/* Clients */}
              <div className="flex flex-col">
                <h1 className="text-[#999999]">Clients</h1>
                <p className="text-4xl font-bold">10+</p>
              </div>
              {/* Hours*/}
              <div className="flex flex-col">
                <h1 className="text-[#999999]">Hours of Developing</h1>
                <p className="text-4xl font-bold">10,000+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
