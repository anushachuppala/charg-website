import { useState } from "react";

import styles from "./FaqSection.module.css";

import { Section, Container, Panel } from "../../layout";
import { SectionHeader } from "../section-header";

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

  const handleFaqClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section>
      <Container>
        <Panel>
          {showHeader && (
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              align={align}
              trailingSpacing="default"
            />
          )}

          <div className={styles.faqList}>
            {items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
                  key={index}
                >
                  <button
                    type="button"
                    className={styles.question}
                    onClick={() => handleFaqClick(index)}
                  >
                    <span>{item.question}</span>
                    <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
                  </button>

                  {isOpen && <p className={styles.answer}>{item.answer}</p>}
                </div>
              );
            })}
          </div>
        </Panel>
      </Container>
    </Section>
  );
}
