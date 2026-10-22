import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./BeyondCharge.module.css";

import BeyondImage from "../../assets/images/About-page/beyondImage.png";
import { Section, Container, Panel } from "../../shared/layout";
import Button from "../../shared/ui/Button";

import { SectionHeader } from "../../shared/ui/section-header";

gsap.registerPlugin(ScrollTrigger);

const BeyondCharge = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const eyebrow = section.querySelector('[data-gsap="eyebrow"]');
      const title = section.querySelector('[data-gsap="title"]');
      const description = section.querySelector(`.${styles.description}`);
      const button = section.querySelector("button");
      const image = section.querySelector(`.${styles.beyondImage}`);

      const contentElements = [eyebrow, title, description, button].filter(
        (element): element is Element => element !== null,
      );

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
            y: 30,
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
            x: -50,
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
    <Section>
      <Container>
        <Panel>
          <div className="page-row align-items-center" ref={sectionRef}>
            <div className={`page-col-12 page-col-lg-6 ${styles.content}`}>
              <SectionHeader
                eyebrow="BEYOND CHARGING"
                title={<>Building Destinations, Not Just Charging Points</>}
                align="start"
                trailingSpacing="none"
                animated={true}
              />

              <p className={`18-neutral ${styles.description}`}>
                Best Hub is how we turn charging stations into places people
                actually want to stop combining fast charging with retail,
                dining, and digital services.
              </p>

              <Button variant="secondary">Learn more about Best Hub</Button>
            </div>

            <div className="page-col-12 page-col-lg-6">
              <img
                src={BeyondImage}
                alt="Best Charge EV charging station"
                className={styles.beyondImage}
              />
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
};

export default BeyondCharge;
