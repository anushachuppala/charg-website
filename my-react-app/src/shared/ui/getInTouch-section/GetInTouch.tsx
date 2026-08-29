import { useState } from "react";

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

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  message: string;
};

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  message: "",
};

export function GetInTouch({
  title,
  subtitle,
  showHeader = true,
  align = "center",
}: GetInTouchProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Local Storage

    // Get previous messages from localStorage
    const existingLocalData = localStorage.getItem("getInTouchMessages");

    // Convert previous data from string to array
    const localMessages: FormData[] = existingLocalData
      ? JSON.parse(existingLocalData)
      : [];

    // Add the new form data
    localMessages.push(formData);

    // Save it back into localStorage
    localStorage.setItem("getInTouchMessages", JSON.stringify(localMessages));

    // Session Storage

    // Get previous messages from sessionStorage
    const existingSessionData = sessionStorage.getItem("getInTouchMessages");

    // Convert previous data from string to array
    const sessionMessages: FormData[] = existingSessionData
      ? JSON.parse(existingSessionData)
      : [];

    // Add the new form data
    sessionMessages.push(formData);

    // Save it back into sessionStorage
    sessionStorage.setItem(
      "getInTouchMessages",
      JSON.stringify(sessionMessages),
    );

    // Reset the form
    setFormData(initialFormData);
  };

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
            <form className={styles.form} onSubmit={handleSubmit}>
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
                    value={formData.firstName}
                    onChange={handleChange}
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
                    value={formData.lastName}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
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
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
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

export default GetInTouch;
