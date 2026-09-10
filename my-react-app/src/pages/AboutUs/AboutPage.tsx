import HeroSection from "./HeroSection";
import BestCharge from "./BestCharge";
import ChargingSolutions from "./ChargingSolutions";
import OurStrength from "./OurStrength";
import BeyondCharge from "./BeyondCharge";
import PartnerCards from "./PartnerCards";
import Infrastructure from "./Infrastructure";
import { FaqSection } from "../../shared/ui";

const faqItems = [
  {
    question: "Can your platform manage multiple charging stations remotely?",
    answer:
      "Yes, our CMS enables centralized monitoring, control, diagnostics, and reporting across distributed charging networks.",
  },

  {
    question:
      "What makes Best Charg different from other EV charging Solutions",
    answer:
      "Best Charg focuses on reliable, intelligent, and user-friendly EV charging infrastructure designed for homes, businesses, fleets, and public charging environments.",
  },

  {
    question: "What types of EV charging solutions does Best Charg provide?",
    answer:
      "Best Charg offers a range of AC and DC charging solutions designed to support different charging requirements, vehicle types, and installation environments.",
  },

  {
    question: "Does EV chargers support smart connectivity?",
    answer:
      "Yes. Smart connectivity options enable features such as remote monitoring, charger management, usage tracking, and intelligent charging operations.",
  },

  {
    question: "Does Best Charg provide installation and maintenance support?",
    answer:
      "Yes. Best Charg provides end-to-end support, including installation, configuration, commissioning, maintenance, and technical assistance for EV charging infrastructure.",
  },

  {
    question:
      "Can Best Charg charging stations be used for commercial and public locations?",
    answer:
      "Yes. Best Charg solutions can be deployed across commercial buildings, offices, residential communities, fleet operations, public charging locations, and hospitality spaces.",
  },
];

const AboutPage = () => {
  return (
    <main>
      <HeroSection />
      <BestCharge />
      <ChargingSolutions />
      <OurStrength />
      <BeyondCharge />
      <PartnerCards />
      <FaqSection
        eyebrow="faq's"
        title="Everything About Best Charg Solutions"
        align="center"
        showHeader={true}
        items={faqItems}
      />
      <Infrastructure />
    </main>
  );
};

export default AboutPage;
