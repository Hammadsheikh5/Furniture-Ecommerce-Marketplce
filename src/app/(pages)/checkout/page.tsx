'use client'

import { useCart } from "@/app/context/cardContext";
import Banner from "@/components/banner";
import Header from "@/components/header";
import React from "react";
import { GoDotFill } from "react-icons/go";

export default function CheckoutPage() {
    const { cart} = useCart();
  
  return (
    <div  className="text-black font-poppins bg-white">
      <Header />
      <Banner title="Checkout" />
      <div className="w-full max-w-[1536px] mx-auto h-auto p-8  flex flex-col md:flex-row gap-8  ">
        <div className="flex w-full md:w-1/2 h-auto flex-col sm:py-5 sm:px-5 xl:px-12">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold  md:mb-6">Billing details</h2>
          <form className="flex flex-wrap gap-2  sm:gap-3">
            {/* First Name */}
            <div className="w-full lg:w-[48%]">
              <label className="block mb-1 my-2 sm:my-5">First Name</label>
              <input
                type="text"
                className="w-full px-2 h-[50px] lg:h-[75px] border border-[#9F9F9F]  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:mt-5"
              />
            </div>

            {/* Last Name */}
            <div className="w-full lg:w-[48%]">
              <label className="block mb-1 my-2 sm:my-5">Last Name</label>
              <input
                type="text"
                className="w-full px-2 h-[50px] lg:h-[75px]  border border-[#9F9F9F]  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:mt-5"
              />
            </div>

            {/* Company Name */}
            <div className="w-full">
              <label className="block mb-1 my-2 sm:my-5">Company Name (Optional)</label>
              <input
                type="password"
                className="w-full  px-2 h-[50px] lg:h-[75px] border border-[#9F9F9F]  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:mt-5"
              />
            </div>

            {/* Country/Region */}
            <div className="w-full">
              <label className="block mb-1 my-2 sm:my-5">Country / Region</label>
              <select className="w-full px-2 h-[50px] lg:h-[75px]  border border-[#9F9F9F]  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:mt-5">
                <option>Pakistan</option>
              </select>
            </div>

            {/* Street Address */}
            <div className="w-full">
              <label className="block mb-1 my-2 sm:my-5">Street Address</label>
              <input
                type="text"
                className="w-full px-2 h-[50px] lg:h-[75px]  border border-[#9F9F9F]  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:mt-5"
              />
            </div>

            {/* Town/City */}
            <div className="w-full">
              <label className="block mb-1 my-2 sm:my-5">Town / City</label>
              <input
                type="text"
                className="w-full px-2 h-[50px] lg:h-[75px]  border border-[#9F9F9F] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:mt-5"
              />
            </div>
            {/* Province */}
            <div className="w-full">
              <label className="block mb-1 my-2 sm:my-5">Province</label>
              <select className="w-full px-2 h-[50px] lg:h-[75px]  border border-[#9F9F9F]  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:mt-5">
                <option>Select Province</option>
                <option>Sindh</option>
                <option>Punjab</option>
                <option>Balochistan</option>
              </select>
            </div>

            {/* ZIP Code */}
            <div className="w-full">
              <label className="block mb-1 my-2 sm:my-5">Zip Code</label>
              <input
                type="number"
                className="w-full  px-2 h-[50px] lg:h-[75px]  border border-[#9F9F9F] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:mt-5"
              />
            </div>

            {/* Phone */}
            <div className="w-full">
              <label className="block mb-1 my-2 sm:my-5">Phone</label>
              <input
                type="number"
                className="w-full  px-2 h-[50px] lg:h-[75px]  border border-[#9F9F9F]  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:mt-5"
              />
            </div>

            {/* Email */}
            <div className="w-full">
              <label className="block mb-1 my-2 sm:my-5">Email Address</label>
              <input
                type="email"
                className="w-full  px-2 h-[50px] lg:h-[75px]  border border-[#9F9F9F] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:mt-5"
              />
            </div>

            {/* Additional Notes */}
            <div className="w-full">
              <label className="block mb-1 my-2 sm:my-5">
                <input
                  placeholder="Additional Information"
                  className="w-full px-2 h-[50px] lg:h-[75px]  border border-[#9F9F9F] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:mt-5"
                />
              </label>
            </div>
          </form>
        </div>

        {/* Order Summary Section */}
        {/* Order Summary Section */}
        <div className="w-full md:w-1/2 px-6 py-10">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold mb-4">Product</h2>
            <h2 className="text-2xl font-semibold mb-4">Subtotal</h2>
          </div>

          <div className="flex flex-col   gap-4 border-b-2 pb-4">
            {cart.map((item) => (
              <div key={item._id} className="flex justify-between  ">
                <span className="w-1/2">
                  {item.name}{" "}
                  <span className="text-gray-500">x {item.quantity}</span>
                </span>
                <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 ">
            <span>Subtotal</span>
            <span>
              Rs.{" "}
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between border-b-2 mt-2 pb-6">
            <span>Total</span>
            <span className="text-xl font-bold text-[#B88E2F]">
              Rs.{" "}
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xl mt-4">
            <span className="text-4xl">
              <GoDotFill />
            </span>{" "}
            Direct Bank Transfer
          </div>
          <p className="text-[#9F9F9F] my-4">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>

          {/*Direct Bank transfer Details */}

          <div className="mb-4 text-[#9F9F9F]">
            <label className="flex items-center">
              <input type="radio" name="payment" className="mr-2 bg-black" />
              Direct Bank Transfer
            </label>
          </div>

          <div className="mb-4 text-[#9F9F9F]">
            <label className="flex items-center">
              <input type="radio" name="payment" className="mr-2" />
              Cash on Delivery
            </label>
          </div>
          <p className="my-4">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-semibold">privacy policy.</span>
          </p>
          <div className="w-full flex items-center justify-center my-7  ">
            {/*Place order button */}
            <button className=" w-1/2 py-3 text-xl text-center border-2 border-black rounded-xl hover:bg-blue-600">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
