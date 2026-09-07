import { useState, type ChangeEvent, type FormEvent } from "react";

import styles from "./GetInTouch.module.css";
import getInTouch from "../../../assets/Services-page/getInTouch.png";

import { Section, Container, Panel } from "../../../shared/layout";

import { SectionHeader } from "../section-header";

import { createGetInTouch } from "../../../features/api/getInTouch.api.http";

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
  // Form data
  const [formData, setFormData] = useState<FormData>(initialFormData);

  // API states
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Start API loading
    setLoading(true);

    // Clear previous messages
    setSuccessMessage("");
    setErrorMessage("");

    try {
      // Send form data to API
      const response = await createGetInTouch(formData);

      console.log("API RESPONSE:", response);

      const existingLocalData = localStorage.getItem("getInTouchMessages");

      const localMessages: FormData[] = existingLocalData
        ? JSON.parse(existingLocalData)
        : [];

      localMessages.push(formData);

      localStorage.setItem("getInTouchMessages", JSON.stringify(localMessages));

      const existingSessionData = sessionStorage.getItem("getInTouchMessages");

      const sessionMessages: FormData[] = existingSessionData
        ? JSON.parse(existingSessionData)
        : [];

      sessionMessages.push(formData);

      sessionStorage.setItem(
        "getInTouchMessages",
        JSON.stringify(sessionMessages),
      );

      setSuccessMessage("Your message has been submitted successfully.");

      // Reset form
      setFormData(initialFormData);
    } catch (error) {
      console.error("API ERROR:", error);

      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      // Stop loading
      setLoading(false);
    }
  };

  return (
    <Section className={styles.section}>
      <Container>
        <Panel>
          <div className={styles.grid}>
            {/* Left Content */}
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

            {/* Right Form */}
            <form className={styles.form} onSubmit={handleSubmit}>
              {/* First Name & Last Name */}
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

              {/* Email & Phone */}
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

              {/* Address */}
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

              {/* Message */}
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

              {/* Submit Button */}
              <button
                type="submit"
                className={styles.submitButton}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Send Message"}
              </button>

              {/* Success Message */}
              {successMessage && <p>{successMessage}</p>}

              {/* Error Message */}
              {errorMessage && <p>{errorMessage}</p>}
            </form>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}
