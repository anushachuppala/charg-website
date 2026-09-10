export type AboutUs = {
  id: number;
  status: "draft" | "published";
  title: string;
  slug: string;

  heroTitle: string;
  // heroSubtitle: string;
  heroDescription: string;
  heroBackgroundImage: string;

  // strength section
  strengthSectionTitle: string;
  strengthSectionSubtitle: string;
  strengthCards: strengthCard[];

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

export type faqItems = {
  question: string;
  answer: string;
};

export type faqItem = {
  question: string;
  answer: string;
};
