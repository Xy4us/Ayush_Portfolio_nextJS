"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCursorType } from "../utils/cursorSlice";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import projectsPic from "../public/flower.png";
import { useRouter } from "next/navigation";

interface ProjectsCardProps {
  name: string; // Define the type of the name prop
  id: string;
  env: { key: string; comment: string }[];
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ name, id, env }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [hasHovered, setHasHovered] = useState(false);

  const handleMouseEnter = () => {
    dispatch(setCursorType("explore")); // Change cursor to "explore"
  };

  const handleMouseLeave = () => {
    dispatch(setCursorType("default")); // Reset cursor to default
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const handleCardClick = () => {
    router.push(`/project/${id}`); // Navigate to the dynamic project details page
  };

  // Format the name
  const formatName = (name: string) => {
    return name
      .replace(/-/g, " ") // Replace all "-" with a space
      .split(" ") // Split the name into words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
      .join(" "); // Join the words back together
  };

  return (
    <motion.div
      ref={ref}
      variants={slideInFromBottom(0.25)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      onClick={handleCardClick}
      className="h-[400px]  w-[49%] cursor-pointer"
    >
      <div
        onMouseEnter={() => {
          handleMouseEnter();
          setHasHovered(true); // Trigger animation only once
        }}
        onMouseLeave={() => {
          handleMouseLeave();
          setHasHovered(false); // Reset animation state
        }}
        className="rounded-3xl border-[#333333] border-2 min-h-[90%] bg-[#0e0e0e] w-full flex items-center justify-center group"
      >
        <motion.div
          className="h-[150px] w-[150px]"
          initial={{ scale: 1, rotate: 0, opacity: 1 }}
          animate={hasHovered ? { scale: 0, rotate: 360, opacity: 0 } : {}} // Animate only once
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            className="h-full w-full"
            src={
              env?.find((item) => item.key === "BG_IMAGE")?.comment ||
              "/default-bg.png" // Fallback to a default image
            }
            width={150} // Explicitly set the width
            height={150} // Explicitly set the height
            alt="project"
          />
        </motion.div>
      </div>
      <div className="text-white mt-3 text-2xl font-sans">
        {formatName(name)}
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
