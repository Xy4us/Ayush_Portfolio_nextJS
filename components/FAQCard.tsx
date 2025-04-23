"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface FAQCardProps {
  question: string;
  answer: string;
}

const FAQCard: React.FC<FAQCardProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="w-full border-2 border-[#333333] rounded-xl px-3 pt-2   cursor-pointer bg-[#0e0e0e]"
      onClick={() => setIsOpen(!isOpen)} // Toggle the accordion state
    >
      {/* Header */}
      <div className="w-full flex items-center justify-between gap-x-2">
        <p className="text-lg font-medium">{question}</p>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }} // Rotate the arrow
          transition={{ duration: 0.3 }}
        >
          <div>
            <i className="fa-solid fa-angle-down"></i>
          </div>{" "}
          {/* Replace with an arrow icon if needed */}
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ height: 0, opacity: 0, paddingBottom: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          paddingBottom: isOpen ? "0.5rem" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden mt-4 text-[#999999]"
      >
        <p>{answer}</p>
      </motion.div>
    </motion.div>
  );
};

export default FAQCard;
