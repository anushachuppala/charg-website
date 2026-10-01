export type SolutionsWire = {
  id: number;
  status: string;
  title: string;
  slug: string;

  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  //   heroTags: [];
  //   heroSpecs: [];

  //   whoISThisFor section
  whoIsThisForLabel: string;
  whoIsThisForTitle: string;
  whoIsThisForCards: WhoIsThisForItemCardWire[];

  //   cms section
  cmsSolutionLabel: string;
  cmsSolutionTitle: string;
  cmsSolutionDescription: string;
  cmsSolutionPoints: cmsSolutionPointsWire[];
  cmsSolutionImage: string;

  //   corePlatform section
  toolsSectionLabel: string;
  toolsSectionTitle: string;
  toolsCards: toolsSectionItemCardsWire[];

  //   benefits section
  efficiencyLabel: string;
  efficiencyTitle: string;
  efficiencyDescription: string;
  efficiencyPoints: efficiencyItemPointsWire[];
  efficiencyImage: string;

  //   keyFeatures section
  keyFeaturesLabel: string;
  keyFeaturesTitle: string;
  keyFeaturesCards: keyFeaturesItemCardsWire[];

  //   powercharge section
  powerNetworkLabel: string;
  powerNetworkTitle: string;
  powerNetworkDescription: string;
  powerNetworkSteps: powerNetworkStepsWire[];
  powerNetworkImage: string;

  //   faq section
  faqSectionLabel: string;
  faqFeaturedImage: string;
  faqItems: FaqItemWire[];
};

export type WhoIsThisForItemCardWire = {
  icon: string;
  title: string;
  description: string;
};

export type cmsSolutionPointsWire = {
  label: string;
  description: string;
};

export type toolsSectionItemCardsWire = {
  icon: string;
  title: string;
  description: string;
};

export type efficiencyItemPointsWire = {
  label: string;
  description: string;
};

export type keyFeaturesItemCardsWire = {
  label?: string;
  icon?: string;
  title?: string;
  description?: string;
};

export type powerNetworkStepsWire = {
  icon: string;
  title: string;
  description: string;
};

export type FaqItemWire = {
  question: string;
  answer: string;
};
