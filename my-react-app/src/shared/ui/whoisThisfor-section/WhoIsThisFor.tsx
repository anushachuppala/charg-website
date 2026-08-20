import styles from "./WhoIsThisFor.module.css";
import icon1 from "../../../assets/Services-page/icon1.png";
import icon2 from "../../../assets/Services-page/icon2.png";
import icon3 from "../../../assets/Services-page/icon3.png";

import { Section, Container, Panel } from "../../layout";

import { SectionHeader } from "../section-header";
import { WhoIsThisForCard } from "./WhoIsThisForCard";

export type WhoIsThisForItem = {
  icon: string;
  title: string;
  description: string;
};

const WhoIsThisForItems: WhoIsThisForItem[] = [
  {
    icon: icon1,
    title: "Charge Point Operators",
    description:
      "Manage multiple charging stations, pricing policies, uptime, and user access from a centralized dashboard.",
  },

  {
    icon: icon2,
    title: "Fleet Operators",
    description:
      "Monitor fleet charging schedules, energy consumption, and operational efficiency across locations.",
  },

  {
    icon: icon3,
    title: "Municipalities & Utilities",
    description:
      "Deploy and manage public charging infrastructure while enabling smart energy distribution and grid integration.",
  },
];

function WhoIsThisFor() {
  return (
    <Section className={styles.WhoIsSection}>
      <Container>
        <Panel>
          <SectionHeader
            title="Who Is This For?"
            subtitle="Built for every stakeholder in the EV ecosystem"
          />

          <div className={styles.cards}>
            {WhoIsThisForItems.map((item) => (
              <WhoIsThisForCard
                icon={item.icon}
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default WhoIsThisFor;
