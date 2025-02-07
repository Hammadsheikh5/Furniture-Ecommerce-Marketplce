"use client";
import { useCart } from "@/app/context/cardContext";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoStar, IoStarHalf } from "react-icons/io5";

interface ProductDetail {
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
  stockLevel: number;
  _id: string;
  sizes: string[];
  colors: string[];
}

interface ProductDetailComponentProps {
  product: ProductDetail;
}

const ProductDetailComponent: React.FC<ProductDetailComponentProps> = ({
  product,
}) => {
  const [quantity, setquantity] = useState<number>(1);
  const { addToCart, cart } = useCart(); // Get the `addToCart` function from CartContext
  const [selectedSize, setSelectedSize] = useState<string>(""); // State for selected size
  const [selectedColor, setSelectedColor] = useState<string>(""); // State for selected size
  const [isCartVisible, setCartVisible] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to the cart."); // Prompt user to select size
      return; // Prevent adding to the cart if no size is selected
    }
    if (!selectedColor) {
      alert("Please select a color before adding to the cart."); // Prompt user to select size
      return; // Prevent adding to the cart if no size is selected
    }
    if (product) {
      addToCart({
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
        _id: product._id,
        total: product.price * quantity,
        size: selectedSize,
        color: selectedColor,
      });
    } else {
      alert("Please select a size before adding to cart.");
    }
    setCartVisible(true);
  };

  return (
    <div className="product-div w-full max-w-[1536px] h-auto lg:h-[820px] mx-auto xl:py-8 px-4 sm:px-8 lg:px-16">
      <div className="h-auto w-full max-w-[1240px] mx-auto bg-white flex flex-col lg:flex-row items-center  justify-between gap-6 lg:gap-0">
        {/* Product Image */}
        <div className="picture-div h-auto w-full sm:w-[600px] lg:w-[550px]flex items-center justify-center ">
          <Image
            src={product.image}
            width={550}
            height={500}
            alt={product.name}
            className="object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="detail-div w-full lg:w-[600px] font-normal lg:pr-36 flex flex-col justify-between gap-4 p-4 sm:p-6">
          {/* Product Name and Price */}
          <p className="text-2xl sm:text-3xl lg:text-4xl">{product.name}</p>
          <p className="text-xl sm:text-2xl lg:text-2xl text-[#9F9F9F] font-medium">
            ${product.price}
          </p>
          <div className="flex items-center gap-5">
            {/* Stock Level */}
            <p
              className={`text-sm font-medium ${
                product.stockLevel > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.stockLevel > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <p>( {`${product.stockLevel} available`} )</p>
          </div>
          {/* Rating */}
          <div className="rating-div flex items-center gap-3">
            <div className="star-div flex justify-between items-center text-lg sm:text-xl text-yellow-300">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStarHalf />
            </div>
            <div className="border-l-2 border-[#9F9F9F] px-3 sm:px-5 text-[#9F9F9F] text-sm">
              5 Customers View
            </div>
          </div>

          {/* Product Description */}
          <p className="text-sm sm:text-base">{product.description}</p>

          {/* Size Options */}
          <div className="flex flex-col h-auto gap-2">
            <p className="text-sm text-[#9F9F9F]">Size</p>
            <div className="flex gap-2">
              {product.sizes.map((size, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedSize(size)} // Set selected size on click
                  className={`h-[30px] w-[30px] cursor-pointer flex items-center justify-center rounded-[5px] ${
                    selectedSize === size
                      ? "bg-[#FBEBB5]"
                      : "hover:bg-[#FBEBB5]"
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Color Options */}
          <div className="flex flex-col h-auto gap-2">
            <p className="text-sm text-[#9F9F9F]">Color</p>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedColor(color)} // Set selected color on click
                  style={{ backgroundColor: color }} // Set background color dynamically
                  className={`h-[30px] w-[30px] cursor-pointer flex items-center justify-center rounded-full border ${
                    selectedColor === color ? "border-black" : "border-gray-500"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex gap-4 items-center">
            <div className="h-[45px] w-[75px] md:h-[64px] md:w-[123px] flex justify-around items-center border-2 border-black rounded-[10px]">
              <button
                className="text-lg"
                onClick={() => {
                  setquantity(quantity + 1);
                }}
                disabled={product.stockLevel === 0}
              >
                +
              </button>
              <p className="text-base font-medium">{quantity}</p>
              <button
                className="text-lg"
                onClick={() => {
                  if (quantity != 1) {
                    setquantity(quantity - 1);
                  }
                }}
                disabled={product.stockLevel === 0}
              >
                -
              </button>
            </div>
            <button
              className="text-base sm:text-xl py-2 md:py-4 px-4 md:px-8 sm:px-10 rounded-[15px] border-black border-2 whitespace-nowrap"
              disabled={product.stockLevel === 0}
              onClick={handleAddToCart} // Add to cart functionality
            >
              {product.stockLevel > 0 ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>

          {/* Additional Information */}
          <hr className="my-4 text-[#D9D9D9]" />
          <div className="flex flex-col gap-2 text-[#9F9F9F] text-sm sm:text-base">
            <div className="flex gap-4">
              <p>SKU</p>
              <p>:</p>
              <p>SS001</p>
            </div>
            <div className="flex gap-4">
              <p>Category</p>
              <p>:</p>
              <p>{product.category}</p>
            </div>
            <div className="flex gap-4">
              <p>Tags</p>
              <p>:</p>
              <p>Sofa, Chair, Home, Shop</p>
            </div>
            <div className="flex gap-4 items-center">
              <p>Share</p>
              <p>:</p>
              <div className="flex items-center gap-4 text-black">
                <FaFacebook className="h-[20px] w-[20px]" />
                <FaLinkedin className="h-[20px] w-[20px]" />
                <AiFillTwitterCircle className="h-[25px] w-[25px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isCartVisible && (
        <div className="fixed top-0 right-0 h-[80vh] bg-white shadow-xl transition-transform duration-300 ease-in-out transform translate-x-0 w-[350px] md:w-[500px] lg:w-[550px] xl:w-[650px] ">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-bold text-black">Shopping Cart</h2>
            <button
              onClick={() => setCartVisible(false)}
              className="text-red-500 text-base sm:text-lg"
            >
              Close
            </button>
          </div>
          <div className="p-4 flex flex-col gap-4 h-[calc(100%-120px)]">
            {cart.length > 0 ? (
              <div className="flex-1 overflow-y-auto">
                {cart.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 mb-4">
                    <div className="aspect-square overflow-hidden flex justify-center items-center h-[60px] w-[80px] sm:h-[80px] sm:w-[100px]">
                      <Image
                        src={item.image}
                        width={111}
                        height={90}
                        alt={item.name}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-sm">Quantity: {item.quantity}</p>
                      <p className="text-sm">Subtotal: Rs. {item.total}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>Your cart is empty.</p>
            )}
            <div className="mt-auto flex justify-between">
              <Link href="/cart">
                <button className="bg-black text-white px-4 py-2 rounded">
                  View Cart
                </button>
              </Link>
              <Link href="/checkout">
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailComponent;
