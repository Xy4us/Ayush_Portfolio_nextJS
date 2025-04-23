import Image from "next/image";
import React from "react";

interface TestimonialsCardProps {
  name: string;
  avatar: string; // avatar image

  role: string; // paragraph text
  para: string;
}

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({
  para,
  name,
  avatar,
  role,
}) => {
  return (
    <div className="w-[380px] flex flex-col items-start justify-between p-4 border-2 border-[#333333] rounded-2xl mx-5 h-[250px] bg-[#0e0e0e] ">
      <p className="w-[97%] text-[#999999] text-justify">{para}</p>
      <div className="w-full flex items-start flex-col gap-2">
        <div className="flex items-center  gap-3">
          <Image
            alt="ava"
            className="w-[40px] h-[40px] rounded-full bg-white"
            src={avatar}
          />
          <p className="font-bold text-xl font-sans">{name}</p>
        </div>
        <p className="text-[#999999] text-md font-semibold pl-11">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
