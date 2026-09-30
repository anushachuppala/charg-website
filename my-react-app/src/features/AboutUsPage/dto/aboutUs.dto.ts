export type AboutUs = {
  id: number;
  status: string;
  title: string;
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroBackgroundImage: string;
  heroBackgroundVideo: string;

  // strength section
  strengthSectionTitle: string;
  strengthSectionSubtitle: string;
  strengthCards: StrengthCard[];

  // partners section
  partnersSectionTitle: string;
  partnersSectionSubtitle: string;
  partners: Partner[];

  // faq section
  faqSectionLabel: string;
  faqSectionTitle: string;
  faqFeaturedImage: string;
  faqItems: FaqItem[];
};

export type StrengthCard = {
  image: string;
  title: string;
  subtitle: string;
  items: StrengthCardItem[];
};

export type StrengthCardItem = {
  icon: string;
  description: string;
};

export type Partner = {
  image: string;
  imageAltText: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
