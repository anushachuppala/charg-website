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
    position: "bottomRight",
    isImage: true,
  },
  {
    text: "Weather Resistant",
    icon: cloudIcon,
    position: "bottomLeft",
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
    <div className={styles.heroBackdrop}>
      <Section>
        <Container>
          <Panel>
            <div className={styles.mainGrid}>
              {/* left content */}
              <div className={styles.textContent}>
                <p className={styles.eyebrow}>Aries 7KW</p>

                <h1 className={styles.title}>
                  Smart AC Charging for Everyday EVs
                </h1>

                <p className={styles.description}>
                  The AC EV Charger Aries 7kW delivers reliable, intelligent,
                  and future <br />
                  ready charging for homes, workplaces, commercial properties,
                  and <br />
                  public EV infrastructure.
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
    </div>
  );
}

export default HeroSection;
