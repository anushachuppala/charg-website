import { useEffect, useState } from "react";
// useState stores the API data.

import styles from "./HeroSection.module.css";

import { Section, Container } from "../../shared/layout";
import Button from "../../shared/ui/Button";

import { getAboutUs } from "../../features/AboutUsPage/api/aboutUs.http";
import type { AboutUsWire } from "../../features/AboutUsPage/api/aboutUs.api.types";

function HeroSection() {
  const [aboutUs, setAboutUs] = useState<AboutUsWire | null>(null);

  useEffect(() => {
    async function fetchAboutUs() {
      try {
        const data = await getAboutUs();

        setAboutUs(data);
      } catch (error) {
        console.error("Failed to fetch About Us data:", error);
      }
    }

    fetchAboutUs();
  }, []);
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
            ABOUT BEST CHARG
          </p>

          <h1 className={`h1-white ${styles.heroSubTitle}`}>
            Powering the Transition to
            <br />
            <span> Electric Mobility</span>
          </h1>

          <p className={`24-white ${styles.heroDescription}`}>
            "Best Charg delivers intelligent EV charging infrastructure,
            enterprise-grade software, and integrated mobility ecosystems —
            helping businesses, governments, and communities transition
            confidently toward cleaner transportation."
          </p>

          <div className={styles.heroButtons}>
            <Button variant="secondary" className="btn-one">
              Know More
            </Button>
            {/* 
            <Button variant="Tertiary" className="btn-two">
              Talk to Our Experts
            </Button> */}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default HeroSection;
