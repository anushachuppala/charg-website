import styles from "./ChargeManagement.module.css";
import chargeImage from "../../assets/Services-page/chargeImage.png";
import CheckIcon from "../../assets/Services-page/CheckIcon.png";

import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui";

const items = [
  {
    icon: CheckIcon,
    title: "Centralized Operations",
    description: "Manage all chargers and networks from a single dashboard.",
  },
  {
    icon: CheckIcon,
    title: "Secure Transactions",
    description:
      "Enable secure payments, access control, and user authentication.",
  },
  {
    icon: CheckIcon,
    title: "Multi-Location Management",
    description:
      "Operate charging infrastructure across cities, campuses, and fleets with ease.",
  },
];

function ChargeManagement() {
  return (
    <Section>
      <Container>
        <Panel>
          <div className={`page-row align-items-stretch`}>
            {/* left image */}

            <div className={`page-col-12 page-col-lg-6 ${styles.imageCol}`}>
              <img
                src={chargeImage}
                alt="charge-image"
                className={styles.chargeImage}
              />
            </div>

            {/* right content */}
            <div className={`page-col-12 page-col-lg-6 `}>
              <SectionHeader
                eyebrow="Charge Management Software"
                title="What Is the CMS Solution?"
                subtitle="Best Charg CMS is an advanced cloud-based platform that enables real-time monitoring, control, billing, and analytics of EV charging networks. It simplifies operations while ensuring seamless charging experiences for drivers and operators."
              />
            </div>

            {/* Items */}
            <div className={styles.items}>
              {items.map((item) => (
                <div className={styles.item} key={item.title}>
                  <img src={item.icon} alt="" className={styles.icon} />

                  <div>
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

export default ChargeManagement;
