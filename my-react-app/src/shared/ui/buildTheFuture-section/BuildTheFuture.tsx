import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import styles from "./BuildTheFuture.module.css";

import { Section, Container, Panel } from "../../../shared/layout";

import mainImage from "../../../assets/BestHub-page/mainImage.jpeg";

import Button from "../../../shared/ui/Button/Button";
import type { ReactNode } from "react";

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
        defaults: {
          ease: "power2.out",
        },
      });

      timeline
        .from(`.${styles.mainBg}`, {
          x: -80,
          opacity: 0,
          duration: 0.7,
          clearProps: "transform",
        })
        .from(
          `.${styles.subtitle}`,
          {
            y: 25,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3",
        )
        .from(
          `.${styles.title}`,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.2",
        )
        .from(
          `.${styles.buttons}`,
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.2",
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <Section className={styles.section}>
      <Container>
        <Panel>
          <div className={styles.imageContent} ref={sectionRef}>
            <img src={image} alt="Background" className={styles.mainBg} />

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
