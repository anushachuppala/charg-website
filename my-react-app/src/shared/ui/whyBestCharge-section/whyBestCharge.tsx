import styles from "./WhyBestCharge.module.css";

import { Section, Container, Panel } from "../../../shared/layout";

export type WhyBestChargeItem = {
  icon: string;
  title: string;
  description: string;
};

type WhyBestChargeProps = {
  items: WhyBestChargeItem[];
};

export function WhyBestCharge({ items }: WhyBestChargeProps) {
  return (
    <Section className={styles.section}>
      <Container>
        <Panel>
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
                <img src={item.icon} alt={item.title} className={styles.icon} />

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
