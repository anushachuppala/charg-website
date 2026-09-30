import styles from "./HeroSection.module.css";

import { Section, Container } from "../../shared/layout";
import Button from "../../shared/ui/Button";

import type { AboutUs } from "../../features/AboutUsPage/dto/aboutUs.dto";

type HeroSectionProps = {
  aboutUs?: AboutUs;
};

function HeroSection({ aboutUs }: HeroSectionProps) {
  console.log("Hero image:", aboutUs?.heroBackgroundImage);
  return (
    <Section className={styles.heroSection}>
      <div className="hero-background">
        <img
          src={aboutUs?.heroBackgroundImage}
          alt="Best Charg EV charging infrastructure"
          className={styles.heroImage}
        />
      </div>
      <div className={styles.heroOverlay}></div>5
      <Container className={styles.heroContainer}>
        <div className={styles.heroContent}>
          {aboutUs?.heroTitle && (
            <p className={`16-secondary ${styles.eyebrow} hero-eyebrow`}>
              {aboutUs.heroTitle}
            </p>
          )}

          <h1 className={`h1-white ${styles.heroSubTitle}`}>
            {aboutUs?.heroSubtitle}
          </h1>

          <p className={`24-white ${styles.heroDescription}`}>
            {aboutUs?.heroDescription}
          </p>

          <div className={styles.heroButtons}>
            <Button variant="secondary" className="btn-one">
              Know More
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default HeroSection;
