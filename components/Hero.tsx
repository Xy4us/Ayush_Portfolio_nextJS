// import React from "react";
// import Image from "next/image";
// import arrow from "../public/arrow.svg";

// const Hero = () => {
//   return (
//     <div className="mt-[130px] flex flex-col items-center gap-y-20">
//       {/* Hello Heading */}
//       <div className="rounded-4xl py-1 px-5 border-[#333333] border-2 ">
//         {"Hello, I'm Ayush!"}
//       </div>
//       {/* Propper Heading */}
//       <div className="w-full items-center justify-center flex">
//         <h1 className="text-[#999999] text-8xl font-sans text-center w-[72%]">
//           <span className="text-[#ffffff]">Software Engineer</span> transforming
//           concepts into reality.
//         </h1>
//       </div>
//       {/* Email Me */}
//       <div className="rounded-4xl py-4 px-7  border-[#333333] border-2 text-xl ">
//         Email me
//         <Image alt="Arrow pointing to email link" src={arrow} />
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import arrow from "../public/arrow.svg";
import { slideInFromBottom } from "@/utils/motion";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const headings = [
    "Software Engineer",
    "Web Developer",
    "Problem Solver",
    "Creative Thinker",
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 3000); // Change heading every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={slideInFromBottom(0.25)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mt-[130px] flex flex-col items-center gap-y-20"
    >
      {/* Hello Heading */}
      <div
        className="rounded-4xl py-1 px-5 border-[#333333] border-2 bg-[#1e1e1e] flex gap-2"
        // style={{ perspective: 500 }}
      >
        {"Hello, I'm Ayush!"}
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: 20 }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {/* <i className="fa-solid fa-hand text-yellow-300"></i>*/} 🖐️
        </motion.span>
      </div>
      {/* Animated Heading */}
      <div className="w-full items-center justify-center flex flex-col">
        <h1 className=" text-8xl font-sans text-center w-[75%]">
          <AnimatePresence mode="wait">
            <motion.span
              key={headings[currentTextIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
              className="text-[#ffffff]"
            >
              {headings[currentTextIndex]}
            </motion.span>
          </AnimatePresence>{" "}
        </h1>
        <h1 className="text-8xl font-sans text-center w-[73%] text-[#999999]">
          converting concepts into reality.
        </h1>
      </div>
      {/* Email Me */}
      <div className="rounded-4xl py-4 px-7 border-[#333333] border-2 text-xl flex gap-3">
        Email me
        <Image alt="Arrow pointing to email link" src={arrow} />
      </div>
    </motion.div>
  );
};

export default Hero;
