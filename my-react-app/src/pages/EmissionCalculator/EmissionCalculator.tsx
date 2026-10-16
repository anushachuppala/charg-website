import HeroSection from "./HeroSection";
import MeasureCarbon from "./MeasureCarbon";
import Methodology from "./Methodology";

const EmissionCalculator = () => {
  console.log("hero section is rendering");
  return (
    <main>
      <HeroSection />
      <MeasureCarbon />
      <Methodology />
    </main>
  );
};

export default EmissionCalculator;
