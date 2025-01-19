import Link from "next/link";
import React from "react";

export default function Social() {
  return (
    <div className="font-poppins text-black ">
      <div
        className="w-full max-w-[1536px] mx-auto flex items-center justify-center h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[450px]"
        style={{
          backgroundImage: "url('/background/our-instagram-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[90%] max-w-[454px] flex flex-col justify-between items-center text-center">
          <div className="flex flex-col justify-between items-center gap-5">
            <p className="font-bold text-2xl sm:text-[36px] lg:text-[48px] xl:text-[60px]">
              Our Instagram
            </p>
            <p className="font-normal text-sm sm:text-sm lg:text-lg xl:text-xl">
              Follow our store on Instagram
            </p>
          </div>
          <div className="w-[150px] sm:w[250px] lg:w-[255px] h-[40px] sm:h-[50px] lg:h-[56px] xl:h-[64px] bg-[#FAF4F4] flex justify-center items-center rounded-full font-normal text-sm lg:text-lg xl:text-xl mt-4 shadow-md">
            <Link
              href={"https://www.instagram.com/sheikh_zada23/"}
              target="_blank"
            >
              Follow Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
