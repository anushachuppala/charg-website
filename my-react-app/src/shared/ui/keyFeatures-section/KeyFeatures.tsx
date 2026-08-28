import styles from "./KeyFeatures.module.css";
import { Section, Container, Panel } from "../../../shared/layout";

import { SectionHeader } from "../section-header";

export type KeyFeaturesItem = {
  icon: string;
  title: string;
  description: string;
};

type KeyFeaturesProps = {
  title: string;
  subtitle: string;
  showHeader?: boolean;
  align?: "start" | "center";
  items: KeyFeaturesItem[];
};

export function KeyFeatures({
  title,
  subtitle,
  showHeader = true,
  align = "center",
  items,
}: KeyFeaturesProps) {
  return (
    <Section className={styles.section}>
      <Container>
        <Panel>
          {showHeader && (
            <SectionHeader title={title} subtitle={subtitle} align={align} />
          )}

          <div className={styles.cards}>
            {items.map((item) => (
              <article className={styles.card} key={item.title}>
                <span className={styles.iconWrapper}>
                  <img
                    src={item.icon}
                    className={styles.icon}
                    alt={item.title}
                  />
                </span>

                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>

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

export default KeyFeatures;
