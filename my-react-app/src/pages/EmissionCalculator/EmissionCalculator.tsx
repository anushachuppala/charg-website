import { useRef } from "react";

import HeroSection from "./HeroSection";
import MeasureCarbon from "./MeasureCarbon";
import Methodology from "./Methodology";

import BuildTheFuture from "../../shared/ui/buildTheFuture-section/BuildTheFuture";

const EmissionCalculator = () => {
  const calculatorRef = useRef<HTMLElement | null>(null);
  const methodologyRef = useRef<HTMLElement | null>(null);

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToMethodology = () => {
    methodologyRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main>
      <HeroSection
        onCalculateNow={scrollToCalculator}
        onHowItWorks={scrollToMethodology}
      />

      <section ref={calculatorRef}>
        <MeasureCarbon />
      </section>

      <section ref={methodologyRef}>
        <Methodology />
      </section>

      <BuildTheFuture
        subtitle={<>Measure Your EV Emission Impact</>}
        title={
          <>
            Calculate your estimated carbon emissions and see how much CO₂ you
            can save by
            <br />
            choosing electric mobility over conventional vehicles.
          </>
        }
      />
    </main>
  );
};

export default EmissionCalculator;
