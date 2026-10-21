import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./SustainableGrowth.module.css";
import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader, WhoIsThisFor } from "../../shared/ui";

import type { BestHub } from "../../features/BestHubPage/dto/bestHub.dto";

gsap.registerPlugin(ScrollTrigger);

type SustainableGrowthpProps = {
  bestHub?: BestHub;
};

function SustainableGrowth({ bestHub }: SustainableGrowthpProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      // 1. Image moves from left to right
      timeline.fromTo(
        `.${styles.sustainableImage}`,
        {
          x: -70,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.4,
          ease: "power2.out",
        },
      );
      // 2. Eyebrow animation
      timeline.fromTo(
        '[data-gsap="eyebrow"]',
        {
          y: 30,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
        },
        "-=0.5",
      );

      // 3. Title animation
      timeline.fromTo(
        '[data-gsap="title"]',
        {
          y: 35,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
        },
        "-=0.3",
      );

      // 4. Subtitle animation
      timeline.fromTo(
        '[data-gsap="subtitle"]',
        {
          y: 25,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
        },
        "-=0.3",
      );

      // 5. WhoIsThisFor content animation
      timeline.fromTo(
        `.${styles.content} > *:last-child`,
        {
          y: 20,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
        },
        "-=0.2",
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <Section className={styles.Section}>
      <Container>
        <div ref={sectionRef}>
          <Panel>
            <div className={styles.mainWrapper}>
              {/* left image */}
              <div className={styles.imageWrapper}>
                <img
                  src={bestHub?.growthImage}
                  alt="sustainable-image"
                  className={styles.sustainableImage}
                />
              </div>

              <div className={styles.content}>
                <SectionHeader
                  as="div"
                  eyebrow={bestHub?.growthTitle}
                  title={bestHub?.growthSubtitle}
                  subtitle={bestHub?.growthDescription}
                  align="start"
                  trailingSpacing="default"
                  subtitleClassName="none"
                  animated
                />

                <WhoIsThisFor
                  items={
                    bestHub?.growthItems.map((item) => ({
                      icon: item.icon,
                      title: item.title,
                      description: item.subtitle,
                    })) ?? []
                  }
                  showHeader={false}
                  columns={2}
                  embedded={true}
                />
              </div>
            </div>
          </Panel>
        </div>
      </Container>
    </Section>
  );
}

export default SustainableGrowth;
