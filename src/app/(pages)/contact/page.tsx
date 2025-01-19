import Banner from "@/components/banner";
import ContactForm from "@/components/contactForm";
import Footer2 from "@/components/footer2";
import Header from "@/components/header";
import React from "react";
import { MdAccessTimeFilled, MdLocationPin, MdPhone } from "react-icons/md";

export default function ContactPage() {

  return (
    <div className="font-poppins text-black bg-white">
      <Header/>
      <Banner title="Contact" />
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 xl:px-[191px] py-[50px] lg:h-[1144px]">
        <div className="text-center mb-10">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-5">
            Get In Touch With Us
          </p>
          <p className="text-sm sm:text-base font-normal text-[#9F9F9F]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us <br className="hidden md:block" />
            An Email. Our Staff Always Be There To Help You Out. Do Not
            Hesitate!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
          {/* Contact Details */}
          <div className="w-full lg:w-[393px] lg:h-[537px] flex flex-col justify-between items-start py-4 md:py-16 gap-2">

            <div className="flex gap-6 ">
              <MdLocationPin className="w-[25px] sm:w-[30px] h-[25px] sm:h-[30px]" />
              <div className="flex flex-col w-[212px]">
                <p className="text-lg sm:text-2xl font-medium">Address</p>
                <p className="text-sm sm:text-base font-normal">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex gap-6 ">
              <MdPhone className="w-[25px] sm:w-[30px] h-[25px] sm:h-[30px]" />
              <div className="flex flex-col">
                <p className="text-lg sm:text-2xl font-medium">Phone</p>
                <p className="text-sm sm:text-base font-normal">
                  +1 (234) 567-890
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <MdAccessTimeFilled className="w-[25px] sm:w-[30px] h-[25px] sm:h-[30px]" />
              <div className="flex flex-col">
                <p className="text-lg sm:text-2xl font-medium">Working Time</p>
                <p className="text-sm sm:text-base font-normal">
                  Monday to Friday: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
          <ContactForm/>
          
        </div>
      </div>
      <Footer2/>
    </div>
  );
}
