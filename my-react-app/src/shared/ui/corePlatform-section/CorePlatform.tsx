import styles from "./CorePlatform.module.css";

import { Section, Container, Panel } from "../../../shared/layout";
import { SectionHeader } from "../../../shared/ui/section-header";

export type CorePlatformItem = {
  icon: string;
  title: string;
  description: string;
};

type CorePlatformProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: CorePlatformItem[];
  background?: "default" | "dark";
  showHeader?: boolean;
};

export function CorePlatform({
  eyebrow,
  title,
  subtitle,
  items,
  background = "default",
  showHeader = false,
}: CorePlatformProps) {
  return (
    <Section
      className={`${styles.section} ${
        background === "dark" ? styles.dark : ""
      }`}
    >
      <Container>
        <Panel>
          {showHeader && (
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              subtitle={subtitle}
              titleTone="primary"
              align="center"
            />
          )}
          {/* <div className={styles.content}>
            <h4 className={styles.eyebrow}>{eyebrow}</h4>

            <h2 className={styles.title}>{title}</h2>

            <p className={styles.subtitle}>{subtitle}</p>
          </div> */}

          <div className={styles.iconsInfo}>
            {items.map((item) => (
              <article key={item.title} className={styles.card}>
                <img src={item.icon} alt="" className={styles.icon} />

                <div className={styles.cardContent}>
                  <h2 className={styles.cardTitle}>{item.title}</h2>

                  <p className={styles.cardDescription}>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default CorePlatform;
