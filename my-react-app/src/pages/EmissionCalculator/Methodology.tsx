import { useState } from "react";
import styles from "./Methodology.module.css";
import { SectionHeader } from "../../shared/ui";
import { Section, Container, Panel } from "../../shared/layout";

import carIcon from "../../assets/Emission-calculator/carIcon.png";
import distanceIcon from "../../assets/Emission-calculator/distanceIcon.png";
import fuelIcon from "../../assets/Emission-calculator/fuelIcon.png";
import factorIcon from "../../assets/Emission-calculator/factorIcon.png";
import emissionIcon from "../../assets/Emission-calculator/emissionIcon.png";

const cardsInfo = [
  {
    step: 1,
    icon: carIcon,
    title: "vechicle",
    description: "Pick your vehicle make and model.",
  },
  {
    step: 2,
    icon: distanceIcon,
    title: "Distance",
    description: "Kilometres travelled.",
  },
  {
    step: 3,
    icon: fuelIcon,
    title: "Fuel Consumption",
    description: "Actual or estimated.",
  },
  {
    step: 4,
    icon: factorIcon,
    title: "Emission Factor",
    description: "kgCO₂e per unit.",
  },
  {
    step: 5,
    icon: emissionIcon,
    title: "CO₂ Emissions",
    description: "Your trip's total.",
  },
];

function Methodology() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <Section>
      <Container>
        <Panel>
          <div className={styles.textContent}>
            <SectionHeader
              as="div"
              eyebrow="Methodology"
              title="How Is This Calculated?"
              subtitle="A transparent, science-based approach using internationally recognized emission factors from the IPCC and India's national inventory."
            />
          </div>
        </Panel>
      </Container>

      <div className={styles.cardsWrapper}>
        <div className={styles.cards}>
          {cardsInfo.map((card) => {
            const isActive = activeStep === card.step;

            return (
              <article
                key={card.step}
                className={`${styles.card} ${isActive ? styles.active : ""}`}
                onMouseEnter={() => setActiveStep(card.step)}
                onMouseLeave={() => setActiveStep(null)}
                onFocus={() => setActiveStep(card.step)}
                onBlur={() => setActiveStep(null)}
                tabIndex={0}
              >
                <div className={styles.cardTop}>
                  <span className={styles.iconBox}>
                    <img
                      src={card.icon}
                      alt=""
                      className={styles.icon}
                      aria-hidden="true"
                    />
                  </span>
                  <span className={styles.stepLabel}>STEP {card.step}</span>
                </div>

                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default Methodology;
