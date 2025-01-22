import { client } from "./client";

// Fetch a product by its ID
export const getProductById = async (id: string) => {
  const query = `*[_type == "product" && _id == $id][0] { 
    _id,
    name,
    price,
    description,
    "imageSrc": image.asset->url,
    sizes,
    colors,
    category,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    rating
  }`;

  return await client.fetch(query, { id });
};

// Fetch all products
export async function getAllProducts() {
  const query = `*[_type == "product"] | order(_createdAt asc) {
    _id,
    name,
    price,
    description,
    "imageSrc": image.asset->url,
    category,
    isFeaturedProduct
  }`;

  return await client.fetch(query);
}

// Fetch the first four products
export async function getFourProducts() {
  const query = `*[_type == "product"] | order(_createdAt asc) [0..3] {
    _id,
    name,
    price,
    description,
    "imageSrc": image.asset->url,
    category
  }`;

  return await client.fetch(query);
}

// Fetch all categories
export const getCategories = async () => {
  const query = `*[_type == "category"] {
    _id,
    name
  }`;

  return await client.fetch(query);
};

// Fetch products by category
export const getProductsByCategory = async (category: string) => {
  const query = `*[_type == "product" && category == $category] | order(_createdAt asc) {
    _id,
    name,
    price,
    description,
    "imageSrc": image.asset->url,
    isFeaturedProduct
  }`;

  return await client.fetch(query, { category });
};

// Fetch featured products
export const getFeaturedProducts = async () => {
  const query = `*[_type == "product" && isFeaturedProduct == true] | order(_createdAt asc) {
    _id,
    name,
    price,
    description,
    "imageSrc": image.asset->url,
    category,
    discountPercentage
  }`;

  return await client.fetch(query);
};
