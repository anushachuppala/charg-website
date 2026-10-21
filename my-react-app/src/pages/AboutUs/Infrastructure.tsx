import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./Infrastructure.module.css";
import { Section, Container, Panel } from "../../shared/layout";

import InfrastructureImage from "../../assets/images/About-page/Infrastructure.png";
import BackgroundImage from "../../assets/images/About-page/backgroundImage.jpg";
import Button from "../../shared/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const Infrastructure = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const heading = section.querySelector(`.${styles.heading}`);
      const description = section.querySelector(`.${styles.Description}`);
      const buttons = section.querySelectorAll(`.${styles.heroButtons} button`);
      const image = section.querySelector(`.${styles.infrastructureImage}`);

      const contentElements = [
        heading,
        description,
        ...Array.from(buttons),
      ].filter((element): element is Element => element !== null);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      if (contentElements.length > 0) {
        timeline.fromTo(
          contentElements,
          {
            y: 35,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
        );
      }

      if (image) {
        timeline.fromTo(
          image,
          {
            x: 50,
            autoAlpha: 0,
          },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          ">",
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <Section className={styles.InfrastructureSection}>
      <img
        src={BackgroundImage}
        className={styles.backgroundImage}
        alt="background"
      />

      <Container>
        <Panel>
          <div className={styles.overlay}></div>

          <div className={styles.contentWrapper} ref={sectionRef}>
            <div className={styles.leftContent}>
              <h1 className={`h1-white ${styles.heading}`}>
                Let’s Build{" "}
                <span>
                  India’s
                  <br /> EV Infrastructure Together
                </span>
              </h1>

              <p className={`18-white ${styles.Description}`}>
                Best Hub transforms EV charging stations into vibrant
                destinations by combining fast charging with retail, dining,
                smart parking, digital services, and community spaces creating
                value for businesses and convenience for EV users.
              </p>

              <div className={styles.heroButtons}>
                <Button variant="secondary" className={styles.btn}>
                  Contact Us Now
                </Button>

                <Button variant="Tertiary" className={styles.btn}>
                  Become a Partner
                </Button>
              </div>
            </div>

            <div className={styles.rightContent}>
              <img
                src={InfrastructureImage}
                className={styles.infrastructureImage}
                alt="main-image"
              />
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
};

export default Infrastructure;
