import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./PowerCharge.module.css";

import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui";

import type { Solutions } from "../../features/SolutionsPage/dto/solutions.dto";

gsap.registerPlugin(ScrollTrigger);

type PowerChargeProps = {
  solutions?: Solutions;
};

function PowerCharge({ solutions }: PowerChargeProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const eyebrow = section.querySelector('[data-gsap="eyebrow"]');
      const title = section.querySelector('[data-gsap="title"]');
      const subtitle = section.querySelector('[data-gsap="subtitle"]');

      const steps = gsap.utils.toArray<HTMLElement>(`.${styles.step}`, section);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      // 1. Eyebrow: bottom to top
      if (eyebrow) {
        timeline.fromTo(
          eyebrow,
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
      if (title) {
        timeline.fromTo(
          title,
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
      if (subtitle) {
        timeline.fromTo(
          subtitle,
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

      // 4. Steps: right to left, one after another.
      // Start while the subtitle is animating.
      if (steps.length > 0) {
        timeline.fromTo(
          steps,
          { x: 45, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.18,
            ease: "power3.out",
          },
          "-=0.35",
        );
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Section>
      <Container>
        <Panel>
          <div ref={sectionRef} className={styles.row}>
            {/* Left column: header and image */}
            <div className={styles.leftCol}>
              <SectionHeader
                as="div"
                eyebrow={solutions?.powerNetworkLabel || ""}
                title={solutions?.powerNetworkTitle || ""}
                subtitle={solutions?.powerNetworkDescription || ""}
                align="start"
                trailingSpacing="none"
                animated={true}
              />

              {/* Image remains unchanged; no GSAP animation */}
              <div className={styles.imageCol}>
                <img
                  src={solutions?.powerNetworkImage}
                  alt="power-charge"
                  className={styles.powerCharge}
                />
              </div>
            </div>

            {/* Right column: numbered steps */}
            <div className={styles.stepsCol}>
              {solutions?.powerNetworkSteps?.map((item, index) => (
                <div className={styles.step} key={item.title}>
                  <span className={styles.stepNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className={styles.stepIcon}>
                    <img
                      src={item.icon}
                      alt="step-icon"
                      className={styles.stepIconImg}
                    />
                  </div>

                  <div className={styles.stepContent}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default PowerCharge;
