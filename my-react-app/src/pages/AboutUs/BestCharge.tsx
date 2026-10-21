import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import serviceIcon from "../../assets/images/About-page/service 1.png";
import styles from "./BestCharge.module.css";
import { Section, Container, Panel } from "../../shared/layout";

gsap.registerPlugin(ScrollTrigger);

const BestCharge = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const featureItems = section.querySelectorAll(`.${styles.featureItem}`);

      gsap.fromTo(
        featureItems,
        {
          x: -40,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.7,
          stagger: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <Section className={styles.bestChargeSection}>
      <Container>
        <Panel>
          <div className={styles.bestChargeContainer} ref={sectionRef}>
            {/* Engineering Excellence */}
            <div className={styles.featureItem}>
              <img
                src={serviceIcon}
                alt="Engineering Excellence"
                className={styles.featureIcon}
              />
              <div className={styles.featureContent}>
                <h3 className="heading">Engineering Excellence</h3>
                <p className={styles.content}>
                  Built for Safety, reliability, and long-term performance.
                </p>
              </div>
              <div className={styles.divider}></div>
            </div>

            {/* Sustainable Future */}
            <div className={styles.featureItem}>
              <img
                src={serviceIcon}
                alt="Sustainable Future"
                className={styles.featureIcon}
              />
              <div className={styles.featureContent}>
                <h3 className="heading">Sustainable Future</h3>
                <p className={styles.content}>
                  Driving Clean mobility for a better tomorrow.
                </p>
              </div>
              <div className={styles.divider}></div>
            </div>

            {/* Trusted Partnership */}
            <div className={styles.featureItem}>
              <img
                src={serviceIcon}
                alt="Trusted Partnership"
                className={styles.featureIcon}
              />
              <div className={styles.featureContent}>
                <h3 className="heading">Trusted Partnership</h3>
                <p className={styles.content}>
                  Collaborating with governments, Industries and Communities.
                </p>
              </div>
            </div>
          </div>
        </Panel>
      </Container>
    </Section>
  );
};

export default BestCharge;
