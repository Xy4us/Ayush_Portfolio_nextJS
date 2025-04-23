import React from "react";
import footer from "../public/footerBg.png";
import Image from "next/image";
import arrow from "../public/arrow.svg";

const Contact = () => {
  return (
    <div
      id="contact"
      className="mt-[70px] w-full relative flex flex-col items-center justify-center "
    >
      <div className=" bg-gradient-to-b from-[#000000] via-[#000000d3] to-[#000000] min-h-[700px] absolute top-0 w-full z-20"></div>
      <Image alt="" src={footer} className="w-full h-[700px]" />

      {/* overlapping div  */}
      <div className="z-40 absolute top-0 w-full flex flex-col items-center justify-center min-h-full gap-y-10">
        {/* heading */}
        <div className="rounded-4xl py-1 px-5 border-[#333333] border-2 bg-[#1e1e1e] text-white ">
          Contact
        </div>

        {/* sub heading */}
        <h1 className="text-5xl font-sans ">
          <span className="text-[#999999]">Let's Get in</span> Touch
        </h1>

        {/* para */}
        <p className="text-[#999999]">
          Let's connect and start with your project ASAP.
        </p>

        {/* button */}
        <div className="rounded-4xl py-4 px-7 border-[#333333] border-2 text-xl flex gap-3">
          Email me
          <Image alt="Arrow pointing to email link" src={arrow} />
        </div>

        {/* Email */}
        <p className="text-[#999999]">
          Or email{" "}
          <a
            href="mailto:sanbhutnik@gmail.com"
            className="cursor-pointer hover:underline text-white"
          >
            sanbhutnik@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
