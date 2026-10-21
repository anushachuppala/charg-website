import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./KeyFeatures.module.css";
import { Section, Container, Panel } from "../../../shared/layout";

import { SectionHeader } from "../section-header";

gsap.registerPlugin(ScrollTrigger);

export type KeyFeaturesItem = {
  icon: string;
  title: string;
  description: string;
};

type KeyFeaturesProps = {
  title: string;
  subtitle: string;
  showHeader?: boolean;
  align?: "start" | "center";
  items: KeyFeaturesItem[];
};

export function KeyFeatures({
  title,
  subtitle,
  showHeader = true,
  align = "center",
  items,
}: KeyFeaturesProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const headerTitle = section.querySelector("h1, h2, h3");
      const headerSubtitle = section.querySelector("p");

      const cards = gsap.utils.toArray<HTMLElement>(`.${styles.card}`, section);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      // 1. Title: bottom to top
      if (showHeader && headerTitle) {
        timeline.fromTo(
          headerTitle,
          { y: 35, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.55,
            ease: "power3.out",
          },
        );
      }

      // 2. Subtitle: bottom to top
      if (showHeader && headerSubtitle) {
        timeline.fromTo(
          headerSubtitle,
          { y: 30, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.2",
        );
      }

      // 3. First three cards: animate together
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

      // 4. Next three cards: animate together
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
  }, [showHeader]);

  return (
    <Section className={styles.section}>
      <Container>
        <Panel>
          <div ref={sectionRef}>
            {showHeader && (
              <SectionHeader title={title} subtitle={subtitle} align={align} />
            )}

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

export default KeyFeatures;
