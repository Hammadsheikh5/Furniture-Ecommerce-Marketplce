"use client";
import { useCart } from "@/app/context/cardContext";
import { FavoriteContext } from "@/app/context/favContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { CiShoppingCart, CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";

export default function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const { favorites } = useContext(FavoriteContext);

  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  // Total number of favorite items
  const totalFavorites = favorites.length;

  return (
    <div className="font-poppins text-black relative">
      {/* Header Container */}
      <div className="bg-[#FBEBB5] w-full max-w-[1536px] mx-auto py-6 px-4 sm:px-8 flex justify-between items-center">
        {/* Hamburger Menu for Small Screens */}
        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Navigation Menu (Desktop Version) */}
        <div className="hidden sm:flex gap-12 flex-1 justify-center items-center">
          <ul className="flex flex-row items-center text-base font-medium text-center gap-12">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/blogs">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-6 sm:gap-8 text-[24px] sm:text-[28px] sm:pr-20">
          <Link href="/myAccount">
            <CiUser />
          </Link>
          <Link href="#">
            <CiSearch />
          </Link>
          <Link href="/favourite" className="relative">
            <CiHeart />
            {totalFavorites > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalFavorites}
              </span>
            )}
          </Link>
          <Link href="/cart" className="relative">
            <CiShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-[#FBEBB5] z-50 shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 left-4 text-black text-2xl"
        >
          <FiX />
        </button>
        <ul className="flex flex-col items-center gap-6 mt-16 text-lg font-medium">
          <li>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/blogs" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay when Menu is Open */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
        ></div>
      )}
    </div>
  );
}
