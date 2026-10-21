import {
  useState,
  useLayoutEffect,
  useRef,
  type ChangeEvent,
  type FormEvent,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./GetInTouch.module.css";
import getInTouch from "../../../assets/Services-page/getInTouch.png";

import { Section, Container, Panel } from "../../../shared/layout";
import { SectionHeader } from "../section-header";

gsap.registerPlugin(ScrollTrigger);

type GetInTouchProps = {
  title: string;
  subtitle: string;
  align?: "center" | "start";
  showHeader?: boolean;
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

function GetInTouch({
  title,
  subtitle,
  align = "start",
  showHeader = true,
}: GetInTouchProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [successMessage, setSuccessMessage] = useState("");
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const content = contentRef.current;

    if (!content || !showHeader) return;

    const ctx = gsap.context(() => {
      const eyebrow = content.querySelector('[data-gsap="eyebrow"]');
      const heading = content.querySelector('[data-gsap="title"]');
      const description = content.querySelector('[data-gsap="subtitle"]');

      const elements = [eyebrow, heading, description].filter(
        (element): element is Element => element !== null,
      );

      if (elements.length === 0) return;

      gsap.fromTo(
        elements,
        {
          y: 30,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, content);

    return () => {
      ctx.revert();
    };
  }, [showHeader]);

  // Handle input changes
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("FORM SUBMITTED");
    console.log("FORM DATA:", formData);

    // Store form data in localStorage
    localStorage.setItem("getInTouchData", JSON.stringify(formData));

    setSuccessMessage("Thank you! Your message has been submitted.");

    // Clear the form
    setFormData(initialFormData);
  };

  return (
    <Section className={styles.section}>
      <Container>
        <Panel>
          <div className={styles.grid}>
            {/* Left side */}
            <div className={styles.content} ref={contentRef}>
              {showHeader && (
                <SectionHeader
                  eyebrow="GET IN TOUCH"
                  title={title}
                  subtitle={subtitle}
                  align={align}
                  animated={true}
                />
              )}

              <div className={styles.imageWrapper}>
                <img src={getInTouch} alt="Get in touch" />
              </div>
            </div>

            {/* Right side */}
            <form onSubmit={handleSubmit} className={styles.form}>
              {/* First Name + Last Name */}
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label htmlFor="firstName">
                    First Name <span className={styles.required}>*</span>
                  </label>

                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="lastName">
                    Last Name <span className={styles.required}>*</span>
                  </label>

                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label htmlFor="email">
                    Email <span className={styles.required}>*</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="phone">Phone number</label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Your Number"
                  />
                </div>
              </div>

              {/* Address */}
              <div className={styles.field}>
                <label htmlFor="address">Address</label>

                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter City"
                />
              </div>

              {/* Message */}
              <div className={styles.field}>
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter Your Message"
                  rows={5}
                />
              </div>

              {/* Submit button */}
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>

              {/* Success message */}
              {successMessage && (
                <p className={styles.successMessage}>{successMessage}</p>
              )}
            </form>
          </div>
        </Panel>
      </Container>
    </Section>
  );
}

export default GetInTouch;
