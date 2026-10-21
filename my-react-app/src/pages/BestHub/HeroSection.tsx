import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import styles from "./HeroSection.module.css";
import { Section, Container } from "../../shared/layout";
import Button from "../../shared/ui/Button";

import type { BestHub } from "../../features/BestHubPage/dto/bestHub.dto";

type HeroSectionProps = {
  bestHub?: BestHub;
};

function HeroSection({ bestHub }: HeroSectionProps) {
  const heroRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Small heading appears first
      timeline.fromTo(
        `.${styles.smallHeading}`,
        {
          y: 25,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
        },
      );

      // Main heading reveals line by line
      timeline.fromTo(
        `.${styles.heroTitle} > span`,
        {
          y: 35,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.25,
        },
        "-=0.25",
      );

      // Description moves up and fades in
      timeline.fromTo(
        `.${styles.heroDescription}`,
        {
          y: 25,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
        },
        "-=0.3",
      );

      // Buttons appear one after another
      timeline.fromTo(
        `.${styles.heroButtons} > *`,
        {
          y: 20,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.18,
        },
        "-=0.2",
      );
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <Section className={styles.section}>
      <section ref={heroRef} className={styles.heroInner}>
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
              work, relax, and connect—creating vibrant mobility destinations
              for people and businesses.
            </p>

            <div className={styles.heroButtons}>
              <Button variant="secondary">Learn More</Button>
              <Button variant="outline">Partner with Us</Button>
            </div>
          </div>
        </Container>
      </section>
    </Section>
  );
}

export default HeroSection;
