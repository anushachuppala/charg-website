import styles from "./BusinessImpact.module.css";
import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui";

import userIcon from "../../assets/BestHub-page/userIcon.svg";
import graphIcon from "../../assets/BestHub-page/graphIcon.svg";
import baggIcon from "../../assets/BestHub-page/baggIcon.svg";
import repeatIcon from "../../assets/BestHub-page/repeatIcon.svg";
import increaseIcon from "../../assets/BestHub-page/increaseIcon.svg";

const items = [
  {
    icon: increaseIcon,
    percentage: "+47%",
    title: "Increase in Footfall",
    description:
      "Locations report a massive jump in daily visitors after BEST HUB deployment.",
  },

  {
    icon: userIcon,
    percentage: "3.5x",
    title: "Higher Engagement",
    description:
      "Drivers interact with brands, loyalty apps, and offers during dwell time.",
  },

  {
    icon: baggIcon,
    percentage: "2.3x",
    title: "Larger Avg. Orders",
    description:
      "Captive audience effect drives significantly higher spend per visit.",
  },

  {
    icon: graphIcon,
    percentage: "30%",
    title: "Better Utilization",
    description:
      "Charger uptime and throughput improve with an ecosystem-driven demand loop.",
  },

  {
    icon: repeatIcon,
    percentage: "85%",
    title: "Repeat Customers",
    description:
      "Loyalty programs and seamless experiences keep drivers coming back.",
  },
];

function BusinessImpact() {
  return (
    <Section className={styles.section}>
      <Container>
        <Panel>
          <div className={styles.mainWrapper}>
            <div className={styles.headings}>
              <SectionHeader
                as="div"
                eyebrow="The Results"
                title="More Than Charging. Maximum Business Impact."
                subtitle="BEST HUB partners consistently report measurable commercial and operational gains."
                align="center"
                trailingSpacing="none"
              />
            </div>

            <div className={styles.cards}>
              {items.map((item) => (
                <article className={styles.card} key={item.title}>
                  <span className={styles.iconWrapper}>
                    <img
                      src={item.icon}
                      className={styles.icon}
                      alt={item.title}
                    />
                  </span>

                  <div className={styles.content}>
                    <h2 className={styles.eyebrow}>{item.percentage}</h2>
                    <h3 className={styles.cardTitle}>{item.title}</h3>

                    <p className={styles.cardDescription}>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default BusinessImpact;
