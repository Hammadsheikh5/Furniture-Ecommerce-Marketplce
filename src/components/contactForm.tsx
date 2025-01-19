import React from "react";

export default function ContactForm() {
  return (
      
      <div className="w-full lg:w-[635px] ">
        <form className="mx-auto lg:h-[937px]">
          {/* Name Field */}
          <div className="mb-10 max-w-[530px]">
            <label
              htmlFor="name"
              className="block text-sm sm:text-base font-medium mb-4 lg:mb-8"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full h-[48px] lg:h-[75px] px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-10 max-w-[530px]">
            <label
              htmlFor="email"
              className="block text-sm sm:text-base  font-medium mb-4 lg:mb-8"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full h-[48px] lg:h-[75px] px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email address"
            />
          </div>

          {/* Subject Field */}
          <div className="mb-10 max-w-[530px]">
            <label
              htmlFor="subject"
              className="block text-sm sm:text-base  font-medium mb-4 lg:mb-8"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full h-[48px] lg:h-[75px] px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the subject"
            />
          </div>

          {/* Message Field */}
          <div className="mb-10 max-w-[530px]">
            <label
              htmlFor="message"
              className="block text-sm sm:text-base  font-medium mb-4 lg:mb-8"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full h-[160px] px-6 py-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center ">
            <button
              type="submit"
              className="w-[150px] h-[35px] lg:w-[237px] lg:h-[48px]  text-black text-base font-medium border border-black rounded-[15px] mx-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

  );
}
