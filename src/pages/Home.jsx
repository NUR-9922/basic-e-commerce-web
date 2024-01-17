import React from "react";
import CategorySection from "../components/CategorySection/CategorySection";
import HomeBannerSlider from "../components/HomeBannerSlider/HomeBannerSlider";
import SelectOneSection from "../components/SelectOneSection";
import ProductRecommended from "../components/ProductRecommended";
import FeatureSection from "../components/FeatureSection";
function Home() {
  
  return (
    <div className="px-5 ">
      <CategorySection />
      <HomeBannerSlider />
      <FeatureSection />
      <SelectOneSection />
      <ProductRecommended />
    </div>
  );
}

export default Home;
