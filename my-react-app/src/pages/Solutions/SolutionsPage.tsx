import ImageOne from "../../assets/Services-page/img1.png";
import ImageTwo from "../../assets/Services-page/img2.png";
import ImageThree from "../../assets/Services-page/img3.png";
import ImageFour from "../../assets/Services-page/img4.png";
import ImageFive from "../../assets/Services-page/img5.png";
import ImageSix from "../../assets/Services-page/img6.png";

import HeroSection from "./HeroSection";
import WhoIsThisFor from "./WhoIsThisFor";
import ChargeManagement from "./ChargeManagement";
import Benefits from "./Benefits";

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

const newFeaturesItems = [
  {
    icon: ImageOne,
    title: "Real-time Monitoring",
    description:
      "Track charger status, utilization, and charging sessions across all locations in real time.",
  },

  {
    icon: ImageTwo,
    title: "Remote Configuration",
    description:
      "Update firmware, modify settings, and troubleshoot chargers remotely.",
  },

  {
    icon: ImageThree,
    title: "Smart Load Balancing",
    description:
      "Optimize power distribution across multiple chargers to prevent overload.",
  },

  {
    icon: ImageFour,
    title: "OCPP 1.6 & 2.0 Support",
    description:
      "Ensure interoperability with industry-standard EV charging protocols.",
  },

  {
    icon: ImageFive,
    title: "Multi-tenant Architecture",
    description:
      "Manage multiple operators, franchises, or networks from a single platform.",
  },

  {
    icon: ImageSix,
    title: "White-label Ready",
    description:
      "Launch the platform under your own brand with customizable interfaces.",
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
        showHeader={false}
      />

      <Benefits />

      <CorePlatform
        eyebrow=""
        title="Key Features"
        subtitle="Intelligent features built for scalable EV networks"
        items={newFeaturesItems}
        background="dark"
        showHeader={true}
      />
    </main>
  );
};

export default SolutionsPage;
