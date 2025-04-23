import { CareerText } from "@/utils/constants";
import React from "react";
import CareerCard from "./CareerCard";

const Career = () => {
  return (
    <div className="w-full flex items-center justify-center mt-[150px]">
      <div className="w-[1280px] flex items-start flex-col gap-7">
        {/* Career Heading */}
        <div className="rounded-4xl py-1 px-5 border-[#333333] border-2 bg-[#1e1e1e] text-white ">
          Career
        </div>

        {/* sub heading */}
        <h1 className="text-5xl font-sans ">
          <span className="text-[#999999]">And This Is</span> My Career
        </h1>

        {/* Card Container */}
        <div className="w-full flex flex-col gap-8 mt-[70px]">
          {/* @ts-ignore */}
          {CareerText.map((item, index) => (
            <CareerCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
