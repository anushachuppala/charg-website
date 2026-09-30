import type {
  AboutUsWire,
  PartnerWire,
  StrengthCardItemWire,
  StrengthCardWire,
} from "../api/aboutUs.api.types";

import type {
  AboutUs,
  Partner,
  StrengthCard,
  StrengthCardItem,
} from "../dto/aboutUs.dto";

export type { AboutUs };

export function mapStrengthCardItem(
  wire: StrengthCardItemWire,
): StrengthCardItem {
  return {
    icon: wire.icon?.trim() || "",
    description: wire.description?.trim() || "",
  };
}

export function mapStrengthCard(wire: StrengthCardWire): StrengthCard {
  return {
    image: wire.image?.trim() || "",
    title: wire.title?.trim() || "",
    subtitle: wire.subtitle?.trim() || "",
    items: Array.isArray(wire?.items)
      ? wire.items.map(mapStrengthCardItem)
      : [],
  };
}

export function mapPartner(wire: PartnerWire): Partner {
  return {
    image: wire.image?.trim() || "",
    imageAltText: wire.imageAltText?.trim() || "",
  };
}

export function mapAboutUS(wire: AboutUsWire): AboutUs {
  return {
    id: wire.id || 0,
    status: wire?.status || "",
    title: wire?.title || "",
    slug: wire?.slug || "",
    heroTitle: wire?.heroTitle || "",
    heroSubtitle: wire?.heroSubtitle || "",
    heroDescription: wire?.heroDescription || "",
    heroBackgroundImage: wire?.heroBackgroundImage || "",
    heroBackgroundVideo: wire?.heroBackgroundVideo || "",

    strengthSectionTitle: wire?.strengthSectionTitle || "",
    strengthSectionSubtitle: wire?.strengthSectionSubtitle || "",
    strengthCards: wire?.strengthCards|| "",

    partnersSectionTitle: wire?.partnersSectionTitle || "",
    partnersSectionSubtitle: wire?.partnersSectionSubtitle || "",
    partners: wire?.partners,

    faqSectionLabel: wire?.faqSectionLabel || "",
    faqSectionTitle: wire?.faqSectionTitle || "",
    faqFeaturedImage: wire?.faqFeaturedImage || "",

    faqItems: Array.isArray(wire?.faqItems)
      ? wire.faqItems.map((item) => ({
          question: item?.question || "",
          answer: item?.answer || "",
        }))
      : [],
  };
}
