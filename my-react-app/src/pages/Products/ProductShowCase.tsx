import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./ProductShowCase.module.css";

import { SectionHeader } from "../../shared/ui";
import { Section } from "../../shared/layout";

import ledIcon from "../../assets/products-page/ledIcon.png";
import downloadIcon from "../../assets/products-page/downloadIcon.png";
import robustIcon from "../../assets/products-page/robustIcon.png";
import wifiIcon from "../../assets/products-page/wifiIcon.png";
import certificateIcon from "../../assets/products-page/certificateIcon.png";
import weatherIcon from "../../assets/products-page/weather.png";

import type { Products } from "../../features/ProductsPage/dto/products.dto";

gsap.registerPlugin(ScrollTrigger);

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
    const ripple = rippleRef.current;

    if (!ripple) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ripple,
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
    }, ripple);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={styles.feature}
      style={{ "--offset": `${offset}px` } as CSSProperties}
      tabIndex={0}
    >
      <span className={styles.dotWrapper} aria-hidden="true">
        <span ref={rippleRef} className={styles.ripple} />
        <span className={styles.dot} />
      </span>

      <article className={styles.card}>
        <img src={icon} className={styles.cardIcon} alt="" />

        <h3 className={styles.cardTitle}>{title}</h3>

        <p className={styles.cardText}>{description}</p>
      </article>
    </div>
  );
}

type ProductShowCaseProps = {
  products?: Products;
};

function ProductShowCase({ products }: ProductShowCaseProps) {
  const [index, setIndex] = useState(0);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const overviewImages = products?.overviewImages ?? [];

  const goPrev = () => {
    if (overviewImages.length === 0) return;

    setIndex(
      (previousIndex) =>
        (previousIndex - 1 + overviewImages.length) % overviewImages.length,
    );
  };

  const goNext = () => {
    if (overviewImages.length === 0) return;

    setIndex((previousIndex) => (previousIndex + 1) % overviewImages.length);
  };

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      // SectionHeader is the first child inside the wrapper.
      const header = section.firstElementChild;

      const paragraphs = header?.querySelectorAll("p");

      const title = header?.querySelector("h1, h2, h3, h4, h5, h6");

      // Assumes the eyebrow and subtitle render as paragraphs.
      const eyebrow = paragraphs?.[0] ?? null;
      const subtitle = paragraphs?.[1] ?? null;

      const headerElements = [eyebrow, title, subtitle].filter(
        (element): element is Element => element !== null,
      );

      const cards = section.querySelectorAll<HTMLElement>(`.${styles.feature}`);

      // Initial state for the heading elements.
      gsap.set(headerElements, {
        y: 35,
        autoAlpha: 0,
      });

      // Initial state for all six feature cards.
      gsap.set(cards, {
        x: -60,
        autoAlpha: 0,
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      // 1. Eyebrow, title and subtitle move from bottom to top.
      timeline.to(headerElements, {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        stagger: 0.15,
      });

      // 2. All six feature cards move from left to right together.
      timeline.to(
        cards,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0,
          ease: "power2.out",
        },
        "+=0.15",
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <Section>
      <div ref={sectionRef}>
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
              {overviewImages.length > 0 && (
                <img
                  src={overviewImages[index]}
                  alt={`Aries EV charger view ${index + 1}`}
                  className={styles.ariesCharger}
                />
              )}
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
      </div>
    </Section>
  );
}

export default ProductShowCase;
