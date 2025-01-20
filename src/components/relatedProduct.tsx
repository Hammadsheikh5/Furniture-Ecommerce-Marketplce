import Link from "next/link";
import React from "react";
import ProductCard from "./productCard";
import { client } from "@/sanity/lib/client";
import ActionLink from "./actionLink";

export interface Products {
  _id: string;
  name: string;
  image: string;
  price: number;
  isFeaturedProduct: boolean;
}


export default async function RelatedProduct(params: {
  title: string;
  showDesc: boolean;
}) {
  const products: Products[] = await client.fetch(`*[_type == "product" && isFeaturedProduct == true] [0..3] {
  _id,
  name,
  "image" : image.asset->url,
  price,
  isFeaturedProduct,
}
`);
  return (
    <div className="font-poppins bg-white text-black">
      <div className="group19 w-full max-w-[1536px] mx-auto flex flex-col items-center py-[55px]  px-[50px] lg:px-[100px]">
        {/* Title and Description */}
        <div className="container flex flex-col text-center justify-center gap-5 font-medium">
          <p className="text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl ">
            {params.title}
          </p>
          {params.showDesc && (
            <p className="text-[#9F9F9F] text-xs  md:text-sm lg:text-base xl:text-base">
              Find a bright ideal to suit your taste with our great selection of
              suspension, floor and table lights.
            </p>
          )}
        </div>

        {/* Product Grid */}
        <div className="container pt-[50px] md:pt-[88px] flex flex-col md:flex-row md:grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 ">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              _id={product._id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>

        <ActionLink name="View More " href="/shop"/>
      </div>
    </div>
  );
}
