import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./Benefits.module.css";
import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui";

import checkIcon from "../../assets/Services-page/CheckIcon.png";

import type { Solutions } from "../../features/SolutionsPage/dto/solutions.dto";

gsap.registerPlugin(ScrollTrigger);

type BenefitsProps = {
  solutions?: Solutions;
};

function Benefits({ solutions }: BenefitsProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const title = section.querySelector('[data-gsap="title"]');
      const subtitle = section.querySelector('[data-gsap="subtitle"]');
      const items = section.querySelectorAll(`.${styles.item}`);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      // 1. Title: bottom to top
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
        );
      }

      // 2. Subtitle / description: bottom to top
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

      // 3. Benefit items: one at a time, left to right
      if (items.length > 0) {
        timeline.fromTo(
          items,
          { x: -40, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.18,
          },
          "-=0.05",
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
            {/* right image - no GSAP animation */}
            <div className={styles.imageCol}>
              <img
                src={solutions?.efficiencyImage}
                alt="charge-image"
                className={styles.chargeImage}
              />
            </div>

            {/* Left Content */}
            <div className={styles.content}>
              <SectionHeader
                as="div"
                eyebrow={solutions?.efficiencyLabel || ""}
                title={solutions?.efficiencyTitle || ""}
                subtitle={solutions?.efficiencyDescription || ""}
                align="start"
                trailingSpacing="none"
                animated={true}
              />

              {/* Items */}
              <div className={styles.items}>
                {solutions?.efficiencyPoints?.map((item) => (
                  <div className={styles.item} key={item.label}>
                    <img src={checkIcon} className={styles.icon} alt="" />

                    <div>
                      <h3>{item.label}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default Benefits;
