import styles from "./Infrastructure.module.css";
import { Section, Container, Panel } from "../../shared/layout";

import InfrastructureImage from "../../assets/images/About-page/Infrastructure.png";
import BackgroundImage from "../../assets/images/About-page/backgroundImage.jpg";
import Button from "../../shared/ui/Button";

const Infrastructure = () => {
  return (
    <Section className={styles.InfrastructureSection}>
      <img
        src={BackgroundImage}
        className={styles.backgroundImage}
        alt="background"
      />
      <Container>
        <Panel>
          <div className={styles.overlay}></div>

          <div className={styles.contentWrapper}>
            <div className={styles.leftContent}>
              <h1 className={`h1-white ${styles.heading}`}>
                Let’s Build{" "}
                <span>
                  India’s
                  <br /> EV Infrastructure Together
                </span>
              </h1>

              <p className={`18-white ${styles.Description}`}>
                Best Hub transforms EV charging stations into vibrant
                destinations by combining fast charging with retail, dining,
                smart parking, digital services, and community spaces creating
                value for businesses and convenience for EV users.
              </p>

              <div className={styles.heroButtons}>
                <Button variant="secondary" className={styles.btn}>
                  Contact Us Now
                </Button>

                <Button variant="Tertiary" className={styles.btn}>
                  Become a Partner
                </Button>
              </div>
            </div>

            <div className={styles.rightContent}>
              <img
                src={InfrastructureImage}
                className={styles.infrastructureImage}
                alt="main-image"
              />
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
};

export default Infrastructure;
