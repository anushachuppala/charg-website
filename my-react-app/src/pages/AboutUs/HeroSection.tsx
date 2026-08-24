import heroImage from "../../assets/images/About-page/hero-section.png";
import styles from "./HeroSection.module.css";
import { Section, Container, Panel } from "../../shared/layout";

import Button from "../../shared/ui/Button";

function HeroSection() {
  return (
    <Section className={styles.heroSection}>
      <div className="hero-background">
        <img
          src={heroImage}
          alt="Best Charg EV charging infrastructure"
          className={styles.heroImage}
        />
      </div>

      <div className={styles.heroOverlay}></div>

      <Container className={styles.heroContainer}>
        <Panel>
          <div className={styles.heroContent}>
            <p className={styles.smallHeading}>ABOUT BEST CHARG</p>

            <h1 className={`h1-white ${styles.heroTitle}`}>
              Engineering the Future
              <br />
              of <span>EV Charging</span>
              <br />
              Infrastructure
            </h1>

            <p className={`18-white ${styles.heroDescription}`}>
              Best Charg delivers intelligent EV charging infrastructure,
              enterprise-grade software, and integrated mobility ecosystems —
              helping businesses, governments, and communities transition
              confidently toward cleaner transportation.
            </p>

            <div className={styles.heroButtons}>
              <Button variant="secondary" className="btn-one">
                Explore Solutions
              </Button>

              <Button variant="Tertiary" className="btn-two">
                Talk to Our Experts
              </Button>
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default HeroSection;
