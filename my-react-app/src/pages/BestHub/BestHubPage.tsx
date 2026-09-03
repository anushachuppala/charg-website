import HeroSection from "./HeroSection";
import BestHubExperience from "./BestHubExperience";
import Arrival from "./Arrival";
import SustainableGrowth from "./SustainableGrowth";
import BusinessImpact from "./BusinessImpact";

import { FaqSection } from "../../shared/ui";
import BuildTheFuture from "../../shared/ui/buildTheFuture-section/BuildTheFuture";

const faqItems = [
  {
    question: "What is Best Hub?",
    answer:
      "Best Hub is an EV destination platform that combines convenient EV charging with amenities and services designed to make every journey more comfortable, convenient, and enjoyable.",
  },

  {
    question: "Is Best Hub only an EV charging station?",
    answer:
      "No. Best Hub is more than just EV charging. It is designed as a complete destination where EV users can charge their vehicles while enjoying facilities such as food, rest areas, retail, and other convenient services.",
  },

  {
    question: "Who can use Best Hub?",
    answer:
      "Best Hub is designed for EV owners, families, commuters, fleet operators, and long-distance travelers looking for a convenient place to charge, relax, and continue their journey.",
  },

  {
    question: "What can I do while my EV is charging?",
    answer:
      "While your vehicle is charging, you can take a break, grab refreshments, access available amenities, shop, or simply relax. Best Hub turns charging time into useful and enjoyable journey time.",
  },

  {
    question: "How does Best Hub improve the EV travel experience?",
    answer:
      "Best Hub brings charging, comfort, convenience, and lifestyle amenities together in one destination, helping reduce charging downtime and making every EV journey more seamless and enjoyable.",
  },

  {
    question: "Can your platform manage multiple charging stations remotely?",
    answer:
      "Yes, our CMS enables centralized monitoring, control, diagnostics, and reporting across distributed charging networks.",
  },
];

const BestHubPage = () => {
  return (
    <main>
      <HeroSection />
      <BestHubExperience />
      <Arrival />
      <SustainableGrowth />
      <BusinessImpact />

      <FaqSection
        eyebrow="faq's"
        title="Best Hub: Simplifying Your EV Journey"
        align="center"
        showHeader={true}
        items={faqItems}
      />
      <BuildTheFuture />
    </main>
  );
};

export default BestHubPage;
