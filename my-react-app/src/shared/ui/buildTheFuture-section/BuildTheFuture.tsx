import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./BuildTheFuture.module.css";

import { Section, Container, Panel } from "../../../shared/layout";

import mainImage from "../../../assets/BestHub-page/mainImage.jpeg";

import Button from "../../../shared/ui/Button/Button";
import type { ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

type BuildTheFutureProps = {
  subtitle: ReactNode;
  title: ReactNode;
  buttonText?: string;
  image?: string;
};

function BuildTheFuture({
  subtitle,
  title,
  buttonText = "Get Started",
  image = mainImage,
}: BuildTheFutureProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
        defaults: {
          ease: "power2.out",
          duration: 0.7,
        },
      });

      // Background image appears with a subtle zoom-out effect.
      timeline.from(
        `.${styles.mainBg}`,
        {
          scale: 1.12,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        0,
      );

      // Subtitle animation.
      timeline.from(
        `.${styles.subtitle}`,
        {
          y: 25,
          opacity: 0,
        },
        0.15,
      );

      // Title animation.
      timeline.from(
        `.${styles.title}`,
        {
          y: 30,
          opacity: 0,
        },
        "-=0.4",
      );

      // Email input and button animate together.
      timeline.from(
        `.${styles.buttons} > *`,
        {
          y: 20,
          opacity: 0,
          stagger: 0.15,
        },
        "-=0.35",
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <Section className={styles.section}>
      <Container>
        <Panel>
          <div className={styles.imageContent} ref={sectionRef}>
            <img src={image} alt="background Image" className={styles.mainBg} />

            <div className={styles.content}>
              <h1 className={styles.subtitle}>{subtitle}</h1>

              <h2 className={styles.title}>{title}</h2>

              <div className={styles.buttons}>
                <input
                  placeholder="Enter your email"
                  type="email"
                  className={styles.email}
                />

                <Button variant="secondary">{buttonText}</Button>
              </div>
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default BuildTheFuture;
