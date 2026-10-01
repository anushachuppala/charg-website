import styles from "./HeroSection.module.css";
import HeroImage from "../../assets/Services-page/HeroImage.png";
import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui/section-header";
import Button from "../../shared/ui/Button";

import type { Solutions } from "../../features/SolutionsPage/dto/solutions.dto";

type HeroSectionProps = {
  solutions?: Solutions;
};

function HeroSection({ solutions }: HeroSectionProps) {
  console.log("Hero solutions:", solutions);
  return (
    <Section className={styles.section}>
      <Container>
        <Panel>
          <div className={`page-row align-items-center ${styles.row}`}>
            {/* Left content */}
            <div className={`page-col-12 page-col-lg-6 ${styles.content}`}>
              <SectionHeader
                eyebrow={solutions?.heroSubtitle || ""}
                title={solutions?.heroTitle || ""}
                subtitle={solutions?.heroDescription || ""}
                align="start"
              />

              <div className={styles.buttons}>
                <Button variant="secondary">Become a partner</Button>
                <Button variant="primary" className={styles.btn}>
                  Book a Demo
                </Button>
              </div>
            </div>

            {/* Right image */}
            <div className={`page-col-12 page-col-lg-6 ${styles.imageCol}`}>
              <img
                src={HeroImage}
                alt="hero image"
                className={styles.heroImage}
              />
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default HeroSection;
