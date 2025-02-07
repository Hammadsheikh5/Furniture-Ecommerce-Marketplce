import { LuClock4 } from "react-icons/lu";
import { AiTwotoneCalendar } from "react-icons/ai";
import Image from "next/image";
import ActionLink from "./actionLink";

function OurBlogs() {
  return (
    <>
      <div className="my-[20px] w-full">
        {/* Main Heading and description */}
        <p className="text-center text-[36px] mt-[20px]">Our Blogs</p>
        <p className="text-center text-[#9F9F9F] text-[16px] my-[20px]">
          Find a bright ideal to suit your taste with our great selection
        </p>

        {/*Blogs*/}

        <div className=" w-full h-auto flex flex-wrap px-4 md:px-10 justify-center gap-[20px]">
          {/*Blog 1*/}
          <div className="w-[393px] h-auto md:h-[555px]">
            <Image src="/blog/pic 1.jpg" alt="" width={393} height={393} />
            <div className="py-[20px]">
              <p className="text-[20px] py-[10px] text-center">
                Going all-in with millennial design
              </p>
              <div className="flex justify-center items-center ">

              <ActionLink name="Read More" href="/blogs"/>
              </div>
            </div>
            <div className="flex gap-[20px]  justify-center">
              <div className="flex gap-[7px] items-center">
                <LuClock4 className="text-2xl" />
                <p>5 min </p>
              </div>
              <div className="flex gap-[7px] items-center">
                <AiTwotoneCalendar className="text-2xl" />
                <p className="text-base">
                  12<span className="align-super text-xs">th</span> Oct 2022
                </p>
              </div>
            </div>
          </div>
          {/*Blog 2*/}
          <div className="w-[393px] h-auto md:h-[555px]">
            <Image src="/blog/pic 2.jpg" alt="" width={393} height={393} />
            <div className="py-[20px]">
              <p className="text-[20px] py-[10px] text-center">
                Going all-in with millennial design
              </p>
              <div className="flex justify-center items-center ">

              <ActionLink name="Read More" href="/blogs"/>
              </div>
            </div>
            <div className="flex gap-[20px]  justify-center">
              <div className="flex gap-[7px] items-center">
                <LuClock4 className="text-2xl" />
                <p>5 min </p>
              </div>
              <div className="flex gap-[7px] items-center">
                <AiTwotoneCalendar className="text-2xl" />
                <p className="text-base">
                  12<span className="align-super text-xs">th</span> Oct 2022
                </p>
              </div>
            </div>
          </div>
          {/*Blog 3*/}
          <div className="w-[393px] h-auto md:h-[555px]">
            <Image src="/blog/pic 3.jpg" alt="" width={393} height={393} />
            <div className="py-[20px]">
              <p className="text-[20px] py-[10px] text-center">
                Going all-in with millennial design
              </p>
              <div className="flex justify-center items-center ">

              <ActionLink name="Read More" href="/blogs"/>
              </div>
            </div>
            <div className="flex gap-[20px]  justify-center">
              <div className="flex gap-[7px] items-center">
                <LuClock4 className="text-2xl" />
                <p>5 min </p>
              </div>
              <div className="flex gap-[7px] items-center">
                <AiTwotoneCalendar className="text-2xl" />
                <p className="text-base">
                  12<span className="align-super text-xs">th</span> Oct 2022
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*view more link*/}
        <div className="flex justify-center items-center pt-2">
        <ActionLink name="View Post" href="/blogs"/>
        </div>

      </div>
    </>
  );
}

export default OurBlogs;