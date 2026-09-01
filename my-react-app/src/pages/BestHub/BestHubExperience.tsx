import styles from "./BestHubExperience.module.css";
import ExperienceImage from "../../assets/BestHub-page/experience-image.png";

import dotImage from "../../assets/BestHub-page/dot.gif";

import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui";

function BestHubExperience() {
  return (
    <Section className={styles.Section}>
      <Container>
        <Panel>
          <div className={styles.content}>
            <SectionHeader
              as="div"
              eyebrow="The Best HUB Experience"
              title="Everything you need, while your vehicle recharges."
              align="center"
              trailingSpacing="none"
            />
          </div>

          <div className={styles.image}>
            <img
              src={ExperienceImage}
              alt="BestHub experience Image."
              className={styles.ExperienceImage}
            />

            <div className={`${styles.landmark} ${styles.stay}`}>
              <span className={styles.markerWrapper}>
                <img src={dotImage} alt="" className={styles.marker} />
                Stay
              </span>
            </div>

            <div className={`${styles.landmark} ${styles.play}`}>
              <span className={styles.markerWrapper}>
                <img src={dotImage} alt="" className={styles.marker} />
                Play
              </span>
            </div>

            <div className={`${styles.landmark} ${styles.coWorking}`}>
              <span className={styles.markerWrapper}>
                <img src={dotImage} alt="" className={styles.marker} />
                Co-Working
              </span>
            </div>

            <div className={`${styles.landmark} ${styles.Shop}`}>
              <span className={styles.markerWrapper}>
                <img src={dotImage} alt="" className={styles.marker} />
                Shop
              </span>
            </div>

            <div className={`${styles.landmark} ${styles.cafe}`}>
              <span className={styles.markerWrapper}></span>
              <img src={dotImage} alt="" className={styles.marker} />
              Cafe
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default BestHubExperience;
