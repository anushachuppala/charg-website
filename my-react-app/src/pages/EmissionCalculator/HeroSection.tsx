import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import styles from "./HeroSection.module.css";
import heroImage from "../../assets/Emission-calculator/heroImage.png";

import { Container, Panel } from "../../shared/layout";
import Button from "../../shared/ui/Button";

const STATS = [
  { value: "9", label: "Fuel types" },
  { value: "<10s", label: "To calculate" },
  { value: "100%", label: "Free & private" },
];

interface HeroSectionProps {
  onCalculateNow: () => void;
  onHowItWorks: () => void;
}

function HeroSection({ onCalculateNow, onHowItWorks }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      // Animate the text content first.
      timeline
        .from(`.${styles.eyebrow}`, {
          y: 20,
          opacity: 0,
          duration: 0.4,
        })
        .from(
          `.${styles.title}`,
          {
            y: 25,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.15",
        )
        .from(
          `.${styles.description}`,
          {
            y: 20,
            opacity: 0,
            duration: 0.45,
          },
          "-=0.2",
        )
        .from(
          `.${styles.buttonContainer}`,
          {
            y: 15,
            opacity: 0,
            duration: 0.4,
          },
          "-=0.15",
        )
        .from(
          `.${styles.statCard}`,
          {
            y: 15,
            opacity: 0,
            duration: 0.35,
            stagger: 0.1,
          },
          "-=0.1",
        )
        // Image moves from right to left after the content.
        .from(
          `.${styles.heroImage}`,
          {
            x: 100,
            opacity: 0,
            duration: 0.7,
            clearProps: "transform",
          },
          "+=0.1",
        );
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.heroBackdrop}>
      <Container>
        <Panel>
          <div className={styles.mainGrid} ref={heroRef}>
            {/* Left content */}
            <div className={styles.textContent}>
              <p className={styles.eyebrow}>Powering cleaner journeys</p>

              <h1 className={styles.title}>Emission Calculator</h1>

              <p className={styles.description}>
                Calculate your vehicle's carbon emissions in seconds and <br />
                discover how switching to electric mobility can reduce your{" "}
                <br />
                environmental impact.
              </p>

              <div className={styles.buttonContainer}>
                <div onClick={onCalculateNow}>
                  <Button variant="secondary">Calculate Now</Button>
                </div>

                <div onClick={onHowItWorks}>
                  <Button variant="primary">How it works</Button>
                </div>
              </div>

              <ul className={styles.stats}>
                {STATS.map((stat) => (
                  <li key={stat.value} className={styles.statCard}>
                    <h3 className={styles.statValue}>{stat.value}</h3>
                    <p className={styles.statLabel}>{stat.label}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <img
              src={heroImage}
              className={styles.heroImage}
              alt="Electric mobility and emission calculator"
            />
          </div>
        </Panel>
      </Container>
    </div>
  );
}

export default HeroSection;
