import { useEffect, useState } from "react";
// useState stores the API data.

import heroImage from "../../assets/images/About-page/hero-section.png";
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

        setAboutUs(data[0]);
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
          src={aboutUs?.heroBackgroundImage || heroImage}
          alt="Best Charg EV charging infrastructure"
          className={styles.heroImage}
        />
      </div>

      <div className={styles.heroOverlay}></div>

      <Container className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <p className={styles.smallHeading}>
            {aboutUs?.heroTitle || "ABOUT BEST CHARG"}
          </p>

          <h1 className={`h1-white ${styles.heroTitle}`}>
            {aboutUs?.heroSubtitle || (
              <>
                Engineering the Future
                <br />
                of EV Charging Infrastructure
              </>
            )}
          </h1>

          <p className={`18-white ${styles.heroDescription}`}>
            {aboutUs?.heroDescription ||
              "Best Charg delivers intelligent EV charging infrastructure, enterprise-grade software, and integrated mobility ecosystems — helping businesses, governments, and communities transition confidently toward cleaner transportation."}
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
      </Container>
    </Section>
  );
}

export default HeroSection;
