import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader, CorePlatform } from "../../shared/ui";

import ImageOne from "../../assets/Services-page/img1.png";
import ImageTwo from "../../assets/Services-page/img2.png";
import ImageThree from "../../assets/Services-page/img3.png";
import ImageFour from "../../assets/Services-page/img4.png";
import ImageFive from "../../assets/Services-page/img5.png";
import ImageSix from "../../assets/Services-page/img6.png";

const featuresItems = [
  {
    icon: ImageOne,
    title: "Remote Monitoring",
    description: "Live session data, uptime, and diagnostics from anywhere.",
  },
  {
    icon: ImageTwo,
    title: "Mobile App Integration",
    description: "Start, stop, schedule and pay — branded for your fleet.",
  },
  {
    icon: ImageThree,
    title: "Energy Analytics",
    description: "kWh, cost, CO₂ saved. Export-ready reports for ESG.",
  },
  {
    icon: ImageFour,
    title: "OTA Updates",
    description:
      "Roll out firmware and policy updates fleet-wide in one click.",
  },
  {
    icon: ImageFive,
    title: "Dynamic Load Management",
    description: "Auto-balance current across chargers within site capacity.",
  },
  {
    icon: ImageSix,
    title: "OCPP 1.6J / 2.0.1",
    description: "Open protocol — interoperable with any major CMS.",
  },
];

function smartFeatures() {
  return (
    <Section>
      <Container>
        <Panel>
          <SectionHeader
            eyebrow="Smart Features"
            title="Intelligence built in."
          />
        </Panel>
      </Container>
    </Section>
  );
}

export default smartFeatures;
