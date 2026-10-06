export type ProductsWire = {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  capacity: string;
  status: string;

  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage: string;
  heroTags: string[];
  heroSpecs: HeroSpecsWire[];

  // Why Aries section
  featuresSectionLabel: string;
  featuresSectionTitle: string;
  featuresSectionDescription: string;
  featureCards: FeatureCardsWire[];

  // Product showcase section
  overviewImages: string[];

  // Smart features section
  smartFeatureCards: SmartFeatureCardsWire[];

  // Technical specifications section
  specificationTabs: string[];
  technicalSpecifications: TechnicalSpecificationWire;

  // Safety and reliability section
  safetyTitle: string;
  safetyDescription: string;
  safetyTags: string[];
  safetyItems: SafetyItemsWire[];

  // FAQ section
  faqSectionLabel: string;
  faqItems: FaqItemsWire[];
};

export type HeroSpecsWire = {
  label: string;
  answer: string;
};

export type FeatureCardsWire = {
  icon: string;
  title: string;
  description: string;
};

export type SmartFeatureCardsWire = {
  icon: string;
  title: string;
  description: string;
};

export type SafetyItemsWire = {
  icon: string;
  title: string;
  description: string;
};

export type FaqItemsWire = {
  answer: string;
  question: string;
};

export type TechnicalSpecificationItemWire = {
  label: string;
  value: string;
};

export type TechnicalSpecificationWire = {
  ui: TechnicalSpecificationItemWire[];
  general: TechnicalSpecificationItemWire[];
  mechanical: TechnicalSpecificationItemWire[];
  communication: TechnicalSpecificationItemWire[];
  environmental: TechnicalSpecificationItemWire[];
  "certifications and standards": TechnicalSpecificationItemWire[];
};
