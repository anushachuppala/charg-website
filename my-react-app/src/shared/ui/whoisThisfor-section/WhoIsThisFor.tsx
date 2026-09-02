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
  columns?: 2 | 3 | 4;
  background?: "default" | "none";
  embedded?: boolean;
};

export function WhoIsThisFor({
  items,
  title,
  subtitle,
  showHeader = true,
  align = "center",
  columns = 3,
  background = "default",
  embedded = false,
}: WhoIsThisForProps) {
  const cardsContent = (
    <>
      {showHeader && (
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align={align}
          trailingSpacing="default"
        />
      )}

      <div
        className={styles.cards}
        style={
          {
            "--card-columns": columns,
          } as React.CSSProperties
        }
      >
        {items.map((item) => (
          <article className={styles.card} key={item.title}>
            <span className={styles.iconWrapper}>
              <img src={item.icon} className={styles.icon} alt={item.title} />
            </span>

            <div className={styles.content}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );

  if (embedded) {
    return cardsContent;
  }

  return (
    <Section
      className={`${styles.WhoIsSection} ${
        background === "none" ? styles.noBackground : ""
      }`}
    >
      <Container>
        <Panel>{cardsContent}</Panel>
      </Container>
    </Section>
  );
}
