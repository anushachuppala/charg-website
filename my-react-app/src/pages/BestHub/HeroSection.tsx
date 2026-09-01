import heroImage from "../../assets/BestHub-page/hero-image.png";
import styles from "./HeroSection.module.css";

import { Section, Container } from "../../shared/layout";

import Button from "../../shared/ui/Button";

function HeroSection() {
  return (
    <Section className={styles.section}>
      <div className={styles.heroBackground}>
        <img
          src={heroImage}
          alt="Best hub EV platform"
          className={styles.heroImage}
        />
      </div>

      <div className={styles.heroOverlay}></div>
      <Container className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <p className={styles.smallHeading}>
            Best Hub — EV Destination Platform
          </p>

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
