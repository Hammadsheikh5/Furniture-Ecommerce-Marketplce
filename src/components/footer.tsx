import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="footer font-poppins bg-white text-black">
      <div className="group46 bottom-0 w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 bg-white bg-fixed">

        <div className="group45 flex flex-col justify-between items-start mt-8 sm:mt-16 lg:mt-[100px] ">
          {/* Content Section */}
          <div className="group32 flex flex-col xl:flex-row justify-between items-start w-full h-auto xl:h-[312px] gap-8 xl:gap-0">
            <p className="font-normal text-base text-[#9F9F9F] text-center xl:text-left w-full xl:w-[300px] ">
              400 University Drive Suite 200 Coral <br />
              Gables, <br />
              FL 33134 USA
            </p>

            <div className="group31 flex flex-col xl:flex-row justify-between w-full xl:w-[712px] items-start gap-8">
              {/* Links Section */}
              <div className="group28 flex justify-between text-base font-medium gap-8 w-full xl:w-[352px]">
                <div className="group26">
                  <ul className="flex flex-col gap-4 sm:gap-6 lg:gap-12">
                    <li className="font-medium text-[#9F9F9F]">Links</li>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/shop"}>Shop</Link></li>
                    <li><Link href={"/blogs"}>About</Link></li>
                    <li><Link href={"/contact"}>Contact</Link></li>
                  </ul>
                </div>
                <div className="group27">
                  <ul className="flex flex-col gap-6 sm:gap-6 lg:gap-12">
                    <li className="font-medium text-[#9F9F9F]">Help</li>
                    <li>Payment Option</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                  </ul>
                </div>
              </div>

              {/* Newsletter Section */}
              <div className="group30 flex flex-col items-start gap-4 sm:gap-6">
                <p className="font-medium text-base text-[#9F9F9F]">Newsletter</p>
                <form className="group29 flex flex-col sm:flex-row gap-4 items-center">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="text-[#9F9F9F] text-sm px-4 py-2 border border-[#9F9F9F] rounded focus:outline-none focus:ring-2 focus:ring-[#9F9F9F]"
                    required
                  />
                  <button
                    type="submit"
                    className="text-sm px-4 py-2 bg-[#9F9F9F] text-white rounded hover:bg-[#7F7F7F] transition"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              </div>

            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="group44 w-full font-normal text-sm sm:text-base mt-8 ">
            <hr />
            <p className="mt-8 mb-8 text-left">
              2022 Meubel House. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
