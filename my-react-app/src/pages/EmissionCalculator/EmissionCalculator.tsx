import HeroSection from "./HeroSection";
import MeasureCarbon from "./MeasureCarbon";
import Methodology from "./Methodology";

import BuildTheFuture from "../../shared/ui/buildTheFuture-section/BuildTheFuture";

const EmissionCalculator = () => {
  console.log("hero section is rendering");
  return (
    <main>
      <HeroSection />
      <MeasureCarbon />
      <Methodology />
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
