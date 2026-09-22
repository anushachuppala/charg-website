import styles from "./SafetyAndReliability.module.css";
import { Section } from "../../shared/layout";

import safetyImage from "../../assets/products-page/safetyImage.jpg";
import image1 from "../../assets/products-page/image1.png";
import image2 from "../../assets/products-page/image2.png";
import image3 from "../../assets/products-page/image3.png";
import image4 from "../../assets/products-page/image4.png";
import image5 from "../../assets/products-page/image5.png";
import image6 from "../../assets/products-page/image6.png";

const certifications = ["IEC 61851", "CE", "BIS", "RoHS", "IP54"];

const features = [
  {
    icon: image1,
    title: "LED Status Indicator",
    description: "Glanceable charging state from across lot",
  },
  {
    icon: image2,
    title: "Smart Communication",
    description: "OCPP 1.6J - Wifi - 4G - Ethernet.",
  },
  {
    icon: image3,
    title: "Easy Installation",
    description: "Easy plug-and-play setup",
  },
  {
    icon: image4,
    title: "Robust Safety",
    description: "Built like a shield with multiple safety protections",
  },
  {
    icon: image5,
    title: "Certified Excellence",
    description: "ARAI & CE Certified EV Charger",
  },
  {
    icon: image6,
    title: "Weather Resistant",
    description: "IP65-rated enclosure for reliable outdoor performance.",
  },
];

function CheckIcon() {
  return (
    <svg
      className={styles.check}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="4 12.5 9.5 18 20 6.5" />
    </svg>
  );
}

function SafetyAndReliability() {
  return (
    <Section className={styles.Section}>
      <img
        src={safetyImage}
        aria-hidden="true"
        className={styles.safetyImage}
      />

      <div className={styles.layout}>
        <div className={styles.content}>
          <p className={styles.heading}>Safety &amp; Reliability</p>

          <h2 className={styles.title}>
            Six layers of protection. <br />
            Zero compromise.
          </h2>

          <p className={styles.description}>
            Every Aries unit ships with enterprise-grade protection circuitry
            validated to international safety standards — so your assets, your
            users, and your vehicles stay safe.
          </p>

          <ul className={styles.badges}>
            {certifications.map((item) => (
              <li key={item} className={styles.badge}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ul className={styles.grid}>
          {features.map((feature) => (
            <li key={feature.title} className={styles.card}>
              <span className={styles.iconWrap}>
                <img src={feature.icon} className={styles.icon} />
              </span>

              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>

              <CheckIcon />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default SafetyAndReliability;
