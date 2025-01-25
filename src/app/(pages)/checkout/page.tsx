"use client";

import { useCart } from "@/app/context/cardContext";
import Banner from "@/components/banner";
import Header from "@/components/header";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";

interface CustomerInfo {
  firstName: string;
  secondName: string;
  country: string;
  address: string;
  city: string;
  province: string;
  zipCode: string;
  phone: string;
  email: string;
}

export default function CheckoutPage() {
  const { cart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [deliveryCharges, setDeliveryCharges] = useState<number>(0);

  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: "",
    secondName: "",
    country: "",
    address: "",
    city: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPayment = e.target.value;
    setPaymentMethod(selectedPayment);
    setDeliveryCharges(50); // Set delivery charges for both payment methods
  };

  const handleCheckout = (event: React.FormEvent) => {
    event.preventDefault();
    const isFormComplete = Object.values(customerInfo).every((value) => value);
    if (!isFormComplete || !paymentMethod) {
      alert("Please complete all required fields and select a payment method.");
      return;
    }
    const subtotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    console.log(customerInfo);
    console.log(cart);
    console.log(`Your Total : ${grandTotal}`)
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const grandTotal = subtotal + deliveryCharges;

  return (
    <div className="text-black font-poppins bg-white">
      <Header />
      <Banner title="Checkout" />
      <form>
        <div className="w-full max-w-[1536px] mx-auto h-auto p-8  flex flex-col md:flex-row gap-8  ">
          <div className="flex w-full md:w-1/2 h-auto flex-col sm:py-5 sm:px-5 xl:px-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold  md:mb-6">
              Billing details
            </h2>
            <div className="flex flex-wrap gap-2  sm:gap-3">
              {/* First Name */}
              <div className="w-full lg:w-[48%]">
                <label className="block mb-1 my-2 sm:my-5">First Name</label>
                <input
                  name="firstName"
                  value={customerInfo.firstName}
                  onChange={handleInputChange}
                  required
                  type="text"
                  className="w-full px-2 h-[50px] lg:h-[75px] border border-[#9F9F9F]  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:mt-5"
                />
              </div>

              {/* Last Name */}
              <div className="w-full lg:w-[48%]">
                <label className="block mb-1 my-2 sm:my-5">Last Name</label>
                <input
                  required
                  name="secondName"
                  value={customerInfo.secondName}
                  onChange={handleInputChange}
                  type="text"
                  className="w-full px-2 h-[50px] lg:h-[75px]  border border-[#9F9F9F]  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:mt-5"
                />
              </div>

              {/* Company Name */}
              <div className="w-full">
                <label className="block mb-1 my-2 sm:my-5">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  className="w-full  px-2 h-[50px] lg:h-[75px] border border-[#9F9F9F]  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:mt-5"
                />
              </div>

              {/* Country/Region */}
              <div className="w-full">
                <label className="block mb-1 my-2 sm:my-5">
                  Country / Region
                </label>
                <select
                  name="country"
                  value={customerInfo.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-2 h-[50px] lg:h-[75px] border border-[#9F9F9F] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:mt-5"
                >
                  <option value="" disabled>
                    Select a country
                  </option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Oman">Oman</option>
                </select>
              </div>

              {/* Street Address */}
              <div className="w-full">
                <label className="block mb-1 my-2 sm:my-5">
                  Street Address
                </label>
                <input
                  required
                  name="address"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  type="text"
                  className="w-full px-2 h-[50px] lg:h-[75px]  border border-[#9F9F9F]  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:mt-5"
                />
              </div>

              {/* Town/City */}
              <div className="w-full">
                <label className="block mb-1 my-2 sm:my-5">Town / City</label>
                <input
                  required
                  name="city"
                  value={customerInfo.city}
                  onChange={handleInputChange}
                  type="text"
                  className="w-full px-2 h-[50px] lg:h-[75px]  border border-[#9F9F9F] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:mt-5"
                />
              </div>
              {/* Province */}
              <div className="w-full">
                <label className="block mb-1 my-2 sm:my-5">Province</label>
                <select
                  value={customerInfo.province}
                  onChange={handleInputChange}
                  name="province"
                  required
                  className="w-full px-2 h-[50px] lg:h-[75px] border border-[#9F9F9F] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:mt-5"
                >
                  <option value="" disabled>
                    Select a province
                  </option>
                  <option value="Sindh">Sindh</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Balochistan">Balochistan</option>
                </select>
              </div>

              {/* ZIP Code */}
              <div className="w-full">
                <label className="block mb-1 my-2 sm:my-5">Zip Code</label>
                <input
                  required
                  name="zipCode"
                  value={customerInfo.zipCode}
                  onChange={handleInputChange}
                  type="number"
                  className="w-full  px-2 h-[50px] lg:h-[75px]  border border-[#9F9F9F] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:mt-5"
                />
              </div>

              {/* Phone */}
              <div className="w-full">
                <label className="block mb-1 my-2 sm:my-5">Phone</label>
                <input
                  required
                  name="phone"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  type="number"
                  className="w-full  px-2 h-[50px] lg:h-[75px]  border border-[#9F9F9F]  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 lg:mt-5"
                />
              </div>

              {/* Email */}
              <div className="w-full">
                <label className="block mb-1 my-2 sm:my-5">Email Address</label>
                <input
                  required
                  name="email"
                  value={customerInfo.email}
                  onChange={handleInputChange}
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
            </div>
          </div>

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
                  <span>
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 ">
              <span>Subtotal</span>
              <span>
                ${" "}
                {cart
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span>${" "}{deliveryCharges.toLocaleString()}</span>
            </div>
            <div className="flex justify-between border-b-2 mt-2 pb-6">
              <span>Total</span>
              <span className="text-xl font-bold text-[#B88E2F]">
                ${" "}
                {grandTotal.toLocaleString()}
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
                <input
                  type="radio"
                  name="payment"
                  value="Direct Bank Transfer"
                  onChange={handlePaymentChange}
                  className="mr-2"
                  required
                />
                Direct Bank Transfer
              </label>
            </div>
            <div className="mb-4 text-[#9F9F9F]">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  onChange={handlePaymentChange}
                  className="mr-2"
                  required
                />
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
              <button
                type="submit"
                onClick={handleCheckout}
                className=" w-1/2 py-3 text-xl text-center border-2 border-black rounded-xl hover:bg-[#ffefce]"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
