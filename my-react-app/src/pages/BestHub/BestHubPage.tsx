import HeroSection from "./HeroSection";
import BestHubExperience from "./BestHubExperience";
import Arrival from "./Arrival";
import SustainableGrowth from "./SustainableGrowth";
import BusinessImpact from "./BusinessImpact";

import { FaqSection } from "../../shared/ui";
import BuildTheFuture from "../../shared/ui/buildTheFuture-section/BuildTheFuture";

import { useBestHubQuery } from "../../features/BestHubPage/hooks/useBestHub";
const BestHubPage = () => {
  const { data } = useBestHubQuery();

  const bestHub = data?.[0];
  return (
    <main>
      <HeroSection bestHub={bestHub} />
      <BestHubExperience />
      <Arrival bestHub={bestHub} />
      <SustainableGrowth bestHub={bestHub} />
      <BusinessImpact bestHub={bestHub} />

      <FaqSection
        eyebrow={bestHub?.faqSectionLabel}
        title={bestHub?.faqSectionTitle}
        align="center"
        showHeader={true}
        items={bestHub?.faqItems ?? []}
      />

      <BuildTheFuture
        subtitle={
          <>
            Transform Charging Stops into Valuable <br />
            Destinations
          </>
        }
        title={
          <>
            Create integrated mobility hubs that combine EV charging with
            retail, dining, convenience,
            <br />
            and essential services to maximize every visit.
          </>
        }
      />
    </main>
  );
};

export default BestHubPage;
