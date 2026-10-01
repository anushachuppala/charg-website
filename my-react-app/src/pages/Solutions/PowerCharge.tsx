import styles from "./PowerCharge.module.css";
import vector1 from "../../assets/Services-page/vector1.png";

import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui";

import type { Solutions } from "../../features/SolutionsPage/dto/solutions.dto";

type PowerChargeProps = {
  solutions?: Solutions;
};

function PowerCharge({ solutions }: PowerChargeProps) {
  console.log("power charge section:", solutions);
  return (
    <Section>
      <Container>
        <Panel>
          <div className={styles.row}>
            {/* left column: header and image */}
            <div className={styles.leftCol}>
              <SectionHeader
                as="div"
                eyebrow={solutions?.powerNetworkLabel || ""}
                title={solutions?.powerNetworkTitle || ""}
                subtitle={solutions?.powerNetworkDescription || ""}
                align="start"
                trailingSpacing="none"
              />

              <div className={styles.imageCol}>
                <img
                  src={solutions?.powerNetworkImage}
                  alt="power-charge"
                  className={styles.powerCharge}
                />
              </div>
            </div>

            {/* right column: numbered steps */}
            <div className={styles.stepsCol}>
              {solutions?.powerNetworkSteps.map((item, index) => (
                <div className={styles.step} key={item.title}>
                  <span className={styles.stepNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className={styles.stepIcon}>
                    <img
                      src={item.icon}
                      alt="step-icon"
                      className={styles.stepIconImg}
                    />
                  </div>

                  <div className={styles.stepContent}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default PowerCharge;
