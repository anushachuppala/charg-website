import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader, WhoIsThisFor } from "../../shared/ui";
import styles from "./smartFeatures.module.css";

import ImageOne from "../../assets/products-page/smartImage1.png";
import ImageTwo from "../../assets/products-page/smartImage2.png";
import ImageThree from "../../assets/products-page/smartImage3.png";
import ImageFour from "../../assets/products-page/smartImage4.png";
import ImageFive from "../../assets/products-page/smartImage5.png";
import ImageSix from "../../assets/products-page/smartIimage6.png";

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
    <Section className={styles.Section}>
      <Container>
        <Panel>
          <SectionHeader
            eyebrow="Smart Features"
            title="Intelligence built in."
          />

          <WhoIsThisFor
            items={featuresItems}
            showHeader={false}
            columns={6}
            cardColumns={3}
            iconWrapperSize={48}
            iconSize={30}
            embedded={true}
          />
        </Panel>
      </Container>
    </Section>
  );
}

export default smartFeatures;
