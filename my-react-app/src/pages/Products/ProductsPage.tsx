import HeroSection from "./HeroSection";
import WhyAries from "./WhyAries";
import ProductShowCase from "./ProductShowCase";
import SmartFeatures from "./SmartFeaturesTemp";
import TechnicalSpecifications from "./TechnicalSpecifications";
import SafetyAndReliability from "./SafetyandReliability";

import { FaqSection } from "../../shared/ui";
import BuildTheFuture from "../../shared/ui/buildTheFuture-section/BuildTheFuture";

const faqItems = [
  {
    question: "What is the charging speed of a 7KW AC charger?",
    answer:
      "A 7kW charger typically adds around 35–45 km of range per hour, depending on your EV's onboard charger capacity",
  },
  {
    question: "Is this charger suitable for home installation?",
    answer:
      "Yes, 7kW AC chargers are the standard choice for home/residential use on a single-phase power connection.",
  },
  {
    question: "Do I need a dedicated power connection?",
    answer:
      "Yes, a 7kW EV charger usually needs a dedicated circuit/single-phase supply with adequate sanctioned load; an electrician should verify your home's wiring before installation.",
  },
  {
    question: "Is it safe to use outdoors or in all weather?",
    answer:
      "Most 7kW EV chargers in India come with an IP-rated weatherproof enclosure, making them safe for covered outdoor or basement park",
  },
  {
    question: "What should I do if a charger isn't working?",
    answer:
      "If a charger isn’t working, check the connection, restart the session, or contact VoltPeak support through the app for immediate assistance.",
  },
];

const productsPage = () => {
  return (
    <main>
      <HeroSection />
      <WhyAries />
      <ProductShowCase />
      <SmartFeatures />
      <TechnicalSpecifications />
      <SafetyAndReliability />
      <FaqSection
        eyebrow="faq's"
        align="center"
        showHeader={true}
        items={faqItems}
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

export default productsPage;
