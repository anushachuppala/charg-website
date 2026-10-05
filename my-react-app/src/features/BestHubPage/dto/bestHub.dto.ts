
export type BestHub = {
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
  experienceItems: ExperienceItemsCard[];

  //   sustainablegrowth section
  growthTitle: string;
  growthSubtitle: string;
  growthDescription: string;
  growthImage: string;
  growthItems: growthItemsCard[];

  //   opportunity section
  resultTitle: string;
  resultSubtitle: string;
  resultDescription: string;
  resultItems: resultItemsCard[];

  destinationItems: DestinationItem[];

  //   faq's section
  faqSectionLabel: string;
  faqSectionTitle: string;
  faqFeaturedImage: string;
  faqItems: faqItems[];
};

export type ExperienceItemsCard = {
  icon: string;
  title: string;
  subtitle: string;
};

export type growthItemsCard = {
  icon: string;
  title: string;
  subtitle: string;
};

export type resultItemsCard = {
  icon: string;
  title: string;
  value: string;
  subtitle: string;
};

export type DestinationItem = {
  title: string;
  description: string;
};

export type faqItems = {
  answer: string;
  question: string;
};
