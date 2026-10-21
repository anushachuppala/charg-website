import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./BusinessImpact.module.css";
import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui";

import type { BestHub } from "../../features/BestHubPage/dto/bestHub.dto";

gsap.registerPlugin(ScrollTrigger);

type BusinessImpactProps = {
  bestHub?: BestHub;
};

function BusinessImpact({ bestHub }: BusinessImpactProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      const eyebrow = section.querySelector('[data-gsap="eyebrow"]');
      const title = section.querySelector('[data-gsap="title"]');
      const subtitle = section.querySelector('[data-gsap="subtitle"]');

      if (eyebrow) {
        timeline.fromTo(
          eyebrow,
          { y: 25, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.5 },
        );
      }

      if (title) {
        timeline.fromTo(
          title,
          { y: 30, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6 },
          "-=0.25",
        );
      }

      if (subtitle) {
        timeline.fromTo(
          subtitle,
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.5 },
          "-=0.25",
        );
      }
    }, section);

    return () => ctx.revert();
  }, [bestHub]);

  return (
    <Section className={styles.section}>
      <Container>
        <div ref={sectionRef}>
          <Panel>
            <div className={styles.mainWrapper}>
              <div className={styles.headings}>
                <SectionHeader
                  as="div"
                  eyebrow={bestHub?.resultTitle}
                  title={bestHub?.resultSubtitle}
                  subtitle={bestHub?.resultDescription}
                  align="center"
                  trailingSpacing="none"
                  animated
                />
              </div>

              <div className={styles.cards}>
                {bestHub?.resultItems.map((item) => (
                  <article className={styles.card} key={item.title}>
                    <span className={styles.iconWrapper}>
                      <img
                        src={item.icon}
                        className={styles.icon}
                        alt={item.title}
                      />
                    </span>

                    <div className={styles.content}>
                      <h2 className={styles.eyebrow}>{item.value}</h2>
                      <h3 className={styles.cardTitle}>{item.title}</h3>

                      <p className={styles.cardDescription}>{item.subtitle}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Panel>
        </div>
      </Container>
    </Section>
  );
}

export default BusinessImpact;
