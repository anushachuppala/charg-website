import styles from "./HeroSection.module.css";

import { Section, Container } from "../../shared/layout";
import Button from "../../shared/ui/Button";

import { useAboutUsQuery } from "../../features/AboutUsPage/hooks/useAboutUs";

function HeroSection() {
  const { data: aboutUs } = useAboutUsQuery();

  return (
    <Section className={styles.heroSection}>
      <div className="hero-background">
        <img
          src={aboutUs?.heroBackgroundImage}
          alt="Best Charg EV charging infrastructure"
          className={styles.heroImage}
        />
      </div>

      <div className={styles.heroOverlay}></div>

      <Container className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <p className={`16-secondary ${styles.smallHeading}`}>
            {aboutUs?.title}
          </p>

          <h1 className={`h1-white ${styles.heroSubTitle}`}>
            Powering the Transition to
            <br />
            <span> Electric Mobility</span>
          </h1>

          <p className={`24-white ${styles.heroDescription}`}>
            Every business, fleet, and home moving to electric needs charging
            infrastructure it can rely on. Best Charg builds that combining
            hardware, software, and engineering into charging systems that just
            work, wherever you need them.
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
