export type BestHubWire = {
  id: number;
  status: string;
  title: string;
  slug: string;

  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroBackgroundImage: string;
  heroBackgroundImageAlt: string;

  //   experience section
  experienceTitle: string;
  experienceSubtitle: string;
  experienceItems: ExperienceItemsCardWire[];

  //   sustainablegrowth section
  growthTitle: string;
  growthSubtitle: string;
  growthDescription: string;
  growthImage: string;
  growthItems: growthItemsCardWire[];

  //   opportunity section
  resultTitle: string;
  resultSubtitle: string;
  resultDescription: string;
  resultItems: resultItemsCardWire[];

  destinationItems: DestinationItemWire[];

  //   faq's section
  faqSectionLabel: string;
  faqSectionTitle: string;
  faqFeaturedImage: string;
  faqItems: faqItemsWire[];
};

export type ExperienceItemsCardWire = {
  icon: string;
  title: string;
  subtitle: string;
};

export type growthItemsCardWire = {
  icon: string;
  title: string;
  subtitle: string;
};

export type resultItemsCardWire = {
  icon: string;
  title: string;
  value: string;
  subtitle: string;
};

export type DestinationItemWire = {
  title: string;
  description: string;
};

export type faqItemsWire = {
  answer: string;
  question: string;
};
