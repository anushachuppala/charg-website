import HeroSection from "./HeroSection";
import BestCharge from "./BestCharge";
import ChargingSolutions from "./ChargingSolutions";
import OurStrength from "./OurStrength";
import BeyondCharge from "./BeyondCharge";
import PartnerCards from "./PartnerCards";
import Infrastructure from "./Infrastructure";
import { FaqSection } from "../../shared/ui";

import { useAboutUsQuery } from "../../features/AboutUsPage/hooks/useAboutUs";

const AboutPage = () => {
  const { data: aboutUs } = useAboutUsQuery();
  return (
    <main>
      <HeroSection />
      <BestCharge />
      <ChargingSolutions />
      <OurStrength />
      <BeyondCharge />
      <PartnerCards />
      <FaqSection
        eyebrow={aboutUs?.faqSectionLabel}
        title={aboutUs?.faqSectionTitle}
        align="center"
        showHeader={true}
        items={aboutUs?.faqItems ?? []}
      />
      <Infrastructure />
    </main>
  );
};

export default AboutPage;
