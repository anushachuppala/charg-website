import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import styles from "./ProductShowCase.module.css";

import { SectionHeader } from "../../shared/ui";
import { Section } from "../../shared/layout";

import ledIcon from "../../assets/products-page/ledIcon.png";
import downloadIcon from "../../assets/products-page/downloadIcon.png";
import robustIcon from "../../assets/products-page/robustIcon.png";
import wifiIcon from "../../assets/products-page/wifiIcon.png";
import certificateIcon from "../../assets/products-page/certificateIcon.png";
import weatherIcon from "../../assets/products-page/weather.png";
import ariesCharger from "../../assets/products-page/ariesCharger.png";
import oneSide from "../../assets/products-page/oneSide.png";
import anotherSide from "../../assets/products-page/anotherSide.png";
import backSide from "../../assets/products-page/backSide.png";

const products = [
  {
    id: 1,
    image: ariesCharger,
    alt: "Aries EV charger",
  },
  {
    id: 2,
    image: oneSide,
    alt: "Aries EV charger side view",
  },
  {
    id: 3,
    image: backSide,
    alt: "Aries EV charger back view",
  },
  {
    id: 4,
    image: anotherSide,
    alt: "Aries EV charger another side view",
  },
];

type Feature = {
  icon: string;
  title: string;
  description: string;
  offset: number;
};

const leftFeatures: Feature[] = [
  {
    icon: ledIcon,
    title: "LED Status Indicator",
    description: "Glanceable charging state from across lot",
    offset: 44,
  },
  {
    icon: wifiIcon,
    title: "Smart Communication",
    description: "OCPP 1.6J - Wifi - 4G - Ethernet.",
    offset: 0,
  },
  {
    icon: downloadIcon,
    title: "Easy Installation",
    description: "Easy plug-and-play setup",
    offset: 98,
  },
];

const rightFeatures: Feature[] = [
  {
    icon: certificateIcon,
    title: "Robust Safety",
    description: "Built like a shield with multiple safety protections",
    offset: 55,
  },
  {
    icon: robustIcon,
    title: "Certified Excellence",
    description: "ARAI & CE Certified EV Charger",
    offset: 90,
  },
  {
    icon: weatherIcon,
    title: "Weather Resistant",
    description: "IP65-rated enclosure for reliable outdoor performance.",
    offset: 0,
  },
];

function FeatureCard({ icon, title, description, offset }: Feature) {
  const rippleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!rippleRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        rippleRef.current,
        {
          scale: 1,
          opacity: 0.75,
        },
        {
          scale: 3.5,
          opacity: 0,
          duration: 1.8,
          ease: "power1.out",
          repeat: -1,
          repeatDelay: 0.05,
        },
      );
    }, rippleRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={styles.feature}
      style={{ "--offset": `${offset}px` } as React.CSSProperties}
      tabIndex={0}
    >
      <span className={styles.dotWrapper} aria-hidden="true">
        <span ref={rippleRef} className={styles.ripple} />
        <span className={styles.dot} />
      </span>

      <article className={styles.card}>
        <img src={icon} className={styles.cardIcon} />

        <h3 className={styles.cardTitle}>{title}</h3>

        <p className={styles.cardText}>{description}</p>
      </article>
    </div>
  );
}

function ProductShowCase() {
  const [index, setIndex] = useState(0);

  const product = products[index];

  const goPrev = () => {
    setIndex(
      (previousIndex) =>
        (previousIndex - 1 + products.length) % products.length,
    );
  };

  const goNext = () => {
    setIndex((previousIndex) => (previousIndex + 1) % products.length);
  };

  return (
    <Section>
      <SectionHeader
        as="div"
        eyebrow="PRODUCT SHOWCASE"
        title="Every Detail, Engineered."
        subtitle="Hover or tap the hotspots to explore the precision-built features that make Aries the charger of choice."
      />

      <div className={styles.showcase}>
        <div className={styles.column}>
          {leftFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

        <div className={styles.stage}>
          <div className={styles.chargerImage}>
            <img
              src={product.image}
              alt={product.alt}
              className={styles.ariesCharger}
            />
          </div>
          
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.arrow}
              onClick={goPrev}
              aria-label="Previous product"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M15 5l-7 7 7 7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className={styles.arrow}
              onClick={goNext}
              aria-label="Next product"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M9 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.column}>
          {rightFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ProductShowCase;
