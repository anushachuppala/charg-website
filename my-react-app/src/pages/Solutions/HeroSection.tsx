import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import styles from "./HeroSection.module.css";

import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui/section-header";
import Button from "../../shared/ui/Button";

import type { Solutions } from "../../features/SolutionsPage/dto/solutions.dto";

type HeroSectionProps = {
  solutions?: Solutions;
};

function HeroSection({ solutions }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const heroElement = heroRef.current;

    if (!heroElement) return;

    const ctx = gsap.context(() => {
      const content = heroElement.querySelector(`.${styles.content}`);
      const image = heroElement.querySelector(`.${styles.heroImage}`);

      if (!content) return;

      // Find the individual SectionHeader elements
      const eyebrow = content.querySelector('[class*="eyebrow"]');
      const title = content.querySelector("h1, h2, h3");

      // Description can use a subtitle or description CSS class
      const description = content.querySelector(
        '[class*="subtitle"], [class*="description"]',
      );

      const buttons = content.querySelector(`.${styles.buttons}`);

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      // 1. Eyebrow: bottom to top
      if (eyebrow) {
        timeline.fromTo(
          eyebrow,
          { y: 30, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.5 },
        );
      }

      // 2. Title: bottom to top, after eyebrow
      if (title) {
        timeline.fromTo(
          title,
          { y: 35, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6 },
        );
      }

      // 3. Description: bottom to top, after title
      if (description) {
        timeline.fromTo(
          description,
          { y: 25, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.5 },
        );
      }

      // 4. Buttons: bottom to top, after description
      if (buttons) {
        timeline.fromTo(
          buttons,
          { y: 25, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.5 },
        );
      }

      // 5. Image: right to left, after buttons
      if (image) {
        timeline.fromTo(
          image,
          { x: 80, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power2.out",
          },
        );
      }
    }, heroElement);

    return () => ctx.revert();
  }, []);

  return (
    <Section className={styles.section}>
      <Container>
        <Panel>
          <div
            ref={heroRef}
            className={`page-row align-items-center ${styles.row}`}
          >
            {/* Left content */}
            <div className={`page-col-12 page-col-lg-6 ${styles.content}`}>
              <SectionHeader
                eyebrow={solutions?.heroSubtitle || ""}
                title={solutions?.heroTitle || ""}
                subtitle={solutions?.heroDescription || ""}
                align="start"
              />

              <div className={styles.buttons}>
                <Button variant="secondary">Become a partner</Button>

                <Button variant="primary" className={styles.btn}>
                  Book a Demo
                </Button>
              </div>
            </div>

            {/* Right image */}
            <div className={`page-col-12 page-col-lg-6 ${styles.imageCol}`}>
              <img
                src={solutions?.heroImage}
                alt="hero image"
                className={styles.heroImage}
              />
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default HeroSection;
