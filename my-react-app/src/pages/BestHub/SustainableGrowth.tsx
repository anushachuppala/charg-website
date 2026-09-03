import styles from "./SustainableGrowth.module.css";
import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader, WhoIsThisFor } from "../../shared/ui";

import sustainableImage from "../../assets/BestHub-page/sustainable-image.png";
import timeIcon from "../../assets/BestHub-page/timeIcon.svg";

const items = [
  {
    icon: timeIcon,
    title: "Sustainable Infrastructure",
    description:
      "Solar canopies, green landscaping, and responsibly-sourced materials at the core of every hub.",
  },

  {
    icon: timeIcon,
    title: "Smart Energy Management",
    description:
      "AI-driven load balancing and battery storage optimise cost, uptime, and grid impact.",
  },

  {
    icon: timeIcon,
    title: "Multiple Revenue Streams",
    description:
      "Charging, F&B, retail, workspaces, and events—diversified income from day one.",
  },

  {
    icon: timeIcon,
    title: "Future-Ready Design",
    description:
      "Modular architecture that scales with new vehicles, formats, and technologies.",
  },
];

function SustainableGrowth() {
  return (
    <Section className={styles.Section}>
      <Container>
        <Panel>
          <div className={styles.mainWrapper}>
            {/* left image */}
            <div className={styles.imageWrapper}>
              <img
                src={sustainableImage}
                alt="sustainable-image"
                className={styles.sustainableImage}
              />
            </div>

            <div className={styles.content}>
              <SectionHeader
                as="div"
                eyebrow="Built for Sustainable Growth"
                title="Infrastructure that pays back to people and the planet."
                subtitle="Every Best HUB is engineered to run cleaner, smarter, and longer—so partners see returns that compound with time."
                align="start"
                trailingSpacing="none"
                subtitleClassName="none"
              />

              <WhoIsThisFor
                items={items}
                showHeader={false}
                columns={2}
                background="none"
                embedded={true}
              />
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default SustainableGrowth;
