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
  strengthCards: StrengthCardWire[];

  // partners section
  partnersSectionTitle: string;
  partnersSectionSubtitle: string;
  partners: PartnerWire[];

  // faq's section
  faqSectionLabel?: string;
  faqSectionTitle?: string;
  faqFeaturedImage?: string;
  faqItems?: FaqItemWire[];
};


// represents one card
export type StrengthCardWire = {
  image: string;
  title: string;
  subtitle: string;
  //  represents one item inside that card
  items: StrengthCardItemWire[];
};

export type StrengthCardItemWire = {
  icon: string;
  description: string;
};

export type PartnerWire = {
  image: string;
  imageAltText: string;
};

export type FaqItemWire = {
  question: string;
  answer: string;
};
