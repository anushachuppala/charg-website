import styles from "./BeyondCharge.module.css";

import BeyondImage from "../../assets/images/About-page/beyond charge (2).png";
import { Section, Container, Panel } from "../../shared/layout";
import Button from "../../shared/ui/Button";

import { SectionHeader } from "../../shared/ui/section-header";

const BeyondCharge = () => {
  return (
    <Section>
      <Container>
        <Panel>
          <div className="page-row align-items-center">
            <div className={`page-col-12 page-col-lg-6 ${styles.content}`}>
              {/* <p className={`16-secondary ${styles.eyebrow}`}>
                BEYOND CHARGING
              </p> */}

              {/* <h2 className={styles.heading}>
                Beyond Charging
                <br />
                Building Destinations.
              </h2> */}

              <SectionHeader
                eyebrow="BEYOND CHARGING"
                title={
                  <>
                    Beyond Charging
                    <br />
                    Building Destinations.
                  </>
                }
                align="start"
                trailingSpacing="none"
              />

              <p className={`18-neutral ${styles.description}`}>
                Best Hub transforms EV charging stations into vibrant
                destinations by combining fast charging with retail, dining,
                smart parking, digital services, and community spaces creating
                value for businesses and convenience for EV users.
              </p>

              <Button text="Explore Best Hub" variant="primary" />
            </div>

            <div className="page-col-12 page-col-lg-6">
              <img
                src={BeyondImage}
                alt="Best Charge EV charging station"
                className={styles.beyondImage}
              />
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
};

export default BeyondCharge;
