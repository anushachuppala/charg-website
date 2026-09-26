export type AboutUs = {
  id: number;
  title: string;

  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroBackgroundImage: string;

  //  strength section
  strengthSectionTitle: string;
  strengthSectionSubtitle: string;
  strengthCards: strengthCard[];

  // partners section
  partnersSectionTitle: string;
  partnersSectionSubtitle: string;
  partners: Partner[];

  // faq section
  faqSectionLabel: string;
  faqSectionTitle: string;
  faqItems: faqItem[];
};

export type strengthCard = {
  image: string;
  title: string;
  subtitle: string;
  items: strengthItem[];
};

export type strengthItem = {
  icon: string;
  description: string;
};

export type Partner = {
  image: string;
  imageAltText: string;
};

export type faqItems = {
  question: string;
  answer: string;
};

export type faqItem = {
  question: string;
  answer: string;
};
