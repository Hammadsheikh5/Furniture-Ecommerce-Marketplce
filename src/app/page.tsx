import AsgardSofa from "@/components/asgardSofa";
import OurBlogs from "@/components/blog";
import Hero from "@/components/hero";
import Hero2 from "@/components/hero2";
import HomeHeader from "@/components/homeHeader";
import RelatedProduct from "@/components/relatedProduct";
import Social from "@/components/social";


export default function Home() {
  return <div>
  <HomeHeader/>
  <Hero/>
  <Hero2/>
  <AsgardSofa/>
  <Social/>
  <RelatedProduct title="Top Picks For You" showDesc={true} />
  <OurBlogs/>
  </div>;
}
