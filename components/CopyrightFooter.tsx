import Image from "next/image";
import React from "react";
import face from "../public/face.png";

const CopyrightFooter = () => {
  const myWebsite = [
    {
      name: "Portfolio",
      link: "/#portfolio", // Use absolute paths with hash for sections
    },
    {
      name: "About",
      link: "/#about", // Use absolute paths with hash for sections
    },
    {
      name: "Contact Me",
      link: "/#contact", // Use absolute paths with hash for sections
    },
    {
      name: "Book a call",
    },
  ];

  const myLinks = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ayush-kumar-xy4us?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Github",
      link: "https://github.com/Xy4us",
    },
    {
      name: "Instagram",
      link: "http://www.instagram.com/xy4us",
    },
    {
      name: "Discord",
      link: "https://discord.com/users/xy4us",
    },
  ];

  return (
    <div className="mt-[80px] w-full flex flex-col items-center justify-center">
      {/* Upper Section */}
      <div className="w-[1180px] flex items-center justify-between">
        {/* left side */}
        <div className="flex flex-col gap-6 w-[169px]">
          {/* image & name */}
          <div className="flex gap-3 ">
            {" "}
            <Image
              src={face}
              alt=""
              className="rounded-full w-[24px] h-[24px]"
            />
            <p className="font-bold">Ayush Kumar</p>
          </div>
          {/* description */}
          <p className="text-[#999999] w-full text-sm">
            Software Engineer building scalable web solutions.
          </p>

          {/* email */}
          <a
            href="mailto:sanbhutnik@gmail.com"
            className="text-[#999999] text-sm hover:underline cursor-pointer hover:text-white duration-200 ease-in-out"
          >
            sanbhutnik@gmail.com
          </a>
        </div>

        {/* Right Sdie */}
        <div className="flex items-center justify-between w-[220px]">
          {/* left side */}
          <div className="flex flex-col gap-4">
            {myWebsite.map((item, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="text-[#999999] text-sm hover:underline cursor-pointer hover:text-white duration-200 ease-in-out"
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-4">
            {myLinks.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="text-[#999999] text-sm hover:underline cursor-pointer hover:text-white duration-200 ease-in-out"
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {/* border */}
      <div className="w-[1180px] border-[#1a1a1a] border-1  mt-[60px]  "></div>

      {/* copyright */}
      <div className="w-[1180px] flex items-center justify-between mt-[30px]">
        <div className="text-[#999999] text-sm  flex items-center">
          <p>© 2023 Ayush Kumar. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-10">
          <p className="text-white text-sm">
            <span className="text-[#999999] ">Designed & Created by</span> Ayush
            Kumar
          </p>

          <p className="text-sm text-white">
            <span className="text-[#999999]">Built in</span> Next.Js
          </p>
        </div>
      </div>

      <div className=" w-[1180px] flex items-center justify-center mb-[60px]">
        <p
          className="uppercase w-full text-[165px] tracking-wide bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(51, 51, 51) 0%, rgb(153, 153, 153) 100%)",
          }}
        >
          Ayush Kumar
        </p>
      </div>
    </div>
  );
};

export default CopyrightFooter;
