import ImageOne from "../../assets/Services-page/img1.png";
import ImageTwo from "../../assets/Services-page/img2.png";
import ImageThree from "../../assets/Services-page/img3.png";
import ImageFour from "../../assets/Services-page/img4.png";
import ImageFive from "../../assets/Services-page/img5.png";
import ImageSix from "../../assets/Services-page/img6.png";

import icon1 from "../../assets/Services-page/Briefcase.svg";
import icon2 from "../../assets/Services-page/OnlineSupport.svg";
import icon3 from "../../assets/Services-page/Partnership.svg";

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
      "Manage multiple charging stations, pricing policies, uptime, and user access from a cetralized dashboard.",
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
      "Deploy and manage public charging infrastructure while enabling smart energy distribution.",
  },
];

import ChargeManagement from "./ChargeManagement";
import Benefits from "./Benefits";

import { WhyBestCharge } from "../../shared/ui/whyBestCharge-section/whyBestCharge";

import { CorePlatform } from "../../shared/ui/corePlatform-section";
import PowerCharge from "./PowerCharge";
import LeadingCompanies from "../../shared/ui/leadingCompanies-section/LeadingCompanies";

import KeyFeatures from "../../shared/ui/keyFeatures-section/KeyFeatures";

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
    description: "Integrate with ERP, CRM, mobile apps, payment gateways.",
  },
];

const keyFeaturesItems = [
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

import { FaqSection } from "../../shared/ui/faq-section/FaqSection";
import { GetInTouch } from "../../shared/ui/getInTouch-section/GetInTouch";

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
      />

      <Benefits />

      <KeyFeatures
        title="Key Features"
        subtitle="Intelligent features built for scalable EV networks"
        align="center"
        showHeader={true}
        items={keyFeaturesItems}
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

      <FaqSection
        eyebrow="faq's"
        title="Know More About Our EV Charging Solutions"
        align="center"
        showHeader={true}
        items={faqItems}
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
