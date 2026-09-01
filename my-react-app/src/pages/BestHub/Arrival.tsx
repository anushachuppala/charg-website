import styles from "./Arrival.module.css";

import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui";

import carIcon from "../../assets/BestHub-page/carIcon.svg";
import qrIcon from "../../assets/BestHub-page/qrIcon.png";
import bagIcon from "../../assets/BestHub-page/bagIcon.png";
import chargeIcon from "../../assets/BestHub-page/chargeIcon.svg";
import dineIcon from "../../assets/BestHub-page/dineIcon.svg";
import starIcon from "../../assets/BestHub-page/starIcon.svg";

const items = [
  {
    step: 1,
    icon: carIcon,
    title: "Arrive",
    description: "Driver pulls in and parks at the designated EV bay.",
  },

  {
    step: 2,
    icon: qrIcon,
    title: "Scan & Connect",
    description: "Scan the QR code or use the app to start a session.",
  },

  {
    step: 3,
    icon: bagIcon,
    title: "Explore Hub",
    description: "Browse curated retail, F&B, and entertainment on-site.",
  },

  {
    step: 4,
    icon: chargeIcon,
    title: "Charge & Pay",
    description: "Auto-billed at session end via your preferred payment.",
  },

  {
    step: 5,
    icon: dineIcon,
    title: "Dine & Shop",
    description: "Earn loyalty points on every purchase made at the hub.",
  },

  {
    step: 6,
    icon: starIcon,
    title: "Leave Happy",
    description: "Full battery, rewards earned — and a reason to return.",
  },
];

function Arrival() {
  return (
    <Section className={styles.Section}>
      <Container>
        <Panel>
          <div className={styles.content}>
            <SectionHeader
              as="div"
              eyebrow="The Experience"
              title="From Arrival to a Delightful Experience"
              align="center"
              trailingSpacing="none"
            />
          </div>

          <div className={styles.items}>
            {items.map((item) => (
              <div className={styles.item} key={item.title}>
                <div className={styles.iconBox}>
                  <span className={styles.stepNumber}>{item.step}</span>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className={styles.icon}
                  />
                </div>

                <div className={styles.textContent}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default Arrival;
