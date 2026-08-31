import styles from "./PowerCharge.module.css";
import powerCharge from "../../assets/Services-page/powerCharge.png";
import vector1 from "../../assets/Services-page/vector1.png";
import vector2 from "../../assets/Services-page/vector2.svg";
import vector3 from "../../assets/Services-page/vector3.svg";
import vector4 from "../../assets/Services-page/vector4.svg";
import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui";

const items = [
  {
    icon: vector1,
    title: "Connect Your Hardware",
    description:
      "Integrate EV Chargers seamlessly using OCP- Complaint Devices.",
  },

  {
    icon: vector2,
    title: "Configure the Platform",
    description:
      "Set tariffs, user access, charging rules, and station settings.",
  },

  {
    icon: vector3,
    title: "Go Live",
    description:
      "Activate your charging network and start serving EV users instantly.",
  },

  {
    icon: vector4,
    title: "Monitor & Optimise",
    description:
      "Leverage analytics and AI-driven insights to improve performance continuously.",
  },
];

function PowerCharge() {
  return (
    <Section>
      <Container>
        <Panel>
          <div className={styles.row}>
            {/* left column: header and image */}
            <div className={styles.leftCol}>
              <SectionHeader
                as="div"
                eyebrow="how it works"
                title="Power your charging network
              with complete control."
                subtitle="Manage charges, monitor performance, automate operations, and
              optimize revenue from single intelligent platform."
                align="start"
                
                trailingSpacing="none"
              />

              <div className={styles.imageCol}>
                <img
                  src={powerCharge}
                  alt="power-charge"
                  className={styles.powerCharge}
                />
              </div>
            </div>

            {/* right column: numbered steps */}
            <div className={styles.stepsCol}>
              {items.map((item, index) => (
                <div className={styles.step} key={item.title}>
                  <span className={styles.stepNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className={styles.stepIcon}>
                    <img
                      src={item.icon}
                      alt="step-icon"
                      className={styles.stepIconImg}
                    />
                  </div>

                  <div className={styles.stepContent}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default PowerCharge;
