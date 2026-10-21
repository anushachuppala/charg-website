import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./WhyBestCharge.module.css";

import { Section, Container, Panel } from "../../../shared/layout";

gsap.registerPlugin(ScrollTrigger);

export type WhyBestChargeItem = {
  icon: string;
  title: string;
  description: string;
};

type WhyBestChargeProps = {
  items: WhyBestChargeItem[];
};

export function WhyBestCharge({ items }: WhyBestChargeProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const title = section.querySelector(`.${styles.title}`);
      const subtitle = section.querySelector(`.${styles.subtitle}`);
      const cards = section.querySelectorAll(`.${styles.card}`);

      const elements = [
        ...(title ? [title] : []),
        ...(subtitle ? [subtitle] : []),
        ...Array.from(cards),
      ];

      gsap.fromTo(
        elements,
        {
          y: 40,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Section className={styles.section}>
      <Container>
        <Panel>
          <div ref={sectionRef}>
            <div className={styles.content}>
              <h1 className={styles.title}>Why BestCharg?</h1>

              <p className={styles.subtitle}>
                Delivering reliable and scalable EV charging infrastructure
                management.
              </p>
            </div>

            <div className={styles.whyBestChargeItems}>
              {items.map((item) => (
                <article key={item.title} className={styles.card}>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className={styles.icon}
                  />

                  <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>{item.title}</h2>

                    <p className={styles.cardDescription}>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}
