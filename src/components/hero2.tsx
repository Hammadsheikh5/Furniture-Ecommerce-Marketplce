import { client } from "@/sanity/lib/client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    "image": image.asset->url 
  }`;
  return await client.fetch(query, { id });
};

export default async function Hero() {
  // Fetch both product details using their IDs
  const productIds = [
    "04a0309b-fcaf-4415-aaff-4bea144448d1", 
    "zX8EyenPWCyB4cuV5jO8qn"
  ];

  const products: SingleProduct[] = await Promise.all(
    productIds.map((id) => getProductById(id))
  );

  // Handle case if no products found
  if (products.some((product) => !product)) {
    return (
      <div className="p-5">
        <h1 className="text-2xl">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="font-poppins text-black">
      {/* Double Product Section */}
      <div className="w-full max-w-[1536px] mx-auto h-auto flex  lg:h-[900px] py-8 xl:h-[672px] bg-[#FAF4F4] flex-col lg:flex-row justify-end items-center px-10 xl:px-20">
        {/* Left Product (Side Table) */}
        <div className="w-full lg:w-1/2 h-auto flex flex-col items-center px-10">
          <div className="w-[300px] h-[300px] lg:h-[300px] lg:w-[400px]">
            <Image
              src={products[0].image}
              alt={products[0].name}
              width={380}
              height={300}
              className="w-[400px] h-[300px] lg:h-[300px] lg:w-[400px]"
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-7 w-full text-left mt-6">
            <p className="font-medium text-2xl md:text-3xl xl:text-4xl">{products[0].name}</p>
            <Link href={`/shop/${products[0]._id}`}>
              <button className="text-[24px] underline underline-offset-[16px] font-medium">
                View more
              </button>
            </Link>
          </div>
        </div>

        {/* Right Product (Sofa) */}
        <div className="w-full lg:w-1/2 h-auto flex flex-col items-center px-10">
          <div className="w-[300px] h-[300px] lg:h-[300px] lg:w-[400px]">
            <Image
              src={products[1].image}
              alt={products[1].name}
              width={380}
              height={300}
              className="w-[400px] h-[300px] lg:h-[300px] lg:w-[400px]"
            />
          </div>
          <div className="w-full flex flex-col text-left gap-2 md:gap-7 mt-6">
            <p className="font-medium text-2xl md:text-3xl xl:text-4xl">{products[1].name}</p>
            <Link href={`/shop/${products[1]._id}`}>
              <button className="text-[24px] underline underline-offset-[16px] font-medium">
                View more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
