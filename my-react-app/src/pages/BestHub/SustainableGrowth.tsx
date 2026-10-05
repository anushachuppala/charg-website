import styles from "./SustainableGrowth.module.css";
import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader, WhoIsThisFor } from "../../shared/ui";

import type { BestHub } from "../../features/BestHubPage/dto/bestHub.dto";

type SustainableGrowthpProps = {
  bestHub?: BestHub;
};

function SustainableGrowth({ bestHub }: SustainableGrowthpProps) {
  return (
    <Section className={styles.Section}>
      <Container>
        <Panel>
          <div className={styles.mainWrapper}>
            {/* left image */}
            <div className={styles.imageWrapper}>
              <img
                src={bestHub?.growthImage}
                alt="sustainable-image"
                className={styles.sustainableImage}
              />
            </div>

            <div className={styles.content}>
              <SectionHeader
                as="div"
                eyebrow={bestHub?.growthTitle}
                title={bestHub?.growthSubtitle}
                subtitle={bestHub?.growthDescription}
                align="start"
                trailingSpacing="default"
                subtitleClassName="none"
              />

              <WhoIsThisFor
                items={
                  bestHub?.growthItems.map((item) => ({
                    icon: item.icon,
                    title: item.title,
                    description: item.subtitle,
                  })) ?? []
                }
                showHeader={false}
                columns={2}
                embedded={true}
              />
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default SustainableGrowth;
