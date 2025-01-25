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
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  const query = `*[_type == "product"] | order(_createdAt asc) {
    name,
    _id,
    "image": image.asset->url,
    price,
    isFeaturedProduct,
    category
  }`;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Start loading
      try {
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchProducts();

    const subscription = client.listen(query).subscribe((update) => {
      if (update) {
        console.log("Sanity update received:", update);
        fetchProducts(); // Re-fetch products on any update
      }
    });

    return () => subscription.unsubscribe();
  }, [query]);

  return (
    <div className="font-poppins text-black bg-white">
      <Filter />
      <div className="w-full max-w-[1536px] mx-auto flex flex-col items-center px-[50px] lg:px-[100px]">
        {loading ? (
          <div className="w-full flex justify-center items-center py-20">
            {/* Replace with your preferred loading spinner */}
            <div className="flex items-center justify-center space-x-2 animate-pulse">
              <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
              <div className="w-5 h-5 bg-gray-500 rounded-full"></div>
              <div className="w-5 h-5 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        ) : (
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
        )}
        {!loading && <PaginationButtons />}
      </div>
    </div>
  );
}
