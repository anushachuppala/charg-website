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
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
  align?: "start" | "center";
  columns?: 2 | 3 | 4 | 6;
  cardColumns?: 2 | 3 | 4 | 6;
  iconWrapperSize?: number;
  iconSize?: number;
  embedded?: boolean;
};

export function WhoIsThisFor({
  items,
  eyebrow,
  title,
  subtitle,
  showHeader = true,
  align = "center",
  columns = 3,
  cardColumns,
  iconWrapperSize,
  iconSize,
  embedded = false,
}: WhoIsThisForProps) {
  const resolvedCardColumns = cardColumns ?? columns;

  const cardsContent = (
    <>
      {showHeader && (
        <SectionHeader
          eyebrow={eyebrow}
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
            "--card-columns": resolvedCardColumns,
          } as React.CSSProperties
        }
      >
        {items.map((item) => (
          <article className={styles.card} key={item.title}>
            <span
              className={styles.iconWrapper}
              style={{ width: iconWrapperSize, height: iconWrapperSize }}
            >
              <img
                src={item.icon}
                className={styles.icon}
                alt={item.title}
                style={{ width: iconSize, height: iconSize }}
              />
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
    <Section className={styles.WhoIsSection}>
      <Container>
        <Panel>{cardsContent}</Panel>
      </Container>
    </Section>
  );
}
