import HeroSection from "./HeroSection";
import WhyAries from "./WhyAries";
import ProductShowCase from "./ProductShowCase";
import SmartFeatures from "./SmartFeaturesTemp";
import TechnicalSpecifications from "./TechnicalSpecifications";
import SafetyAndReliability from "./SafetyandReliability";

import { FaqSection } from "../../shared/ui";
import BuildTheFuture from "../../shared/ui/buildTheFuture-section/BuildTheFuture";

import { useParams } from "react-router-dom";
import { useProductsQuery } from "../../features/ProductsPage/hooks/useProducts";

const ProductsPage = () => {
  const { slug } = useParams();

  const { data } = useProductsQuery();

  const product = data?.find((item) => item.slug === slug);

  return (
    <main>
      <HeroSection products={product} />
      <WhyAries products={product} />
      <ProductShowCase products={product} />
      <SmartFeatures products={product} />
      <TechnicalSpecifications products={product} />
      <SafetyAndReliability products={product} />
      <FaqSection
        eyebrow={product?.faqSectionLabel}
        align="center"
        showHeader={true}
        items={product?.faqItems ?? []}
      />

      <BuildTheFuture
        subtitle={
          <>
            Find the Right Charging Solution for Your
            <br />
            Business
          </>
        }
        title={
          <>
            From AC chargers to DC fast charging systems, we deliver dependable
            products designed
            <br />
            for commercial, fleet, and public charging applications.
          </>
        }
      />
    </main>
  );
};

export default ProductsPage;
