import styles from "./ProductShowCase.module.css";

import { SectionHeader } from "../../shared/ui";

import { Section } from "../../shared/layout";

import ledIcon from "../../assets/products-page/ledIcon.png";
import downloadIcon from "../../assets/products-page/downloadIcon.png";
import robustIcon from "../../assets/products-page/robustIcon.png";
import wifiIcon from "../../assets/products-page/wifiIcon.png";
import certificateIcon from "../../assets/products-page/certificateIcon.png";
import weatherIcon from "../../assets/products-page/weather.png";
import ariesCharger from "../../assets/products-page/ariesCharger.png";

const info = [
  {
    icon: ledIcon,
    title: "LED Status Indicator",
    description: "Glanceable charging state from across lot",
  },

  {
    icon: wifiIcon,
    title: "Smart Communication",
    description: "OCPP 1.6J - Wifi - 4G - Ethernet.",
  },

  {
    icon: downloadIcon,
    title: "Easy Installation",
    description: "Easy plug-and-play setup",
  },

  {
    icon: certificateIcon,
    title: "Robust Safety",
    description: "Built like a shield with multiple safety protections",
  },

  {
    icon: robustIcon,
    title: "Certified Excellence",
    description: "ARAI & CE Certified EV Charger",
  },

  {
    icon: weatherIcon,
    title: "Weather Resistant",
    description: "IP65-rated enclosure for reliable outdoor performance.",
  },
];

function ProductShowCase() {
  return (
    <Section>
      <SectionHeader
        as="div"
        eyebrow="PRODUCT SHOWCASE"
        title="Every Detail, Engineered."
        subtitle="Hover or tap the hotspots to explore the precision-built features that make Aries the charger of choice."
      />

      <div className={styles.chargerImage}>
        <img
          src={ariesCharger}
          alt="aries-charger"
          className={styles.ariesCharger}
        />
      </div>
    </Section>
  );
}

export default ProductShowCase;
