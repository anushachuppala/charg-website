import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import styles from "./HeroSection.module.css";

import ariesCharger from "../../assets/products-page/ariesCharger.png";

import { Section, Container, Panel } from "../../shared/layout";
import Button from "../../shared/ui/Button";

const STATS = [
  { value: "7 kW", label: "AC Output" },
  { value: "IP54", label: "Weatherproof" },
  { value: "OCPP", label: "1.6J Ready" },
];

const BADGES = [
  { text: "7kW AC Charging", icon: "⚡", position: "topLeft" },
  { text: "Smart Connectivity", icon: "📶", position: "topRight" },
  { text: "Advanced Safety", icon: "🛡", position: "bottomLeft" },
  { text: "Weather Resistant", icon: "🌧", position: "bottomRight" },
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
    <Section>
      <Container>
        <Panel>
          <div className={styles.mainGrid}>
            {/* left content */}
            <div className={styles.textContent}>
              <p className={styles.eyebrow}>Aries 7KW</p>

              <h1 className={styles.title}>
                Powering India&rsquo;s <br />
                <span className={styles.titleAccent}>EV Infrastructure</span>
                <br />
                Network
              </h1>

              <p className={styles.description}>
                The Aries 7kW AC Charger delivers reliable, intelligent, and
                future-ready charging for homes, workplaces, commercial
                properties, and public EV infrastructure.
              </p>

              <div className={styles.buttonContainer}>
                <Button variant="secondary">Get a Quote</Button>
                <Button variant="primary">Download Datasheet</Button>
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
              <img
                src={ariesCharger}
                alt="Aries 7kW AC charger"
                className={styles.ariesCharger}
              />

              {BADGES.map((badge) => (
                <span
                  key={badge.text}
                  className={`${styles.badge} ${styles[badge.position]}`}
                >
                  <span className={styles.badgeIcon} aria-hidden="true">
                    {badge.icon}
                  </span>
                  {badge.text}
                </span>
              ))}
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default HeroSection;
