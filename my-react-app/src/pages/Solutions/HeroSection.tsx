import styles from "./HeroSection.module.css";
import HeroImage from "../../assets/Services-page/HeroImage.png";
import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui/section-header";
import Button from "../../shared/ui/Button";

function HeroSection() {
  return (
    <Section>
      <Container>
        <Panel>
          <div className="page-row align-items-center ">
            {/* Left content */}
            <div className={`page-col-12 page-col-lg-5 ${styles.content}`}>
              <SectionHeader
                eyebrow="Charge Management Software"
                title="Powering Intelligent EV Charging Networks"
                subtitle="Manage, monitor, and optimize your EV charging infrastructure through a unified cloud-based platform designed for scalability, reliability, and operational efficiency."
                align="start"
                trailingSpacing="none"
              />

              <div className={styles.buttons}>
                <Button text=" Become a Partner" variant="primary"></Button>
                <Button text="Book a Demo" variant="outline"></Button>
              </div>
            </div>

            {/* Right image */}
            <div className="page-col-12 page-col-lg-6">
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
