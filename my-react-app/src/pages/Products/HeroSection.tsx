import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import styles from "./HeroSection.module.css";

import wifiIcon2 from "../../assets/products-page/wifiIcon2.png";
import powerIcon from "../../assets/products-page/powerIcon.png";
import cloudIcon from "../../assets/products-page/cloudIcon.png";
import securityIcon from "../../assets/products-page/securityIcon.png";

import { Section, Container, Panel } from "../../shared/layout";
import Button from "../../shared/ui/Button";

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

import type { Products } from "../../features/ProductsPage/dto/products.dto";

type HeroSectionProps = {
  products?: Products;
};

function HeroSection({ products }: HeroSectionProps) {
  console.log("Hero Products:", products);
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
                <p className={styles.eyebrow}>{products?.title}</p>

                <h1 className={styles.title}>{products?.heroTitle || ""}</h1>

                <p className={styles.description}>
                  {products?.heroDescription || ""}
                </p>

                <div className={styles.buttonContainer}>
                  <Button variant="secondary">Get a Quote</Button>
                  <Button variant="primary">Download Datasheet</Button>
                </div>

                <ul className={styles.stats}>
                  {products?.heroSpecs.map((stat) => (
                    <li key={stat.answer} className={styles.statCard}>
                      <p className={styles.statLabel}>{stat.label}</p>
                      <h3 className={styles.statValue}>{stat.answer}</h3>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div ref={imageContentRef} className={styles.imageContent}>
                <img
                  src={products?.overviewImages?.[0]}
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
