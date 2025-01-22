"use client";

import { client } from "@/sanity/lib/client";
import PaginationButtons from "./paginationButtons";
import ProductCard from "./productCard";
import Filter from "./filter";
import { useState, useEffect } from "react";

export interface Products {
  _id: string;
  name: string;
  image: string;
  price: number;
  isFeaturedProduct?: boolean;
  category?: string;
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Products[]>([]);

  const query = `*[_type == "product"] | order(_createdAt asc) {
    name,
    _id,
    "image": image.asset->url,
    price,
    isFeaturedProduct,
    category
  }`;

  useEffect(() => {
    // Initial fetch
    client.fetch(query).then((data) => setProducts(data));

    // Setup GROQ Subscription for real-time updates
    const subscription = client.listen(query).subscribe((update) => {
      client.fetch(query).then((data) => setProducts(data));
    });

    // Cleanup the subscription on unmount
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="font-poppins text-black bg-white">
      <Filter />
      <div className="w-full max-w-[1536px] mx-auto flex flex-col items-center px-[50px] lg:px-[100px]">
        <div className="container pt-[50px] md:pt-[88px] flex flex-col md:flex-row md:grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8">
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
