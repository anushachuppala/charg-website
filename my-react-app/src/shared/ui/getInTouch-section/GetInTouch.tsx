import styles from "./GetInTouch.module.css";
import getInTouch from "../../../assets/Services-page/getInTouch.png";

import { Section, Container, Panel } from "../../../shared/layout";

import { SectionHeader } from "../section-header";

type GetInTouchProps = {
  title: string;
  subtitle: string;
  showHeader?: boolean;
  align?: "start" | "center";
};

export function GetInTouch({
  title,
  subtitle,
  showHeader = true,
  align = "center",
}: GetInTouchProps) {
  return (
    <Section className={styles.section}>
      <Container>
        <Panel>
          <div className={styles.grid}>
            <div className={styles.content}>
              {showHeader && (
                <SectionHeader
                  title={title}
                  subtitle={subtitle}
                  align={align}
                />
              )}

              <div className={styles.imageWrapper}>
                <img src={getInTouch} alt="EV charging station" />
              </div>
            </div>

            <form className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label htmlFor="firstName">
                    First Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="lastName">
                    Last Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label htmlFor="email">
                    Email <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Email Address"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="phone">Phone number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter Your Number"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Enter City"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter Your Message"
                  rows={5}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}
