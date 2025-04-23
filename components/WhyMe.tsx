import { WhyMeCardText } from "@/utils/constants";
import React from "react";
import WhyMyCard from "./WhyMyCard";
import Image from "next/image";
import arrow from "../public/arrow.svg";

const WhyMe = () => {
  return (
    <div className="w-full flex items-center justify-center mt-[200px]">
      <div className="w-[1280px] flex flex-col items-center gap-8">
        {/* heading */}
        <div className="rounded-4xl py-1 px-5 border-[#333333] border-2 bg-[#1e1e1e] text-white z-0">
          Why Me?
        </div>

        {/* sub heading */}
        <h1 className="text-5xl font-sans ">
          I'll help <span className="text-[#999999]">your project</span> shine
        </h1>

        {/* cards */}
        <div className="w-full items-center flex justify-between">
          {WhyMeCardText.map((item, index) => (
            <WhyMyCard key={index} {...item} />
          ))}
        </div>

        {/* Contact Me */}
        <div className="rounded-4xl py-4 px-7 border-[#333333] border-2 text-xl flex gap-3">
          Email me
          <Image alt="Arrow pointing to email link" src={arrow} />
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
