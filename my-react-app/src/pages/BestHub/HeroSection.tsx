import styles from "./HeroSection.module.css";
import { Section, Container } from "../../shared/layout";
import Button from "../../shared/ui/Button";

import type { BestHub } from "../../features/BestHubPage/dto/bestHub.dto";

type HeroSectionProps = {
  bestHub?: BestHub;
};

function HeroSection({ bestHub }: HeroSectionProps) {
  console.log("Hero solutions:", bestHub);
  return (
    <Section className={styles.section}>
      <div className={styles.heroBackground}>
        <img
          src={bestHub?.heroBackgroundImage}
          alt="Best hub EV platform"
          className={styles.heroImage}
        />
      </div>

      <div className={styles.heroOverlay}></div>
      <Container className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <p className={styles.smallHeading}>{bestHub?.heroTitle}</p>

          <h1 className={styles.heroTitle}>
            More Than <span>EV Charging.</span>
            <br />
            A Destination Built Around <br />
            <span>Every Journey.</span>
          </h1>

          <p className={styles.heroDescription}>
            Best HUB transforms charging time into opportunities to eat, shop,
            work, relax, and connect—creating vibrant mobility destinations for
            people and businesses.
          </p>

          <div className={styles.heroButtons}>
            <Button variant="secondary">Learn More</Button>
            <Button variant="outline">Partner with Us</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default HeroSection;
