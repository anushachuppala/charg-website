import styles from "./CorePlatform.module.css";

import { Section, Container, Panel } from "../../../shared/layout";

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
};

export function CorePlatform({
  eyebrow,
  title,
  subtitle,
  items,
}: CorePlatformProps) {
  return (
    <Section className={styles.section}>
      <Container>
        <Panel>
          <div className={styles.header}>
            <h4 className={styles.eyebrow}>{eyebrow}</h4>

            <h2 className={styles.title}>{title}</h2>

            <p className={styles.subtitle}>{subtitle}</p>
          </div>

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

export default CorePlatform;
