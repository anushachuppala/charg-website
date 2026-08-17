import serviceIcon from "../../assets/images/About-page/service 1.png";
import styles from "./BestCharge.module.css";
import { Section, Container, Panel } from "../../shared/layout";
const BestCharge = () => {
  return (
    <Section className={styles.bestChargeSection}>
      <Container>
        <Panel>
          <div className={styles.bestChargeContainer}>
            {/* Engineering Excellence */}
            <div className={styles.featureItem}>
              <img
                src={serviceIcon}
                alt="Engineering Excellence"
                className={styles.featureIcon}
              />

              <div className={styles.chargingOverlay}></div>

              <div className={styles.featureContent}>
                <h3 className="heading">Engineering Excellence</h3>

                <p className={`18-neutral-500 ${styles.content}`}>
                  Built for Safety, reliability,
                  <br />
                  and long-term performance.
                </p>
              </div>

              <div className={styles.divider}></div>
            </div>

            {/* Sustainable Future */}
            <div className={styles.featureItem}>
              <img
                src={serviceIcon}
                alt="Sustainable Future"
                className={styles.featureIcon}
              />

              <div className={styles.featureContent}>
                <h3 className="heading">Sustainable Future</h3>

                <p className={`18-neutral-500 ${styles.content}`}>
                  Driving Clean mobility for
                  <br />a better tomorrow.
                </p>
              </div>
              <div className={styles.divider}></div>
            </div>

            {/* Trusted Partnership */}
            <div className={styles.featureItem}>
              <img
                src={serviceIcon}
                alt="Trusted Partnership"
                className={styles.featureIcon}
              />

              <div className={styles.featureContent}>
                <h3 className="heading">Trusted Partnership</h3>

                <p className={`18-neutral-500 ${styles.content}`}>
                  Collaborating with governments,
                  <br />
                  Industries and Communities.
                </p>
              </div>
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
};

export default BestCharge;
