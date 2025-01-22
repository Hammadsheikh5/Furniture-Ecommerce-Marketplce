'use client'

import { FavoriteContext } from "@/app/context/favContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface ProductCardProps {
  _id: string;
  name: string;
  image: string;
  price: number;
}

interface FavoriteItem {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  _id,
  name,
  image,
  price,
}) => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoriteContext);

  // Check if the product is in the favorites list
  const isFavorite = favorites.some((favorite) => favorite._id === _id);

  const handleFavoriteClick = () => {
    const product: FavoriteItem = {
      _id,
      name,
      price,
      image,
    };

    if (isFavorite) {
      removeFromFavorites(_id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div key={_id} className="group15 flex flex-col items-start">
      <div className="image-div mx-auto w-[200px] h-[150px] md:h-[180px] md:w-[300px] flex justify-center items-center aspect-square overflow-hidden rounded-md">
        <Link href={`/shop/${_id}`}>
          <Image
            src={image}
            width={287}
            height={287}
            alt={name}
            className="object-cover"
            quality={75} // Compress image
            loading="lazy" // Lazy load
          />
        </Link>
      </div>

      <div className="h-[71px] w-[194px] md:w-[250px] flex flex-col justify-center gap-2 mt-1 mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-sm md:text-base lg:text-base xl:text-base font-normal pt-1">
            {name}
          </p>
          <button onClick={handleFavoriteClick} className="text-xl">
            {isFavorite ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart />
            )}
          </button>
        </div>
        <p className="text-md md:text-lg lg:text-2xl xl:text-2xl font-medium">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
