import styles from "./BuildTheFuture.module.css";

import { Section, Container, Panel } from "../../../shared/layout";

import mainImage from "../../../assets/BestHub-page/mainImage.jpeg";

import Button from "../../../shared/ui/Button/Button";

function BuildTheFuture() {
  return (
    <Section className={styles.section}>
      <Container>
        <Panel>
          <div className={styles.imageContent}>
            <img
              src={mainImage}
              alt="background Image"
              className={styles.mainBg}
            />
            <div className={styles.content}>
              <h1 className={styles.subtitle}>
                Transform Charging Stops into Valuable <br />
                Destinations
              </h1>

              <h2 className={styles.title}>
                Create integrated mobility hubs that combine EV charging with
                retail, dining, convenience,
                <br /> and essential services to maximize every visit.
              </h2>

              <div className={styles.buttons}>
                <input
                  placeholder="Enter your email"
                  type="email"
                  className={styles.email}
                />

                <Button variant="secondary">Get Started</Button>
              </div>
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default BuildTheFuture;
