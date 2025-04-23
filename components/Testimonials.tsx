import Image from "next/image";
import React, { useEffect, useState } from "react";
import arrow from "../public/arrow.svg";
import Marquee from "react-fast-marquee";

import TestimonialsCard from "./TestimonialsCard";
import { TestimonialsContent } from "@/utils/constants";

const Testimonials = () => {
  return (
    <div className="w-full mt-[200px] flex items-center justify-center">
      <div className="w-[1280px] flex items-center justify-between">
        {/* Main heading */}
        <div className="w-[47%] flex flex-col items-start gap-7">
          {/* heading */}
          <div className="rounded-4xl py-1 px-5 border-[#333333] border-2 bg-[#1e1e1e] text-white ">
            Testimonials
          </div>

          {/* sub heading */}
          <h1 className="text-5xl font-sans w-[400px] ">
            <span className="text-[#999999]">See what</span> others say{" "}
            <span className="text-[#999999]">about me</span>
          </h1>

          {/* para */}
          <p className="text-[#999999] w-[87%]">
            I have helped many businesses make a killer design for their
            product. Wanna be the next?
          </p>

          {/* Email Me */}
          <div className="rounded-4xl py-4 px-7 border-[#333333] border-2 text-xl flex gap-3">
            Email me
            <Image alt="Arrow pointing to email link" src={arrow} />
          </div>
        </div>

        <div className="w-[52%] h-full">
          <div
            className="w-full flex items-center gap-6  "

            // Reset speed on mouse leave
          >
            <Marquee
              gradient={true}
              speed={40}
              gradientColor="#000000"
              gradientWidth={200}
            >
              {TestimonialsContent.map((item, index) => (
                <TestimonialsCard key={index} {...item} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
