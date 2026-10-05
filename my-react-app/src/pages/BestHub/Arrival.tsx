import styles from "./Arrival.module.css";

import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui";

import type { BestHub } from "../../features/BestHubPage/dto/bestHub.dto";

type BestHubArrivalProps = {
  bestHub?: BestHub;
};

function Arrival({ bestHub }: BestHubArrivalProps) {
  console.log("arrival props:", bestHub);
  return (
    <Section className={styles.Section}>
      <Container>
        <Panel>
          <div className={styles.content}>
            <SectionHeader
              as="div"
              eyebrow={bestHub?.experienceTitle}
              title={bestHub?.experienceSubtitle}
              align="center"
              trailingSpacing="default"
              titleClassName="default"
            />
          </div>

          <div className={styles.items}>
            {bestHub?.experienceItems.map((item, index) => (
              <div className={styles.item} key={item.title}>
                <div className={styles.iconBox}>
                  <span className={styles.stepNumber}>{index + 1}</span>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className={styles.icon}
                  />
                </div>

                <div className={styles.textContent}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default Arrival;
