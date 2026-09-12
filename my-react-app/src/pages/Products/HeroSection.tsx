import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import styles from "./HeroSection.module.css";

import ariesCharger from "../../assets/products-page/ariesCharger.png";
import wifiIcon2 from "../../assets/products-page/wifiIcon2.png";
import powerIcon from "../../assets/products-page/powerIcon.png";
import cloudIcon from "../../assets/products-page/cloudIcon.png";
import securityIcon from "../../assets/products-page/securityIcon.png";

import { Section, Container, Panel } from "../../shared/layout";
import Button from "../../shared/ui/Button";

const STATS = [
  { value: "7 kW", label: "AC Output" },
  { value: "IP54", label: "Weatherproof" },
  { value: "OCPP", label: "1.6J Ready" },
];

const BADGES = [
  {
    text: "7kW AC Charging",
    icon: powerIcon,
    position: "topLeft",
    isImage: true,
  },
  {
    text: "Smart Connectivity",
    icon: wifiIcon2,
    position: "topRight",
    isImage: true,
  },
  {
    text: "Advanced Safety",
    icon: securityIcon,
    position: "bottomLeft",
    isImage: true,
  },
  {
    text: "Weather Resistant",
    icon: cloudIcon,
    position: "bottomRight",
    isImage: true,
  },
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
              <div className={styles.backgroundLayout}></div>
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
                    {badge.isImage ? (
                      <img src={badge.icon} alt="" />
                    ) : (
                      badge.icon
                    )}
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
