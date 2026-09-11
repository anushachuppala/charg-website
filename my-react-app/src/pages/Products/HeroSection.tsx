import styles from "./HeroSection.module.css";

import ariesCharger from "../../assets/products-page/ariesCharger.png";

import { Section, Container, Panel } from "../../shared/layout";
import Button from "../../shared/ui/Button";

function HeroSection() {
  return (
    <Section>
      <Container>
        <Panel>
          <div className={styles.mainGrid}>
            <div className={styles.textContent}>
              <p className={styles.eyebrow}>Aries 7 KW</p>
              <h1 className={styles.title}>
                Powering India's <br />
                <span>EV Infrastructure</span>
                <br />
                Network
              </h1>

              <p className={styles.description}>
                The Aries 7kW AC Charger delivers reliable, intelligent, and
                future-ready charging for homes, workplaces, commercial
                properties, and public EV infrastructure
              </p>

              <div className={styles.buttonContainer}>
                <Button variant="secondary">Get a Quote</Button>
                <Button variant="primary">Download Datasheet</Button>
              </div>

              <div className={styles.imageContent}>
                <img
                  src={ariesCharger}
                  alt="aries charger"
                  className={styles.ariesCharger}
                />
              </div>

              <div className={styles.features}>
                <div className={styles.card1}>
                  <h3 className="h3-primary">7KW</h3>
                  <p className="14-secondary">AC OUTPUT</p>
                </div>

                <div className={styles.card2}>
                  <h3 className="h3-primary">IP54</h3>
                  <p className="14-secondary">WEATHER PROOF</p>
                </div>

                <div className={styles.card3}>
                  <h3 className="h3-primary">OCPP</h3>
                  <p className="14-secondary">1.6J READY</p>
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default HeroSection;
