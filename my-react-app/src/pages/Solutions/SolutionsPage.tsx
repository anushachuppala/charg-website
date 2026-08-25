import ImageOne from "../../assets/Services-page/img1.png";
import ImageTwo from "../../assets/Services-page/img2.png";
import ImageThree from "../../assets/Services-page/img3.png";
import ImageFour from "../../assets/Services-page/img4.png";
import ImageFive from "../../assets/Services-page/img5.png";
import ImageSix from "../../assets/Services-page/img6.png";

import HeroSection from "./HeroSection";
import WhoIsThisFor from "./WhoIsThisFor";
import ChargeManagement from "./ChargeManagement";

import { CorePlatform } from "../../shared/ui/corePlatform-section";

const corePlatformItems = [
  {
    icon: ImageOne,
    title: "Station Management",
    description:
      "Monitor charger status, availability, health, and remote operations.",
  },
  {
    icon: ImageTwo,
    title: "User & Access Control",
    description:
      "Manage drivers, operators, RFID cards, and role-based permissions.",
  },
  {
    icon: ImageThree,
    title: "Billing & Payments",
    description:
      "Configure tariffs, subscriptions, invoicing, and payment gateways.",
  },
  {
    icon: ImageFour,
    title: "Session Monitoring",
    description:
      "Track live charging sessions, energy consumption, and charger utilization.",
  },
  {
    icon: ImageFive,
    title: "Analytics & Reports",
    description:
      "Generate insights on revenue, usage trends, uptime, and energy delivered.",
  },
  {
    icon: ImageSix,
    title: "API & Integrations",
    description:
      "Integrate with ERP, CRM, mobile apps, payment gateways, and third-party systems.",
  },
];

const SolutionsPage = () => {
  return (
    <main>
      <HeroSection />
      <WhoIsThisFor />
      <ChargeManagement />

      <CorePlatform
        eyebrow="Core Platform Modules"
        title="Comprehensive tools to manage your EV charging ecosystem"
        subtitle="Our modular CMS provides complete control over charging infrastructure, users, payments, and network performance."
        items={corePlatformItems}
      />
    </main>
  );
};

export default SolutionsPage;
