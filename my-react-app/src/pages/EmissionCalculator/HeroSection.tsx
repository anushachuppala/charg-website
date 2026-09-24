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

function HeroSection() {
  const imageContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(`.${styles.badge}`, {
        y: -8,
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, imageContentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.heroBackdrop}>
      <Container>
        <Panel>
          <div className={styles.mainGrid}>
            {/* left content */}
            <div className={styles.textContent}>
              <p className={styles.eyebrow}>Powering cleaner journeys</p>

              <h1 className={styles.title}>Emission Calculator</h1>

              <p className={styles.description}>
                Calculate your vehicle's carbon emissions in seconds and
                discover <br />
                how switching to electric mobility can reduce your environmental{" "}
                <br />
                impact.
              </p>

              <div className={styles.buttonContainer}>
                <Button variant="secondary">Calculate Now</Button>
                <Button variant="primary">How it works</Button>
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
            <div ref={imageContentRef} className={styles.imageContent}>
              <img src={heroImage} className={styles.heroImage} />
            </div>
          </div>
        </Panel>
      </Container>
    </div>
  );
}

export default HeroSection;
