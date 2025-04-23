import React from "react";
import FAQCard from "./FAQCard";
import { FAQS } from "@/utils/constants";

const FAQ = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-[200px] gap-9 ">
      {/* Heading */}
      <div className="rounded-4xl py-1 px-5 border-[#333333] border-2 bg-[#1e1e1e] text-white ">
        FAQ
      </div>

      {/* sub heading */}
      <h1 className="text-5xl font-sans ">
        <span className="text-[#999999]">Frequently Asked</span> Questions
      </h1>
      {/* FAQs */}
      <div className="w-[544px] flex items-center justify-center flex-col gap-3 mt-[30px]">
        {FAQS.map((item, index) => (
          <FAQCard key={index} {...item} />
        ))}
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center justify-center mt-[-10px] gap-1">
        <p className=" text-[#999999]">
          Did not find the answer you're looking for?
        </p>
        <p className="text-[#999999] ">
          Contact{" "}
          <a
            className="text-white hover:underline cursor-pointer "
            href="mailto:sanbhutnik@gmail.com"
          >
            sanbhutnik@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default FAQ;
