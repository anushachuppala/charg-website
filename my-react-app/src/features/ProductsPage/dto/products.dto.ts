export type Products = {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  capacity: string;
  status: string;

  // Hero section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage: string;
  heroTags: string[];
  heroSpecs: HeroSpecs[];

  // Why Aries section
  featuresSectionLabel: string;
  featuresSectionTitle: string;
  featuresSectionDescription: string;
  featureCards: FeatureCard[];

  // Product showcase section
  overviewImages: string[];

  // Smart features section
  smartFeatureCards: SmartFeatureCard[];

  // Technical specifications section
  specificationTabs: string[];
  technicalSpecifications: TechnicalSpecifications;

  // Safety and reliability section
  safetyTitle: string;
  safetyDescription: string;
  safetyTags: string[];
  safetyItems: SafetyItem[];

  // FAQ section
  faqSectionLabel: string;
  faqItems: FaqItem[];
};

export type HeroSpecs = {
  label: string;
  answer: string;
};

export type FeatureCard = {
  icon: string;
  title: string;
  description: string;
};

export type SmartFeatureCard = {
  icon: string;
  title: string;
  description: string;
};

export type SafetyItem = {
  icon: string;
  title: string;
  description: string;
};

export type FaqItem = {
  answer: string;
  question: string;
};

export type TechnicalSpecificationItem = {
  label: string;
  value: string;
};

export type TechnicalSpecifications = {
  ui: TechnicalSpecificationItem[];
  general: TechnicalSpecificationItem[];
  mechanical: TechnicalSpecificationItem[];
  communication: TechnicalSpecificationItem[];
  environmental: TechnicalSpecificationItem[];
  "certifications and standards": TechnicalSpecificationItem[];
};
