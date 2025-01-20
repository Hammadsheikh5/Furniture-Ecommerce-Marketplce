
import { client } from "@/sanity/lib/client";
import PaginationButtons from "./paginationButtons";
import ProductCard from "./productCard";
import Filter from "./filter";

export interface Products {
  _id: string;
  name: string;
  image: string;
  price: number;
  featuredProducts?: boolean;
  category? : string;
}

export default async function ProductGrid({ filter }: { filter: string }) {

  let query = `*[_type == "product"]{
    name,
    _id,
    "image": image.asset->url,
    price,
    featuredProducts,
    category
  }`;

  if (filter === "featured-products") {
    query = `*[_type == "product" && isFeaturedProduct == true]{
      name,
      _id,
      "image": image.asset->url,
      price,
      featuredProducts
    }`;
  } else if (filter === "all-products") {
    query = `*[_type == "product"]{
      name,
      _id,
      "image": image.asset->url,
      price,
      featuredProducts
    }`;
  } else if (filter !== "default") {
    query = `*[_type == "product" && category == '${filter}']{
      name,
      _id,
      "image": image.asset->url,
      price,
      featuredProducts
    }`;
  }
  // console.log(filter)

  const products: Products[] = await client.fetch(query);

  return (
    <div className="font-poppins text-black bg-white">
      <Filter/>
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
