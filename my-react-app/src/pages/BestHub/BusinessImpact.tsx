import styles from "./BusinessImpact.module.css";
import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui";



import type { BestHub } from "../../features/BestHubPage/dto/bestHub.dto";

type BusinessImpactProps = {
  bestHub?: BestHub;
};

function BusinessImpact({ bestHub }: BusinessImpactProps) {
  return (
    <Section className={styles.section}>
      <Container>
        <Panel>
          <div className={styles.mainWrapper}>
            <div className={styles.headings}>
              <SectionHeader
                as="div"
                eyebrow={bestHub?.resultTitle}
                title={bestHub?.resultSubtitle}
                subtitle={bestHub?.resultDescription}
                align="center"
                trailingSpacing="none"
              />
            </div>

            <div className={styles.cards}>
              {bestHub?.resultItems.map((item) => (
                <article className={styles.card} key={item.title}>
                  <span className={styles.iconWrapper}>
                    <img
                      src={item.icon}
                      className={styles.icon}
                      alt={item.title}
                    />
                  </span>

                  <div className={styles.content}>
                    <h2 className={styles.eyebrow}>{item.value}</h2>
                    <h3 className={styles.cardTitle}>{item.title}</h3>

                    <p className={styles.cardDescription}>{item.subtitle}</p>
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

export default BusinessImpact;
