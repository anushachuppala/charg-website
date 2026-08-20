import styles from "./WhoIsThisFor.module.css";
// import icon1 from "../../assets/Services-page/icon1.png";
// import icon2 from "../../assets/Services-page/icon2.png";
// import icon3 from "../../assets/Services-page/icon3.png";

import { Section, Container, Panel } from "../../layout";

import { SectionHeader } from "../section-header";
import { WhoIsThisForCard } from "./WhoIsThisForCard";

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
                {/* <img src={icon1} alt="bag-icon" className={styles.icon} /> */}

                <div className={styles.content}>
                  <h2 className={styles.title}>Charge Point Operators</h2>
                  <p className="18-neutral-500">
                    Manage multiple charging stations, pricing policies, uptime,
                    and user access from a centralized dashboard.
                  </p>
                </div>
              </div>

              <div className={styles.card}>
                {/* <img src={icon2} alt="headSet-icon" className={styles.icon} /> */}

                <div className={styles.content}>
                  <h2 className={styles.title}>Fleet Operators</h2>
                  <p className="18-neutral-500">
                    Monitor fleet charging schedules, energy consumption, and
                    operational efficiency across locations.
                  </p>
                </div>
              </div>

              <div className={styles.card}>
                {/* <img src={icon3} alt="handshake-icon" className={styles.icon} /> */}

                <div className={styles.content}>
                  <h2 className={styles.title}>Municipalities & Utilities</h2>
                  <p className="18-neutral-500">
                    Deploy and manage public charging infrastructure while
                    enabling smart energy distribution and grid integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default WhoIsThisFor;
