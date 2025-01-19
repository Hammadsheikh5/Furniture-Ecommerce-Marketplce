import OurBlogs from "@/components/blog";
import HomeHeader from "@/components/homeHeader";
import RelatedProduct from "@/components/relatedProduct";
import Social from "@/components/social";


export default function Home() {
  return <div>
  <HomeHeader/>
  <Social/>
  <RelatedProduct title="Top Picks For You" showDesc={true} />
  <OurBlogs/>
  </div>;
}
