import HeroSection from "./HeroSection";
import WhyAries from "./WhyAries";
import ProductShowCase from "./ProductShowCase";
import SmartFeatures from "./SmartFeaturesTemp";
import TechnicalSpecifications from "./TechnicalSpecifications";
import SafetyAndReliability from "./SafetyandReliability";

import { FaqSection } from "../../shared/ui";
import BuildTheFuture from "../../shared/ui/buildTheFuture-section/BuildTheFuture";

import { useProductsQuery } from "../../features/ProductsPage/hooks/useProducts";

const ProductsPage = () => {
  const { data } = useProductsQuery();

  const products = data?.[0];

  return (
    <main>
      <HeroSection products={products} />

      <WhyAries products={products} />
      <ProductShowCase products={products} />
      <SmartFeatures products={products} />
      <TechnicalSpecifications products={products} />
      <SafetyAndReliability products={products} />
      <FaqSection
        eyebrow={products?.faqSectionLabel}
        align="center"
        showHeader={true}
        items={products?.faqItems ?? []}
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
