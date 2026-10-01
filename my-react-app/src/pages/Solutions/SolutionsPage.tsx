import icon1 from "../../assets/Services-page/Briefcase.svg";

import comp1 from "../../assets/Services-page/comp1.png";
import comp2 from "../../assets/Services-page/comp2.png";
import comp3 from "../../assets/Services-page/comp3.png";
import comp4 from "../../assets/Services-page/comp4.png";
import comp5 from "../../assets/Services-page/comp5.png";
import comp6 from "../../assets/Services-page/comp6.png";
import comp7 from "../../assets/Services-page/comp7.png";
import comp8 from "../../assets/Services-page/comp8.png";
import comp9 from "../../assets/Services-page/comp9.png";
import comp10 from "../../assets/Services-page/comp10.png";

import HeroSection from "./HeroSection";

import { WhoIsThisFor } from "../../shared/ui/whoisThisfor-section/WhoIsThisFor";

import ChargeManagement from "./ChargeManagement";
import Benefits from "./Benefits";

import { WhyBestCharge } from "../../shared/ui/whyBestCharge-section/whyBestCharge";

import { CorePlatform } from "../../shared/ui/corePlatform-section";
import PowerCharge from "./PowerCharge";
import LeadingCompanies from "../../shared/ui/leadingCompanies-section/LeadingCompanies";

import KeyFeatures from "../../shared/ui/keyFeatures-section/KeyFeatures";

const whyBestChargeItems = [
  {
    icon: icon1,
    title: "500+",
    description: "Charging Networks Managed",
  },
  {
    icon: icon1,
    title: "99.9% ",
    description: "Platform Availability",
  },
  {
    icon: icon1,
    title: "10M+",
    description: "Charging Sessions Processed",
  },
  {
    icon: icon1,
    title: "40+",
    description: "Cities & Deployment Locations",
  },
];

const logos = [
  comp1,
  comp2,
  comp3,
  comp4,
  comp5,
  comp6,
  comp7,
  comp8,
  comp9,
  comp10,
];

import { FaqSection } from "../../shared/ui/faq-section/FaqSection";
import GetInTouch from "../../shared/ui/getInTouch-section/GetInTouch";

const faqItems = [
  {
    question: "Will Best Charg CMS work with any charger?",
    answer:
      "Yes. Best Charg CMS is designed to support compatible EV chargers and charging infrastructure, enabling centralized monitoring, management, and control across connected devices.",
  },

  {
    question: "How are charging tariffs configured?",
    answer:
      "Operators can create time-based, energy-based, session-based, or dynamic pricing models according to their charging business requirements.",
  },

  {
    question: "Can I manage multiple charging locations?",
    answer:
      "Yes. The platform enables operators to centrally monitor and manage multiple charging stations and locations from a unified CMS interface.",
  },

  {
    question: "Does the platform support remote diagnostics?",
    answer:
      "Yes. Best Charg CMS supports remote monitoring and diagnostics, helping operators identify charger issues, check device status, and troubleshoot problems remotely.",
  },

  {
    question: "Can the platform be white-labeled?",
    answer:
      "Yes. The CMS can support white-label customization, allowing businesses to present the platform with their own branding and user experience.",
  },
];

import { useSolutionsQuery } from "../../features/SolutionsPage/hooks/useSolutions";

const SolutionsPage = () => {
  const { data } = useSolutionsQuery();

  const solutions = data?.[0];
  return (
    <main>
      <HeroSection solutions={solutions} />
      <WhoIsThisFor
        eyebrow=""
        title={solutions?.whoIsThisForLabel}
        subtitle={solutions?.whoIsThisForTitle}
        items={solutions?.whoIsThisForCards ?? []}
      />

      <ChargeManagement solutions={solutions} />

      <CorePlatform
        eyebrow={solutions?.toolsSectionLabel || ""}
        title={solutions?.toolsSectionTitle || ""}
        subtitle="Our modular CMS provides complete control over charging infrastructure, users, payments, and network performance."
        items={solutions?.toolsCards ?? []}
      />

      <Benefits solutions={solutions} />

      <KeyFeatures
        title={solutions?.keyFeaturesLabel || ""}
        subtitle={solutions?.keyFeaturesTitle || ""}
        align="center"
        showHeader={true}
        items={solutions?.keyFeaturesCards ?? []}
      />

      <PowerCharge solutions={solutions} />
      <WhyBestCharge items={whyBestChargeItems} />

      <LeadingCompanies
        eyebrow="Trusted by leading companies nationwide"
        title=""
        subtitle=""
        align="center"
        logos={logos}
        showHeader={true}
      />

      <FaqSection
        eyebrow={solutions?.faqSectionLabel || ""}
        align="center"
        showHeader={true}
        items={solutions?.faqItems ?? []}
      />

      <GetInTouch
        title="Get in Touch"
        subtitle="Whether you are interested in working together on a new EV charging project, have a question/comment, interested in career opportunities at ChargeZone, or just want to drop us a line, we’d love to hear from you."
        align="start"
        showHeader={true}
      />
    </main>
  );
};

export default SolutionsPage;
