import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  _id: string;
  name: string;
  image: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ _id, name, image, price }) => {
  return (
    <Link href={""} key={_id}>
      <div className="group15 flex flex-col items-center">
        <div className="image-div h-[300px] w-[300px] flex justify-center items-center aspect-square overflow-hidden rounded-md">
          <Image
            src={image}
            width={287}
            height={287}
            alt={name}
            className="object-cover"
          />
        </div>
        <div className="h-[71px] w-[194px] flex flex-col justify-between">
          <p className="text-sm md:text-base lg:text-base xl:text-base font-normal">
            {name}
          </p>
          <p className="text-md md:text-lg lg:text-2xl xl:text-2xl font-medium">
            ${price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
