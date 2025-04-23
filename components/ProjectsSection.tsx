"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import ProjectsCard from "./ProjectsCard";
import { RootState } from "../utils/store";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";

const ProjectsSection: React.FC = () => {
  const projects = useSelector(
    // @ts-ignore
    (state: RootState) => state?.projects?.projects?.projects
  );

  // Access projects from Redux store
  // const projects = useSelector((state) => state.projects);

  const [showAll, setShowAll] = useState(false); // State to toggle between showing 4 projects and all projects

  const displayedProjects = showAll ? projects : projects?.slice(0, 4);

  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <div
      id="portfolio"
      className="w-full flex flex-col gap-y-[70px] items-center mt-[50px]  bg-[#000000] "
    >
      {/* heading */}
      <div className="rounded-4xl py-1 px-5 border-[#333333] border-2 bg-[#1e1e1e] text-white z-20">
        Portfolio
      </div>

      {/* Sub heading */}
      <motion.h1
        ref={ref}
        variants={slideInFromBottom(0.25)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="z-[30] text-5xl text-[#999999]"
      >
        My Latest <span className="text-white">Projects</span>
      </motion.h1>

      {/* Cards */}
      <div className="w-[90%] flex items-center justify-center">
        <div className="w-[70%] flex-wrap flex items-center justify-between gap-y-6">
          {/* @ts-ignore */}
          {displayedProjects?.map((item, index) => (
            <ProjectsCard key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Show More Button */}
      {projects?.length > 4 && (
        <button
          onClick={() => setShowAll(!showAll)} // Toggle between showing all projects and the first 4
          className="mt-6 px-6 py-2 bg-[#1e1e1e] text-white rounded-lg border-2 border-[#333333] hover:bg-[#333333] transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default ProjectsSection;
