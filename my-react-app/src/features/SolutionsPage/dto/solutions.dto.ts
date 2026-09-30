export type Solutions = {
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
  whoIsThisForCards: WhoIsThisForCards[];

  //   cms section
  cmsSolutionLabel: string;
  cmsSolutionTitle: string;
  cmsSolutionDescription: string;
  cmsSolutionPoints: cmsSolutionPoint[];
  cmsSolutionImage: string;

  //   corePlatform section
  toolsSectionLabel: string;
  toolsSectionTitle: string;
  toolsCards: toolsItemCards[];

  //   benefits section
  efficiencyLabel: string;
  efficiencyTitle: string;
  efficiencyDescription: string;
  efficiencyPoints: efficiencyPoints[];
  efficiencyImage: string;

  //   keyFeatures section
  keyFeaturesLabel: string;
  keyFeaturesTitle: string;
  keyFeaturesCards: keyFeaturesCards[];

  //   powercharge section
  powerNetworkLabel: string;
  powerNetworkTitle: string;
  powerNetworkDescription: string;
  powerNetworkSteps: powerNetworkSteps[];
  powerNetworkImage: string;

  //   faq section
  faqSectionLabel: string;
  faqFeaturedImage: string;
  faqItems: FaqItem[];
};

export type WhoIsThisForCards = {
  icon: string;
  title: string;
  description: string;
};

export type cmsSolutionPoint = {
  label: string;
  description: string;
};

export type toolsItemCards = {
  icon: string;
  title: string;
  description: string;
};

export type efficiencyPoints = {
  label: string;
  description: string;
};

export type keyFeaturesCards = {
  icon: string;
  title: string;
  description: string;
};

export type powerNetworkSteps = {
  icon: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
