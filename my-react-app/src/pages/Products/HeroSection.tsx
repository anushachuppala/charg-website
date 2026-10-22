import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import styles from "./HeroSection.module.css";

import wifiIcon2 from "../../assets/products-page/wifiIcon2.png";
import powerIcon from "../../assets/products-page/powerIcon.png";
import cloudIcon from "../../assets/products-page/cloudIcon.png";
import securityIcon from "../../assets/products-page/securityIcon.png";

import { Section, Container, Panel } from "../../shared/layout";
import Button from "../../shared/ui/Button";
import type { Products } from "../../features/ProductsPage/dto/products.dto";

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

type HeroSectionProps = {
  products?: Products;
};

function HeroSection({ products }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const imageContent = imageContentRef.current;

    if (!hero || !imageContent) return;

    const ctx = gsap.context(() => {
      const eyebrow = hero.querySelector(`.${styles.eyebrow}`);
      const title = hero.querySelector(`.${styles.title}`);
      const description = hero.querySelector(`.${styles.description}`);
      const buttons = hero.querySelector(`.${styles.buttonContainer}`);
      const stats = hero.querySelector(`.${styles.stats}`);
      const image = imageContent.querySelector(`.${styles.ariesCharger}`);
      const badges = imageContent.querySelectorAll(`.${styles.badge}`);

      const textElements = [eyebrow, title, description, buttons, stats].filter(
        (element): element is Element => element !== null,
      );

      // Initial states
      gsap.set(textElements, {
        y: 35,
        autoAlpha: 0,
      });

      gsap.set(image, {
        x: 70,
        autoAlpha: 0,
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      // 1. Eyebrow, title, description, buttons and stats
      //    move from bottom to top, one after another.
      timeline.to(textElements, {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        stagger: 0.18,
      });

      // 2. Charger image moves from right to left.
      timeline.to(
        image,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.2",
      );

      // 3. Keep the existing floating badge animation.
      gsap.to(badges, {
        y: -8,
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className={styles.heroBackdrop}>
      <Section>
        <Container>
          <Panel>
            <div className={styles.mainGrid}>
              {/* Left content */}
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

              {/* Right image and floating badges */}
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
