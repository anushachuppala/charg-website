import styles from "./Benefits.module.css";
import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui";

import chargeImage from "../../assets/Services-page/chargeImage.png";
import checkIcon from "../../assets/Services-page/CheckIcon.png";

const items = [
  {
    icon: checkIcon,
    title: "Reduce Operational Costs",
    description:
      "Minimize maintenance visits through remote monitoring and diagnostics.",
  },

  {
    icon: checkIcon,
    title: "Increase Revenue Streams",
    description:
      "Enable dynamic pricing, subscriptions, roaming, and monetization services.",
  },

  {
    icon: checkIcon,
    title: "Scale Effortlessly",
    description:
      "Expand from a few chargers to thousands without infrastructure complexity.",
  },
];

function Benefits() {
  return (
    <Section>
      <Container>
        <Panel>
          <div className={styles.row}>
            {/* right image */}

            <div className={styles.imageCol}>
              <img
                src={chargeImage}
                alt="charge-image"
                className={styles.chargeImage}
              />
            </div>
            {/* Left Content */}
            <div className={styles.content}>
              <SectionHeader
                as="div"
                eyebrow="benefits"
                title="Drive efficiency, revenue, and scalability"
                subtitle="Our CMS helps charging businesses maximize network performance and profitability."
                align="start"
                trailingSpacing="none"
              />

              {/* Items */}
              <div className={styles.items}>
                {items.map((item) => (
                  <div className={styles.item} key={item.title}>
                    <img src={item.icon} className={styles.icon} />

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default Benefits;
