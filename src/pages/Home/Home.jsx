import HeroSection from "../../components/HeroSection/HeroSection";
import FeatureArea from "../../components/FeatureArea/FeatureArea";
import CollectionArea from "../../components/CollectionArea/CollectionArea";
import AboutArea from "../../components/AboutArea/AboutArea";
import CollectionStyleTwo from "../../components/CollectionStyleTwo/CollectionStyleTwo";
import CountdownArea from "../../components/CountdownArea/CountdownArea";
import ProductSection from "../../components/ProductSection/ProductSection";
import FeatureStyleTwo from "../../components/FeatureStyleTwo/FeatureStyleTwo";
import MarqueeArea from "../../components/MarqueeArea/MarqueeArea";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import TestimonialArea from "../../components/TestimonialArea/TestimonialArea";
import BrandArea from "../../components/BrandArea/BrandArea";
import JobArea from "../../components/JobArea/JobArea";

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <FeatureArea /> */}
      <CollectionArea />
      <AboutArea />
      {/* <CollectionStyleTwo /> */}
      <CountdownArea />
      <ProductSection />
      {/* <FeatureStyleTwo /> */}
      <MarqueeArea />
      {/* <PopularProducts /> */}
      {/* <TestimonialArea /> */}
      {/* <BrandArea /> */}
      <JobArea />
    </>
  );
};

export default Home;
