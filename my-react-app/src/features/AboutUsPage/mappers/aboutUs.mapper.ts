import type { AboutUsWire } from "../api/aboutUs.api.types";
import type { AboutUs } from "../dto/aboutUs.dto";

export function mapAboutUS(wire: AboutUsWire): AboutUs {
  return {
    id: wire.id,
    title: wire.title,
    heroTitle: wire.heroTitle,
    heroSubtitle: wire.heroSubtitle,
    heroDescription: wire.heroDescription,
    heroBackgroundImage: wire.heroBackgroundImage,

    strengthSectionTitle: wire.strengthSectionTitle,
    strengthSectionSubtitle: wire.strengthSectionSubtitle,
    strengthCards: wire.strengthCards,

    partnersSectionTitle: wire.partnersSectionTitle,
    partnersSectionSubtitle: wire.partnersSectionSubtitle,
    partners: wire.partners,

    faqSectionLabel: wire.faqSectionLabel,
    faqSectionTitle: wire.faqSectionTitle,
    faqFeaturedImage: wire.faqFeaturedImage,

    faqItems: wire.faqItems,
  };
}
