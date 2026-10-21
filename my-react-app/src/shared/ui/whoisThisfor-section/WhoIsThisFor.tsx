import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./WhoIsThisFor.module.css";

import { Section, Container, Panel } from "../../layout";
import { SectionHeader } from "../section-header";

gsap.registerPlugin(ScrollTrigger);

export type WhoIsThisForItem = {
  icon: string;
  title: string;
  description: string;
};

type WhoIsThisForProps = {
  items: WhoIsThisForItem[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
  align?: "start" | "center";
  columns?: 2 | 3 | 4 | 6;
  cardColumns?: 2 | 3 | 4 | 6;
  iconWrapperSize?: number;
  iconSize?: number;
  embedded?: boolean;
};

export function WhoIsThisFor({
  items,
  eyebrow,
  title,
  subtitle,
  showHeader = true,
  align = "center",
  columns = 3,
  cardColumns,
  iconWrapperSize,
  iconSize,
  embedded = false,
}: WhoIsThisForProps) {
  const resolvedCardColumns = cardColumns ?? columns;
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) return;

    const ctx = gsap.context(() => {
      const header = sectionElement.querySelector("header");
      const headerEyebrow = header?.querySelector('[class*="eyebrow"]');
      const headerTitle = header?.querySelector("h1, h2, h3");
      const cards = sectionElement.querySelectorAll(`.${styles.card}`);

      // Eyebrow and title animate together
      const headerTimeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
          duration: 0.6,
        },
      });

      if (headerEyebrow) {
        headerTimeline.fromTo(
          headerEyebrow,
          { y: 30, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 },
        );
      }

      if (headerTitle) {
        headerTimeline.fromTo(
          headerTitle,
          { y: 30, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 },
          "<",
        );
      }

      // Cards animate when the user scrolls to this section
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            y: 40,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            stagger: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionElement,
              start: "top 75%",
              once: true,
            },
          },
        );
      }
    }, sectionElement);

    return () => ctx.revert();
  }, [items, showHeader]);

  const cardsContent = (
    <>
      {showHeader && (
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          align={align}
          trailingSpacing="default"
        />
      )}

      <div
        className={styles.cards}
        style={
          {
            "--card-columns": resolvedCardColumns,
          } as React.CSSProperties
        }
      >
        {items.map((item) => (
          <article className={styles.card} key={item.title}>
            <span
              className={styles.iconWrapper}
              style={{ width: iconWrapperSize, height: iconWrapperSize }}
            >
              <img
                src={item.icon}
                className={styles.icon}
                alt={item.title}
                style={{ width: iconSize, height: iconSize }}
              />
            </span>

            <div className={styles.content}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );

  if (embedded) {
    return <div ref={sectionRef}>{cardsContent}</div>;
  }

  return (
    <Section className={styles.WhoIsSection}>
      <Container>
        <Panel>
          <div ref={sectionRef}>{cardsContent}</div>
        </Panel>
      </Container>
    </Section>
  );
}
