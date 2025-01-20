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
  const productId = "d982ff7a-6648-4dce-a795-06ad8fadca7c";
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
      {/* Single Product  */}
      <div className="bg-[#FBEBB5] w-full max-w-[1536px] mx-auto h-[600px] flex flex-col lg:flex-row justify-center items-center sm:h-[700px] lg:h-[900px]">
        {/* Text Section */}
        <div className="w-[250px] h-[150px] flex flex-col justify-between relative lg:left-[90px] sm:w-[300px] sm:h-[200px] lg:w-[440px] lg:h-[276px]">
          <p className="text-[36px] font-medium  lg:text-[54px] xl:text-[64px]">
            {product.name}
          </p>
          <div className="text-base xl:text-2xl font-medium w-[100px] h-[28px]  lg:w-[121px] lg:h-[36px]">
            <p>
              <Link href={`/shop/${product._id}`}>Shop Now</Link>
            </p>
            <hr className="w-full border-t-2 border-black mt-2" />
          </div>
        </div>

        {/* Image Section */}
        <div className="imageContainer w-[80%] h-[500px] sm:w-[400px] sm:h-[700px] md:w-[500px] md:h-[800px]  lg:w-[853px] lg:h-[1000px]">
          <Image
            src={product.image}
            width={853}
            height={1000}
            alt={product.name}
            className="object-contain w-full h-full lg:w-[853px] lg:h-[1000px]"
          />
        </div>
      </div>

      
    </div>
  );
}
