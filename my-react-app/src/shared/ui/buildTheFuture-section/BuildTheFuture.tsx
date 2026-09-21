import styles from "./BuildTheFuture.module.css";

import { Section, Container, Panel } from "../../../shared/layout";

import mainImage from "../../../assets/BestHub-page/mainImage.jpeg";

import Button from "../../../shared/ui/Button/Button";
import type { ReactNode } from "react";

type BuildTheFutureProps = {
  subtitle: ReactNode;
  title: ReactNode;
  buttonText?: string;
  image?: string;
};

function BuildTheFuture({
  subtitle,
  title,
  buttonText = "Get Started",
  image = mainImage,
}: BuildTheFutureProps) {
  return (
    <Section className={styles.section}>
      <Container>
        <Panel>
          <div className={styles.imageContent}>
            <img src={image} alt="background Image" className={styles.mainBg} />

            <div className={styles.content}>
              <h1 className={styles.subtitle}>{subtitle}</h1>

              <h2 className={styles.title}>{title}</h2>

              <div className={styles.buttons}>
                <input
                  placeholder="Enter your email"
                  type="email"
                  className={styles.email}
                />

                <Button variant="secondary">{buttonText}</Button>
              </div>
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default BuildTheFuture;
