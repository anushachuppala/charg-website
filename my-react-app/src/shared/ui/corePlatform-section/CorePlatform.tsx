import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./CorePlatform.module.css";

import { Section, Container, Panel } from "../../../shared/layout";

gsap.registerPlugin(ScrollTrigger);

export type CorePlatformItem = {
  icon: string;
  title: string;
  description: string;
};

type CorePlatformProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: CorePlatformItem[];
  align?: "start" | "center";
  columns?: 6;
};

export function CorePlatform({
  eyebrow,
  title,
  subtitle,
  items,
  align = "center",
  columns = 6,
}: CorePlatformProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const eyebrowElement = section.querySelector(`.${styles.eyebrow}`);
      const titleElement = section.querySelector(`.${styles.title}`);
      const subtitleElement = section.querySelector(`.${styles.subtitle}`);
      const cards = gsap.utils.toArray<HTMLElement>(`.${styles.card}`, section);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      // 1. Eyebrow: bottom to top
      if (eyebrowElement) {
        timeline.fromTo(
          eyebrowElement,
          { y: 25, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.45,
            ease: "power3.out",
          },
        );
      }

      // 2. Title: bottom to top
      if (titleElement) {
        timeline.fromTo(
          titleElement,
          { y: 35, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=0.2",
        );
      }

      // 3. Subtitle: bottom to top
      if (subtitleElement) {
        timeline.fromTo(
          subtitleElement,
          { y: 25, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.2",
        );
      }

      // 4. First row: first three cards together
      if (cards.length > 0) {
        timeline.fromTo(
          cards.slice(0, 3),
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.55,
            ease: "power3.out",
            stagger: 0,
          },
          "-=0.05",
        );
      }

      // 5. Second row: next three cards together
      if (cards.length > 3) {
        timeline.fromTo(
          cards.slice(3, 6),
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.55,
            ease: "power3.out",
            stagger: 0,
          },
          "+=0.05",
        );
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Section className={styles.section}>
      <Container>
        <Panel>
          <div ref={sectionRef}>
            <div className={styles.header}>
              <h4 className={styles.eyebrow}>{eyebrow}</h4>

              <h2 className={styles.title}>{title}</h2>

              <p className={styles.subtitle}>{subtitle}</p>
            </div>

            <div className={styles.cards}>
              {items.map((item) => (
                <article className={styles.card} key={item.title}>
                  <span className={styles.iconWrapper}>
                    <img
                      src={item.icon}
                      className={styles.icon}
                      alt={item.title}
                    />
                  </span>

                  <div className={styles.content}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>

                    <p className={styles.cardDescription}>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default CorePlatform;
