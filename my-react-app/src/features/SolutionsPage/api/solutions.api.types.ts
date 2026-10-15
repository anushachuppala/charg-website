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

// home charging //

export type EvSolutionWire= {
  id: number;
  title: string;
  slug: string;
  description: string;
  summary: string;
  status: string;
  categoryId: number | null;

  tags: string[];
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage: string;
  heroTypes: HeroTypeWire[];

  viewDistance: string;
  viewType: string;

  trustTitle: string;
  trustSubtitle: string;
  trustDescription: string;
  trust: TrustWire[];

  overviewTitle: string;
  overviewSubtitle: string;
  overviewDescription: string;
  overviewImage: string;
  overviewPoints: OverviewPointWire[];

  recommendedTitle: string;
  recommendedSubtitle: string;
  recommendedDescription: string;
  recommended: RecommendedWire[];

  featuredTitle: string;
  featuredSubtitle: string;
  featured: FeaturedWire[];

  destinationTitle: string;
  destinationSubtitle: string;
  destinationDescription: string;
  destination: DestinationWire[];

  faqTitle?: string;
  faqImage?: string;
  faqs: HomeChargingFaqWire[];
};

export type HeroTypeWire = {
  viewDistance: string;
  viewType: string;
};

export type TrustWire = {
  icon: string;
  title: string;
  subtitle: string;
};

export type OverviewPointWire = {
  description: string;
};

export type RecommendedWire = {
  image: string;
  title: string;
  subtitle: string;
  chargerType: string;
};

export type FeaturedWire = {
  icon: string;
  title: string;
  subtitle: string;
};

export type DestinationWire = {
  image: string;
  title: string;
  subtitle: string;
};

export type HomeChargingFaqWire = {
  answer: string;
  question: string;
};
