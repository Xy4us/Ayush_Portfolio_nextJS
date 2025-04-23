import Image from "next/image";
import React from "react";
import face from "../public/Face.png";

const Header = () => {
  const navLinks = [
    {
      name: "Portfolio",
      link: "/#portfolio",
    },
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center fixed top-0 left-0 h-[70px] z-50 bg-[#000000]">
      <div className="w-[75%] flex items-center justify-between ">
        {/* Name */}
        <div className="flex gap-3 ">
          {" "}
          <Image src={face} alt="" className="rounded-full w-[24px] h-[24px]" />
          <p className="font-bold">Ayush Kumar</p>
        </div>

        {/* Navigation */}
        <div>
          <ul className="flex gap-x-10">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  className="text-white hover:text-[#999999] duration-300 ease-in-out text-sm"
                  href={item.link}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
