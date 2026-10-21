import { useState, useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./FaqSection.module.css";

import { Section, Container, Panel } from "../../layout";
import { SectionHeader } from "../section-header";

gsap.registerPlugin(ScrollTrigger);

type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  showHeader?: boolean;
  align?: "start" | "center";
};

export function FaqSection({
  items,
  eyebrow,
  title,
  showHeader = true,
  align = "center",
}: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleFaqClick = (index: number) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

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

      if (showHeader) {
        const eyebrowElement = section.querySelector('[data-gsap="eyebrow"]');

        const titleElement = section.querySelector('[data-gsap="title"]');

        const subtitleElement = section.querySelector('[data-gsap="subtitle"]');

        if (eyebrowElement) {
          timeline.fromTo(
            eyebrowElement,
            { y: 25, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.5 },
          );
        }

        if (titleElement) {
          timeline.fromTo(
            titleElement,
            { y: 30, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.6 },
            "-=0.25",
          );
        }

        if (subtitleElement) {
          timeline.fromTo(
            subtitleElement,
            { y: 20, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.5 },
            "-=0.3",
          );
        }
      }

      const faqItems = section.querySelectorAll(`.${styles.faqItem}`);

      if (faqItems.length > 0) {
        timeline.fromTo(
          faqItems,
          {
            y: 22,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.12,
          },
          showHeader ? "-=0.15" : 0,
        );
      }
    }, section);

    return () => ctx.revert();
  }, [showHeader, items.length]);

  return (
    <Section>
      <Container>
        <div ref={sectionRef}>
          <Panel>
            {showHeader && (
              <SectionHeader
                eyebrow={eyebrow}
                title={title}
                align={align}
                trailingSpacing="default"
                animated
              />
            )}

            <div className={styles.faqList}>
              {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    className={`${styles.faqItem} ${
                      isOpen ? styles.faqItemOpen : ""
                    }`}
                    key={index}
                  >
                    <button
                      type="button"
                      className={styles.question}
                      onClick={() => handleFaqClick(index)}
                    >
                      {item.question}
                      <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
                    </button>

                    {isOpen && <p className={styles.answer}>{item.answer}</p>}
                  </div>
                );
              })}
            </div>
          </Panel>
        </div>
      </Container>
    </Section>
  );
}
