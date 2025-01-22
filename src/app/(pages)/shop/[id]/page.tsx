import Header from "@/components/header";
import ProductDetailComponent from "@/components/productDetailComponent";
import RelatedProduct from "@/components/relatedProduct";
import TopNavigation from "@/components/topNavigation";
import { client } from "@/sanity/lib/client";

interface ProductDetail {
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
  stockLevel: number;
  _id: string;
  sizes: string[];
  colors: string[];
}
interface PageParams {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({params}: PageParams) {
  const { id } = await params;

  let product: ProductDetail | null = null;

  try {
    // Sanity query to fetch product details based on the ID
    const query = `*[_type == 'product' && _id == $id][0]{
      name,
      description,
      price,
      "image" : image.asset->url,
      category,
      stockLevel,
      _id,
      sizes,
      colors
    }`;

    product = await client.fetch(query, { id });

    if (!product) {
      throw new Error("Product not found");
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div className="p-5">
        <h1 className="text-2xl text-red-500">Error fetching product details.</h1>
        <p className="text-lg text-red-500">
          There was an issue while loading the product. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="text-black font-poppins bg-white">
      <Header />
      <TopNavigation productName={product.name} />
      <ProductDetailComponent product={product} />
      <RelatedProduct title="Related Products" showDesc={false} />
    </div>
  );
}
