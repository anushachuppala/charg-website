import styles from "./WhoIsThisFor.module.css";
import icon1 from "../../assets/Services-page/icon1.png";
import icon2 from "../../assets/Services-page/icon2.png";
import icon3 from "../../assets/Services-page/icon3.png";
import { Section, Container, Panel } from "../../shared/layout";

import { SectionHeader } from "../../shared/ui/section-header";

function WhoIsThisFor() {
  return (
    <Section className={styles.WhoIsSection}>
      <Container>
        <Panel>
          <div className={styles.heading}>
            <SectionHeader
              title="Who Is This For?"
              subtitle="Built for every stakeholder in the EV ecosystem"
            />

            <div className={styles.cards}>
              <div className={styles.card}>
                <img src={icon1} alt="bag-icon" />
                <SectionHeader
                  title="Charge Point Operators"
                  subtitle="Manage multiple charging stations, pricing policies, uptime, and user access from a centralized dashboard."
                />
              </div>

              <div className={styles.card}>
                <img src={icon2} alt="headSet-icon" />
                <SectionHeader
                  title="Fleet Operators"
                  subtitle="Monitor fleet charging schedules, energy consumption, and operational efficiency across locations."
                />
              </div>

              <div className={styles.card}>
                <img src={icon3} alt="handshake-icon" />
                <SectionHeader
                  title="Municipalities & Utilities"
                  subtitle="Deploy and manage public charging infrastructure while enabling smart energy distribution and grid integration."
                />
              </div>
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default WhoIsThisFor;
