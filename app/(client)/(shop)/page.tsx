import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import HomeCategories from "@/components/HomeCategories";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { categoriesData } from "@/constants/data";

function Home() {
  return (
    <Container className="bg-shop-light-pink">
      <HomeBanner />
      <div className="py-10">
        <ProductGrid />
        <HomeCategories categories={categories} />
      </div>
    </Container>
  );
}

export default Home;
