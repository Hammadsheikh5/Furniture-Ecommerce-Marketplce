import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface SingleProduct {
  _id: string;
  image: string;
  name: string;
  price: number;
}

const getProductById = async (id: string) => {
  const query = `*[_type == "product" && _id == $id][0] { 
    _id,
      name,
      price,
      description,
      "image": image.asset->url 
    }`;

  return await client.fetch(query, { id });
};

export default async function AsgardSofa() {
  const productId = "93735b12-8dd2-438b-bbf0-0ada5d899da6";
  const product: SingleProduct = await getProductById(productId);
  if (!product) {
    return (
      <div className="p-5">
        <h1 className="text-2xl">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="font-poppins text-black">
      <div className="group23 bg-[#FFF9E5] w-full max-w-[1536px] mx-auto h-[450px] flex flex-col lg:flex-row justify-center lg:justify-around items-center  sm:h-[500px] lg:h-[639px] ">
        <div className="image-div w-[90%]  sm:w-auto relative bottom-3 right-5 sm:bottom-0 sm:right-0 lg:bottom-3 lg:right-5">
          <Image
            src={product.image}
            width={900}
            height={620}
            alt={product.name}
            className="object-cover w-[350px] h-[250px] sm:w-[350px] sm:h-[250px] lg:w-[600px] lg:h-[400px] xl:w-[900px] xl:h-[620px]"
          />
        </div>

        <div className="w-[250px] h-[160px] flex flex-col justify-between items-center sm:w-[280px] sm:h-[180px] lg:w-[331px] lg:h-[205px]">
          <div className="flex flex-col justify-between items-center">
            <p className="text-lg font-medium sm:text-xl lg:text-2xl">
              New Arrivals
            </p>

            <p className="text-[30px] font-bold sm:text-[36px] lg:text-[48px]">
              {product.name}
            </p>
          </div>
          <div className="h-[45px] w-[180px] text-base font-normal border-2 border-black border-solid flex justify-center items-center sm:text-lg  lg:text-xl sm:h-[50px] sm:w-[200px] lg:h-[64px] lg:w-[255px]">
            <button>
              <Link href={`/shop/${product._id}`}>Order Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
