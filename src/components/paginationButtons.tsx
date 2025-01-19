import React from "react";

export default function PaginationButtons() {
  return (
    <div>
      <div className="next-container my-24">
        <div className="flex justify-between items-center h-[50px] w-[300px] lg:h-[60px] lg:w-[392px] ">
          <div className="flex justify-center items-center h-[50px] w-[50px] lg:h-[60px] lg:w-[60px] bg-[#FFF9E5] text-base sm:text-lg lg:text-xl  rounded-[10px] hover:bg-[#FBEBB5] hover:cursor-pointer">
            1
          </div>
          <div className="flex justify-center items-center h-[50px] w-[50px] lg:h-[60px] lg:w-[60px] bg-[#FFF9E5] text-base sm:text-lg lg:text-xl  rounded-[10px] hover:bg-[#FBEBB5] hover:cursor-pointer">
            2
          </div>
          <div className="flex justify-center items-center h-[50px] w-[50px] lg:h-[60px] lg:w-[60px] bg-[#FFF9E5] text-base sm:text-lg lg:text-xl  rounded-[10px] hover:bg-[#FBEBB5] hover:cursor-pointer">
            3
          </div>
          <div className="flex justify-center items-center h-[50px] w-[75px] lg:h-[60px] lg:w-[98px] bg-[#FFF9E5] text-base sm:text-lg lg:text-xl  rounded-[10px] hover:bg-[#FBEBB5] hover:cursor-pointer">
            NEXT
          </div>
        </div>
      </div>
    </div>
  );
}
