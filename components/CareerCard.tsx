import React from "react";

interface CareerCardProps {
  heading: string; // Define the type of the name prop
  time: string;
  para: string;
}

const CareerCard: React.FC<CareerCardProps> = ({ heading, time, para }) => {
  return (
    <div className="w-full border-b-2 border-[#1b1b1b] flex items-start justify-between pb-12">
      {/* heading & time */}
      <div className="flex gap-8 items-center w-[47%]">
        <h1 className="font-semibold text-xl">{heading}</h1>
        <p className="text-[#999999] font-semibold text-lg">{time}</p>
      </div>

      {/* para */}
      <div className="w-[47%] text-[#999999] font-medium leading-5">
        <p>{para}</p>
      </div>
    </div>
  );
};

export default CareerCard;
