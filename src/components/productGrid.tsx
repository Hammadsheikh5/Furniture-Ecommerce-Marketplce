import { client } from "@/sanity/lib/client";
import React from "react";
import PaginationButtons from "./paginationButtons";
import ProductCard from "./productCard";

export interface Products {
  _id: string;
  name: string;
  image: string;
  price: number;
}

export default async function ProductGrid() {
  // Corrected query with a comma
  const products: Products[] = await client.fetch(`*[_type == "product"]{
    name,
    _id,
    "image": image.asset->url,
    price
  }`);

  return (
    <div className="font-poppins text-black bg-white">
      <div className="w-full max-w-[1536px] mx-auto flex flex-col items-center px-[50px] lg:px-[100px]">
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
        <PaginationButtons />
      </div>
    </div>
  );
}
