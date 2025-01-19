

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
  stockLevel:number;
  _id:string;
}

interface IParams {
  params: { id: string };
}

export default async function ProductDetailPage({ params }: IParams) {
  const { id } = params;

  const query = `*[_type == 'product' && _id == $id][0]{
    name,
    description,
    price,
    "image" : image.asset->url,
    category,
    stockLevel,
    _id
  }`;

  const product: ProductDetail | null = await client.fetch(query, { id });

  if (!product) {
    return (
      <div className="p-5">
        <h1 className="text-2xl">Product Not Found</h1>
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
