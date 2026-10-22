import icon1 from "../../assets/Services-page/Briefcase.svg";

import HeroSection from "./HeroSection";

import { WhoIsThisFor } from "../../shared/ui/whoisThisfor-section/WhoIsThisFor";

import ChargeManagement from "./ChargeManagement";
import Benefits from "./Benefits";

import { WhyBestCharge } from "../../shared/ui/whyBestCharge-section/whyBestCharge";

import { CorePlatform } from "../../shared/ui/corePlatform-section";
import PowerCharge from "./PowerCharge";

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

import { FaqSection } from "../../shared/ui/faq-section/FaqSection";
import GetInTouch from "../../shared/ui/getInTouch-section/GetInTouch";

import { useSolutionsQuery } from "../../features/SolutionsPage/hooks/useSolutions";

const SolutionsPage = () => {
  const { data } = useSolutionsQuery();
  console.log("All Solutions", data);

  const solutions = data?.[0];
  console.log("Matched Solution", solutions);
  return (
    <main>
      <HeroSection solutions={solutions} />
      <WhoIsThisFor
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
