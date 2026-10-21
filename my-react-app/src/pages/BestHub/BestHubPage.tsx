import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroSection from "./HeroSection";
import BestHubExperience from "./BestHubExperience";
import Arrival from "./Arrival";
import SustainableGrowth from "./SustainableGrowth";
import BusinessImpact from "./BusinessImpact";

import { FaqSection } from "../../shared/ui";
import BuildTheFuture from "../../shared/ui/buildTheFuture-section/BuildTheFuture";

import { useBestHubQuery } from "../../features/BestHubPage/hooks/useBestHub";

gsap.registerPlugin(ScrollTrigger);

const BestHubPage = () => {
  const { data } = useBestHubQuery();
  const bestHub = data?.[0];

  const businessImpactRef = useRef<HTMLDivElement | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);
  const buildFutureRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const sections = [
      businessImpactRef.current,
      faqRef.current,
      buildFutureRef.current,
    ].filter((section): section is HTMLDivElement => section !== null);

    const ctx = gsap.context(() => {
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          {
            y: 35,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              once: true,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <HeroSection bestHub={bestHub} />

      <BestHubExperience />

      <Arrival bestHub={bestHub} />

      <SustainableGrowth bestHub={bestHub} />

      <div ref={businessImpactRef}>
        <BusinessImpact bestHub={bestHub} />
      </div>

      <div ref={faqRef}>
        <FaqSection
          eyebrow={bestHub?.faqSectionLabel}
          title={bestHub?.faqSectionTitle}
          align="center"
          showHeader={true}
          items={bestHub?.faqItems ?? []}
        />
      </div>

      <div ref={buildFutureRef}>
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
      </div>
    </main>
  );
};

export default BestHubPage;
