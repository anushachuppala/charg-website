import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./HeroSection.module.css";

import { Section, Container } from "../../shared/layout";
import Button from "../../shared/ui/Button";

import type { AboutUs } from "../../features/AboutUsPage/dto/aboutUs.dto";

gsap.registerPlugin(ScrollTrigger);

type HeroSectionProps = {
  aboutUs?: AboutUs;
};

function HeroSection({ aboutUs }: HeroSectionProps) {
  const heroContentRef = useRef<HTMLDivElement>(null);

  console.log("Hero image:", aboutUs?.heroBackgroundImage);

  useLayoutEffect(() => {
    const heroContent = heroContentRef.current;
    if (!heroContent) return;

    const ctx = gsap.context(() => {
      const elements = [
        heroContent.querySelector(".hero-eyebrow"),
        heroContent.querySelector(`.${styles.heroSubTitle}`),
        heroContent.querySelector(`.${styles.heroDescription}`),
        heroContent.querySelector(`.${styles.heroButtons}`),
      ].filter((element): element is Element => element !== null);

      if (elements.length === 0) return;

      gsap.fromTo(
        elements,
        {
          y: 35,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroContent,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, heroContent);

    return () => ctx.revert();
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
        <div className={styles.heroContent} ref={heroContentRef}>
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
