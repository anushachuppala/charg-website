import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./ChargeManagement.module.css";

import CheckIcon from "../../assets/Services-page/CheckIcon.png";

import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui";

import type { Solutions } from "../../features/SolutionsPage/dto/solutions.dto";

gsap.registerPlugin(ScrollTrigger);

type ChargeManagementProps = {
  solutions?: Solutions;
};

function ChargeManagement({ solutions }: ChargeManagementProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const eyebrow = section.querySelector('[data-gsap="eyebrow"]');
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

      // 1. Eyebrow: bottom to top
      if (eyebrow) {
        timeline.fromTo(
          eyebrow,
          { y: 35, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            ease: "power3.out",
          },
        );
      }

      // 2. Title: bottom to top
      if (title) {
        timeline.fromTo(
          title,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.25",
        );
      }

      // 3. Description: bottom to top
      if (subtitle) {
        timeline.fromTo(
          subtitle,
          { y: 30, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=0.25",
        );
      }

      // 4. All items: right to left together
      if (items.length > 0) {
        timeline.fromTo(
          items,
          { x: 50, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0,
          },
          "-=0.1",
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
            {/* Image: intentionally no GSAP animation */}
            <div className={styles.imageCol}>
              <img
                src={solutions?.cmsSolutionImage}
                alt="charge-image"
                className={styles.chargeImage}
              />
            </div>

            {/* Content */}
            <div className={styles.content}>
              <SectionHeader
                as="div"
                eyebrow={solutions?.cmsSolutionLabel || ""}
                title={solutions?.cmsSolutionTitle || ""}
                subtitle={solutions?.cmsSolutionDescription || ""}
                align="start"
                trailingSpacing="none"
                animated={true}
              />

              {/* Items */}
              <div className={styles.items}>
                {solutions?.cmsSolutionPoints?.map((item) => (
                  <div className={styles.item} key={item.label}>
                    <img src={CheckIcon} alt="" className={styles.icon} />

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

export default ChargeManagement;
