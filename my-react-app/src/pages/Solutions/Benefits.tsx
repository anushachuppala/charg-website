import styles from "./Benefits.module.css";
import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui";

import checkIcon from "../../assets/Services-page/CheckIcon.png";

import type { Solutions } from "../../features/SolutionsPage/dto/solutions.dto";

type BenefitsProps = {
  solutions?: Solutions;
};

function Benefits({ solutions }: BenefitsProps) {
  console.log("benefits section:", solutions);
  return (
    <Section>
      <Container>
        <Panel>
          <div className={styles.row}>
            {/* right image */}

            <div className={styles.imageCol}>
              <img
                src={solutions?.efficiencyImage}
                alt="charge-image"
                className={styles.chargeImage}
              />
            </div>
            {/* Left Content */}
            <div className={styles.content}>
              <SectionHeader
                as="div"
                eyebrow={solutions?.efficiencyLabel || ""}
                title={solutions?.efficiencyTitle || ""}
                subtitle={solutions?.efficiencyDescription || ""}
                align="start"
                trailingSpacing="none"
              />

              {/* Items */}
              <div className={styles.items}>
                {solutions?.efficiencyPoints.map((item) => (
                  <div className={styles.item} key={item.label}>
                    <img src={checkIcon} className={styles.icon} />

                    <div>
                      <h3>{item.label}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default Benefits;
