import React from "react";

interface WhyMyCardProps {
  icon: string;
  heading: string;
  para: string; // paragraph text
}

const WhyMyCard: React.FC<WhyMyCardProps> = ({ icon, heading, para }) => {
  return (
    <div className="bg-[#0e0e0e] w-[32%] h-[284px] flex items-start justify-center flex-col px-7 rounded-2xl gap-4 border-[#1f1f1f] border-2">
      {/* icon */}
      <div className="bg-[#1e1e1e] flex items-center justify-center border-2 w-[48px] h-[48px] border-[#333333] rounded-xl">
        <i className={`${icon} `}></i>
      </div>
      <p className="text-xl font-semibold">{heading}</p>
      <p className="text-[#999999]">{para}</p>
    </div>
  );
};

export default WhyMyCard;
