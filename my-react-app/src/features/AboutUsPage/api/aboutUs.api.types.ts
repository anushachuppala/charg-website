export type AboutUsWire = {
  id: number;
  status: "draft" | "published";
  title: string;
  slug: string;

  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroBackgroundImage: string;

  // strength section
  strengthSectionTitle: string;
  strengthSectionSubtitle: string;
  strengthCards: strengthCard[];
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
