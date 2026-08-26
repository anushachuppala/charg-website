import ImageOne from "../../assets/Services-page/img1.png";
import ImageTwo from "../../assets/Services-page/img2.png";
import ImageThree from "../../assets/Services-page/img3.png";
import ImageFour from "../../assets/Services-page/img4.png";
import ImageFive from "../../assets/Services-page/img5.png";
import ImageSix from "../../assets/Services-page/img6.png";

import icon1 from "../../assets/Services-page/icon1.png";
import icon2 from "../../assets/Services-page/icon2.png";
import icon3 from "../../assets/Services-page/icon3.png";

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

const WhoIsThisForItems = [
  {
    icon: icon1,
    title: "Charge Point Operators",
    description:
      "Manage multiple charging stations, pricing policies, uptime, and user access from a centralized dashboard.",
  },

  {
    icon: icon2,
    title: "Fleet Operators",
    description:
      "Monitor fleet charging schedules, energy consumption, and operational efficiency across locations.",
  },

  {
    icon: icon3,
    title: "Municipalities & Utilities",
    description:
      "Deploy and manage public charging infrastructure while enabling smart energy distribution and grid integration.",
  },
];

import ChargeManagement from "./ChargeManagement";
import Benefits from "./Benefits";

import { WhyBestCharge } from "../../shared/ui/whyBestCharge-section/whyBestCharge";

import { CorePlatform } from "../../shared/ui/corePlatform-section";
import PowerCharge from "./PowerCharge";
import LeadingCompanies from "../../shared/ui/leadingCompanies-section/LeadingCompanies";

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

const SolutionsPage = () => {
  return (
    <main>
      <HeroSection />
      <WhoIsThisFor
        title="Who Is This For?"
        subtitle="Built for every stakeholder in the EV ecosystem"
        align="center"
        items={WhoIsThisForItems}
      />
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

      <PowerCharge />
      <WhyBestCharge items={whyBestChargeItems} />

      <LeadingCompanies
        eyebrow="Trusted by leading companies nationwide"
        title=""
        subtitle=""
        align="center"
        logos={logos}
        showHeader={true}
      />
    </main>
  );
};

export default SolutionsPage;
