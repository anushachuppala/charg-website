import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./Arrival.module.css";

import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui";

import type { BestHub } from "../../features/BestHubPage/dto/bestHub.dto";

gsap.registerPlugin(ScrollTrigger);

type BestHubArrivalProps = {
  bestHub?: BestHub;
};

function Arrival({ bestHub }: BestHubArrivalProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const eyebrow = section.querySelector('[data-gsap="eyebrow"]');
      const heading = section.querySelector('[data-gsap="title"]');

      // Select all icons and item text.
      const iconBoxes = section.querySelectorAll(`.${styles.iconBox}`);
      const titles = section.querySelectorAll(`.${styles.title}`);
      const descriptions = section.querySelectorAll(`.${styles.description}`);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      // 1. Eyebrow animation.
      if (eyebrow) {
        timeline.fromTo(
          eyebrow,
          {
            y: 20,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.45,
          },
        );
      }

      // 2. Main title animation.
      if (heading) {
        timeline.fromTo(
          heading,
          {
            y: 25,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
          },
          "-=0.2",
        );
      }

      // 3. All icons and step numbers animate together.
      if (iconBoxes.length) {
        timeline.fromTo(
          iconBoxes,
          {
            y: 20,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.45,
            stagger: 0,
          },
          "-=0.1",
        );
      }

      // 4. All item titles animate together.
      if (titles.length) {
        timeline.fromTo(
          titles,
          {
            y: 15,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.45,
            stagger: 0,
          },
          "-=0.15",
        );
      }

      // 5. All item descriptions animate together.
      if (descriptions.length) {
        timeline.fromTo(
          descriptions,
          {
            y: 12,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.45,
            stagger: 0,
          },
          "-=0.15",
        );
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, [
    bestHub?.experienceTitle,
    bestHub?.experienceSubtitle,
    bestHub?.experienceItems,
  ]);

  return (
    <Section className={styles.Section}>
      <Container>
        <div ref={sectionRef}>
          <Panel>
            <div className={styles.content}>
              <SectionHeader
                as="div"
                eyebrow={bestHub?.experienceTitle}
                title={bestHub?.experienceSubtitle}
                align="center"
                trailingSpacing="default"
                titleClassName="default"
                animated
              />
            </div>

            <div className={styles.items}>
              {bestHub?.experienceItems.map((item, index) => (
                <div className={styles.item} key={item.title}>
                  <div className={styles.iconBox}>
                    <span className={styles.stepNumber}>{index + 1}</span>

                    <img
                      src={item.icon}
                      alt={item.title}
                      className={styles.icon}
                    />
                  </div>

                  <div className={styles.textContent}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.description}>{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </Container>
    </Section>
  );
}

export default Arrival;
