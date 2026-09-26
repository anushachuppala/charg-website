export type AboutUsWire = {
  id: number;
  title: string;

  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroBackgroundImage: string;

  // strength section
  strengthSectionTitle: string;
  strengthSectionSubtitle: string;
  strengthCards: StrengthCard[];

  // partners section
  partnersSectionTitle: string;
  partnersSectionSubtitle: string;
  partners: PartnerWire[];

  // faq's section
  faqSectionLabel: string;
  faqSectionTitle: string;
  faqFeaturedImage: string;
  faqItems: FaqItem[];
};

export type StrengthCard = {
  image: string;
  title: string;
  subtitle: string;
  items: StrengthItem[];
};

export type StrengthItem = {
  icon: string;
  description: string;
};

export type PartnerWire = {
  image: string;
  imageAltText: string;
};

export type FaqItems = {
  question: string;
  answer: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
