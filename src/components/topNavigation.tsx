import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function TopNavigation(props:{productName:string}) {
  return (
    <div>
      <div className=" navigation-div bg-white w-full max-w-[1536px] mx-auto h-[100px] flex items-center justify-center sm:justify-start px-5 sm:px-[100px]">
        <div className="gap-2 sm:gap-4 text-sm sm:text-base font-normal flex items-center">
          <p className="text-[#9F9F9F]">
            <Link href={"/"}>Home</Link>
          </p>
          <MdKeyboardArrowRight className="text-2xl sm:text-3xl " />
          <p className="text-[#9F9F9F]">
            <Link href={"/shop"}>Shop</Link>
          </p>
          <MdKeyboardArrowRight className="text-2xl sm:text-3xl" />
          <div className=" border-l-2 border-[#9F9F9F] pl-2 sm:px-8 ">
            {props.productName}
          </div>
        </div>
      </div>
    </div>
  );
}
