"use client";
import { useCart } from "@/app/context/cardContext";
import Image from "next/image";
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
  const { addToCart } = useCart(); // Get the `addToCart` function from CartContext
  const [selectedSize, setSelectedSize] = useState<string>(""); // State for selected size
  const [selectedColor, setSelectedColor] = useState<string>(""); // State for selected size

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
        total: product.price*quantity,
        size: selectedSize,
        color: selectedColor,
      });
    } else {
      alert("Please select a size before adding to cart.");
    }
  };

  return (
    <div className="product-div w-full max-w-[1536px] h-auto lg:h-[820px] mx-auto xl:py-8 px-4 sm:px-8 lg:px-16">
      <div className="h-auto w-full max-w-[1240px] mx-auto bg-white flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-0">
        {/* Product Image */}
        <div className="picture-div h-[300px] sm:h-[400px] lg:h-[500px] w-full sm:w-[600px] lg:w-[550px]flex items-center justify-center ">
          <Image
            src={product.image}
            width={550}
            height={500}
            alt={product.name}
            className="object-contain xl:w-[550px] xl:h-[500px]"
          />
        </div>

        {/* Product Details */}
        <div className="detail-div w-full lg:w-[600px] font-normal lg:pr-36 flex flex-col justify-between gap-4 p-4 sm:p-6">
          {/* Product Name and Price */}
          <p className="text-2xl sm:text-3xl lg:text-4xl">{product.name}</p>
          <p className="text-xl sm:text-2xl lg:text-2xl text-[#9F9F9F] font-medium">
            ${product.price}
          </p>
          {/* Stock Level */}
          <p
            className={`text-sm font-medium ${
              product.stockLevel > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.stockLevel > 0 ? "In Stock" : "Out of Stock"}
          </p>
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
          <p className="text-sm sm:text-base">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>

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
    </div>
  );
};

export default ProductDetailComponent;
