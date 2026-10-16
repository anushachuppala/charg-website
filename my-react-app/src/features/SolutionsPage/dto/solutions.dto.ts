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

// home charging //
export type HomeCharging = {
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
  heroTypes: HeroType[];

  viewDistance: string;
  viewType: string;

  trustTitle: string;
  trustSubtitle: string;
  trustDescription: string;
  trust: TrustItem[];

  overviewTitle: string;
  overviewSubtitle: string;
  overviewDescription: string;
  overviewImage: string;
  overviewPoints: OverviewPoint[];

  recommendedTitle: string;
  recommendedSubtitle: string;
  recommendedDescription: string;
  recommended: RecommendedProduct[];

  featuredTitle: string;
  featuredSubtitle: string;
  featured: FeaturedItem[];

  destinationTitle: string;
  destinationSubtitle: string;
  destinationDescription: string;
  destination: DestinationItem[];

  faqTitle?: string;
  faqImage?: string;
  faqs: HomeChargingFaq[];
};

export type HeroType = {
  viewDistance: string;
  viewType: string;
};

export type TrustItem = {
  icon: string;
  title: string;
  subtitle: string;
};

export type OverviewPoint = {
  description: string;
};

export type RecommendedProduct = {
  image: string;
  title: string;
  subtitle: string;
  chargerType: string;
};

export type FeaturedItem = {
  icon: string;
  title: string;
  subtitle: string;
};

export type DestinationItem = {
  image: string;
  title: string;
  subtitle: string;
};

export type HomeChargingFaq = {
  question: string;
  answer: string;
};
