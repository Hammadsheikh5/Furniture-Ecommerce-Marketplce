"use client";

import { useCart } from "@/app/context/cardContext";
import ActionLink from "@/components/actionLink";
import Banner from "@/components/banner";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdDelete } from "react-icons/md";

export default function CartPage() {
  const { cart, clearCart ,deleteCartItem} = useCart();
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <div className="font-poppins text-black bg-white">
      <Header />
      <Banner title="Cart" />
      <div className="w-full max-w-[1536px] mx-auto h-auto ">
        {cart.length === 0 ? (
          <div className="p-5 sm:p-10 flex items-center justify-center gap-5">
            <p className="text-center text-lg sm:text-xl font-medium">
              Your cart is empty!
            </p>
            <ActionLink name="Shop Now" href="/shop" />
          </div>
        ) : (
          <div className="px-2 sm:px-12 lg:px-[100px] py-6 sm:py-8 lg:py-[70px] flex flex-col xl:flex-row justify-between items-start gap-6 lg:gap-2">
            {/* Product Section */}
            <div className="w-full xl:w-[817px] ">
              <table className="w-full ">
                <thead>
                  <tr className="bg-[#FFF9E5] h-[55px]">
                    <th className="text-sm sm:text-base font-medium px-4 lg:px-4 sm:py-2">
                      Product
                    </th>
                    <th className="text-sm sm:text-base font-medium px-4 lg:px-4 py-2 ">
                      Price
                    </th>
                    <th className="text-sm sm:text-base font-medium px-4 lg:px-4 py-2">
                      Quantity
                    </th>
                    <th className="text-sm sm:text-base font-medium px-4 lg:px-4 py-2">
                      Subtotal
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr className="w-full h-[106px]" key={index}>
                      <td className="flex  items-center justify-start gap-4 px-4 py-4">
                        <div className="h-[60px] w-[60px] sm:h-[106px] sm:w-[106px] rounded-[10px] overflow-hidden">
                          <Image
                            src={item.image}
                            width={112}
                            height={92}
                            alt={item.name}
                            className="object-cover w-full h-full"
                          />
                        </div>

                        <p className="text-xs sm:text-base text-[#9F9F9F]">
                          {item.name}
                        </p>
                      </td>
                      <td className="text-sm sm:text-base md:text-lg text-[#9F9F9F]">
                        ${item.price}
                      </td>
                      <td className="text-[#9F9F9F] pl-4 sm:pl-8 md:pl-16">
                        <div className="h-[28px] w-[28px] sm:h-[32px] sm:w-[32px] flex justify-center items-center border-2 rounded-[5px] border-solid border-[#9F9F9F] text-sm sm:text-base md:text-lg">
                          {item.quantity}
                        </div>
                      </td>
                      <td className="text-[#9F9F9F] text-sm sm:text-base md:text-lg md:ml-20">
                        ${item.price * item.quantity}
                      </td>
                      <td className="">
                        <button
                          onClick={() => {
                            deleteCartItem(item._id);
                          }}
                        >
                          <MdDelete className="text-[24px] sm:text-[28px] text-[#FBEBB5]" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-6 ">
                <button
                  className="bg-red-500 text-white px-3 py-1 sm:px-6 sm:py-2 text-sm sm:text-base rounded-lg hover:bg-red-600"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Cart Totals Section */}
            <div className="w-full sm:max-w-none h-[230px] xl:w-[390px] xl:h-[390px] bg-[#FFF9E5] px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 flex flex-col items-center justify-between">
              <div className="font-medium text-lg sm:text-xl lg:text-[26px] xl:text-[36px]">
                Cart Totals
              </div>
              <div className="flex gap-6 sm:gap-8 items-center">
                <p className="text-sm sm:text-lg font-medium">Subtotal</p>
                <p className="text-sm sm:text-base font-normal text-[#9F9F9F]">
                  ${calculateTotal()}
                </p>
              </div>
              <div className="flex gap-6 sm:gap-8 items-center">
                <p className="text-sm sm:text-lg font-medium">Total</p>
                <p className="text-lg sm:text-xl xl:text-2xl font-medium text-[#B88E2F]">
                  ${calculateTotal()}
                </p>
              </div>
              <Link href={"/checkout"}>
                <div className="h-[40px] sm:h-[50px] lg:h-[58px] w-[140px] sm:w-[180px] lg:w-[222px] text-sm sm:text-lg lg:text-xl font-normal border-2 border-black flex justify-center items-center rounded-[15px] hover:bg-[#ffefce]">
                  <button>Check Out</button>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
