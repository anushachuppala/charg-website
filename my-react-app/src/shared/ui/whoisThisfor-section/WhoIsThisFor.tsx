import styles from "./WhoIsThisFor.module.css";

import { Section, Container, Panel } from "../../layout";

import { SectionHeader } from "../section-header";

export type WhoIsThisForItem = {
  icon: string;
  title: string;
  description: string;
};

type WhoIsThisForProps = {
  items: WhoIsThisForItem[];
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
  align?: "start" | "center";
};

export function WhoIsThisFor({
  items,
  title,
  subtitle,
  showHeader = true,
  align = "center",
}: WhoIsThisForProps) {
  return (
    <Section className={styles.WhoIsSection}>
      <Container>
        <Panel>
          {showHeader && (
            <SectionHeader
              title={title}
              subtitle={subtitle}
              align={align}
              trailingSpacing="default"
            />
          )}

          <div className={styles.cards}>
            {items.map((item) => (
              <article className={styles.card} key={item.title}>
                <img src={item.icon} className={styles.icon} alt="" />

                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Panel>
      </Container>
    </Section>
  );
}
