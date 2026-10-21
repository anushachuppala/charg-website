import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./BestHubExperience.module.css";
import ExperienceImage from "../../assets/BestHub-page/experience-image.png";
import dotImage from "../../assets/BestHub-page/dot.gif";

import { Section, Container, Panel } from "../../shared/layout";
import { SectionHeader } from "../../shared/ui";

gsap.registerPlugin(ScrollTrigger);

function BestHubExperience() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      // 1. Eyebrow
      timeline.fromTo(
        '[data-gsap="eyebrow"]',
        { y: 25, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.5 },
      );

      // 2. Main title
      timeline.fromTo(
        '[data-gsap="title"]',
        { y: 30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6 },
        "-=0.25",
      );

      // 3. Experience image
      timeline.fromTo(
        `.${styles.ExperienceImage}`,
        { autoAlpha: 0, scale: 0.97 },
        { autoAlpha: 1, scale: 1, duration: 0.7 },
        "-=0.2",
      );

      // 4. Landmark text content
      const landmarks = section.querySelectorAll(`.${styles.landmark}`);

      landmarks.forEach((landmark, index) => {
        const textContent = landmark.querySelector(`.${styles.markerWrapper}`);

        // Animate the label content without changing landmark positioning.
        if (textContent) {
          timeline.fromTo(
            textContent,
            { autoAlpha: 0, y: 12 },
            { autoAlpha: 1, y: 0, duration: 0.4 },
            index === 0 ? "-=0.15" : "-=0.25",
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <Section className={styles.Section}>
      <Container>
        <div ref={sectionRef}>
          <Panel>
            <div className={styles.content}>
              <SectionHeader
                as="div"
                eyebrow="The Best HUB Experience"
                title="Everything you need, while your vehicle recharges."
                align="center"
                trailingSpacing="default"
                subtitleClassName="default"
                animated
              />
            </div>

            <div className={styles.image}>
              <img
                src={ExperienceImage}
                alt="BestHub experience Image."
                className={styles.ExperienceImage}
              />

              <div className={`${styles.landmark} ${styles.stay}`}>
                <span className={styles.markerWrapper}>
                  <img src={dotImage} alt="" className={styles.marker} />
                  Stay
                </span>
              </div>

              <div className={`${styles.landmark} ${styles.play}`}>
                <span className={styles.markerWrapper}>
                  <img src={dotImage} alt="" className={styles.marker} />
                  Play
                </span>
              </div>

              <div className={`${styles.landmark} ${styles.coWorking}`}>
                <span className={styles.markerWrapper}>
                  <img src={dotImage} alt="" className={styles.marker} />
                  Co-Working
                </span>
              </div>

              <div className={`${styles.landmark} ${styles.Shop}`}>
                <span className={styles.markerWrapper}>
                  <img src={dotImage} alt="" className={styles.marker} />
                  Shop
                </span>
              </div>

              <div className={`${styles.landmark} ${styles.cafe}`}>
                <span className={styles.markerWrapper}>
                  <img src={dotImage} alt="" className={styles.marker} />
                  Cafe
                </span>
              </div>
            </div>
          </Panel>
        </div>
      </Container>
    </Section>
  );
}

export default BestHubExperience;
