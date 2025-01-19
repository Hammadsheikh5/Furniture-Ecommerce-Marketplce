import OurBlogs from "@/components/blog";
import Header from "@/components/header";
import RelatedProduct from "@/components/relatedProduct";
import Social from "@/components/social";


export default function Home() {
  return <div>
    <Header/>
  <Social/>
  <RelatedProduct title="Top Picks For You" showDesc={true} />
  <OurBlogs/>
  </div>;
}
