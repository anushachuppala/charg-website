import chargingImage from "../../assets/images/About-page/charging solutions.png";
import styles from "./ChargingSolutions.module.css";
import { Section, Container, Panel } from "../../shared/layout";
import Button from "../../shared/ui/Button";

import { SectionHeader } from "../../shared/ui/section-header";

const ChargingSolutions = () => {
  return (
    <Section>
      <Container>
        <Panel>
          <div className="page-col-12 page-col-lg-6">
            <div className={styles.chargingSolutionsContainer}>
              {/* Image */}
              <div className={styles.imageWrapper}>
                <img
                  src={chargingImage}
                  alt="EV charging infrastructure"
                  className={styles.chargingImage}
                />
              </div>

              {/* Content */}
              <div className={styles.content}>
                <SectionHeader
                  eyebrow="OUR STORY"
                  title="Built on Infrastructure. Focused on the Future."
                  titleTone="primary"
                  align="start"
                  trailingSpacing="none"
                />

                <p className="18-neutral-500">
                  For decades, Best Infra has delivered complex infrastructure
                  projects with precision, safety, and engineering excellence.
                  As India accelerates toward electric mobility, we recognised
                  that charging infrastructure would become the foundation of
                  tomorrow's transportation ecosystem. <br />
                  Best Charg was created to bring together infrastructure
                  expertise, intelligent software, and reliable operations into
                  one integrated platform. Today, we design, deploy, and manage
                  EV charging ecosystems that enable businesses, cities, fleets,
                  and communities to embrace sustainable mobility with
                  confidence.
                </p>

                <Button variant="secondary" className={styles.btn}>
                  Explore solutions
                </Button>
              </div>
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
};

export default ChargingSolutions;
