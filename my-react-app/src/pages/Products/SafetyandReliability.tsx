import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./SafetyAndReliability.module.css";
import { Section } from "../../shared/layout";

import safetyImage from "../../assets/products-page/safetyImage.jpg";
import image1 from "../../assets/products-page/image1.png";
import image2 from "../../assets/products-page/image2.png";
import image3 from "../../assets/products-page/image3.png";
import image4 from "../../assets/products-page/image4.png";
import image5 from "../../assets/products-page/image5.png";
import image6 from "../../assets/products-page/image6.png";

import type { Products } from "../../features/ProductsPage/dto/products.dto";

gsap.registerPlugin(ScrollTrigger);

function CheckIcon() {
  return (
    <svg
      className={styles.check}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="4 12.5 9.5 18 20 6.5" />
    </svg>
  );
}

type SafetyAndReliabilityProps = {
  products?: Products;
};

function SafetyAndReliability({ products }: SafetyAndReliabilityProps) {
  const layoutRef = useRef<HTMLDivElement | null>(null);

  const safetyTags = products?.safetyTags?.length
    ? products.safetyTags
    : ["IEC 61851", "CE", "BIS", "RoHS", "IP54"];

  const fallbackIcons = [image1, image2, image3, image4, image5, image6];

  useLayoutEffect(() => {
    const layout = layoutRef.current;

    if (!layout) return;

    const ctx = gsap.context(() => {
      const heading = layout.querySelector(`.${styles.heading}`);
      const title = layout.querySelector(`.${styles.title}`);
      const description = layout.querySelector(`.${styles.description}`);
      const badges = layout.querySelector(`.${styles.badges}`);

      const contentElements = [heading, title, description, badges].filter(
        (element): element is Element => element !== null,
      );

      const cards = Array.from(
        layout.querySelectorAll<HTMLElement>(`.${styles.card}`),
      );

      // First column: cards at even indexes.
      const firstColumn = cards.filter((_, index) => index % 2 === 0);

      // Second column: cards at odd indexes.
      const secondColumn = cards.filter((_, index) => index % 2 !== 0);

      // Initial positions for the content.
      gsap.set(contentElements, {
        y: 35,
        autoAlpha: 0,
      });

      // Initial positions for all cards.
      gsap.set(cards, {
        x: 60,
        autoAlpha: 0,
      });

      // Run the animation when the section enters the viewport.
      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
        scrollTrigger: {
          trigger: layout,
          start: "top 75%",
          once: true,
        },
      });

      // 1. Heading, title, description and badges.
      // Move upward in sequence.
      timeline.to(contentElements, {
        y: 0,
        autoAlpha: 1,
        duration: 0.55,
        stagger: 0.15,
      });

      // 2. First column of cards.
      // Move from right to left.
      if (firstColumn.length > 0) {
        timeline.to(
          firstColumn,
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.6,
            stagger: 0.12,
          },
          "+=0.1",
        );
      }

      // 3. Second column of cards.
      // Starts after the first column finishes.
      if (secondColumn.length > 0) {
        timeline.to(
          secondColumn,
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.6,
            stagger: 0.12,
          },
          "+=0.1",
        );
      }
    }, layout);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Section className={styles.Section}>
      <img
        src={safetyImage}
        aria-hidden="true"
        className={styles.safetyImage}
      />

      <div className={styles.layout} ref={layoutRef}>
        <div className={styles.content}>
          <p className={styles.heading}>Safety &amp; Reliability</p>

          <h2 className={styles.title}>
            {products?.safetyTitle ||
              "Six layers of protection. Zero compromise."}
          </h2>

          <p className={styles.description}>
            {products?.safetyDescription ||
              "Every Aries unit ships with enterprise-grade protection\ncircuitry validated to international safety standards  so your\nassets, your users, and your vehicles stay safe."}
          </p>

          <ul className={styles.badges}>
            {safetyTags.map((item) => (
              <li key={item} className={styles.badge}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ul className={styles.grid}>
          {products?.safetyItems?.map((feature, index) => (
            <li key={feature.title} className={styles.card}>
              <span className={styles.iconWrap}>
                <img
                  src={
                    feature.icon || fallbackIcons[index % fallbackIcons.length]
                  }
                  className={styles.icon}
                />
              </span>

              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>

                <p className={styles.cardDescription}>{feature.description}</p>
              </div>

              <CheckIcon />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default SafetyAndReliability;
