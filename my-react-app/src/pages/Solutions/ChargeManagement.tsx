import styles from "./ChargeManagement.module.css";

import CheckIcon from "../../assets/Services-page/CheckIcon.png";

import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui";

import type { Solutions } from "../../features/SolutionsPage/dto/solutions.dto";

type ChargeManagemenrProps = {
  solutions?: Solutions;
};

function ChargeManagement({ solutions }: ChargeManagemenrProps) {
  return (
    <Section>
      <Container>
        <Panel>
          <div className={styles.row}>
            {/* left image */}

            <div className={styles.imageCol}>
              <img
                src={solutions?.cmsSolutionImage}
                alt="charge-image"
                className={styles.chargeImage}
              />
            </div>

            {/* right content */}
            <div className={styles.content}>
              <SectionHeader
                as="div"
                eyebrow={solutions?.cmsSolutionLabel || ""}
                title={solutions?.cmsSolutionTitle || ""}
                subtitle={solutions?.cmsSolutionDescription || ""}
                align="start"
                trailingSpacing="none"
              />
              {/* Items */}
              <div className={styles.items}>
                {solutions?.cmsSolutionPoints.map((item) => (
                  <div className={styles.item} key={item.label}>
                    <img src={CheckIcon} className={styles.icon} />

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

export default ChargeManagement;
