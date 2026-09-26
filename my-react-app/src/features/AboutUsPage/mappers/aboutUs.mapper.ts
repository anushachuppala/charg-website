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

    faqSectionLabel: wire.faqSectionLabel,
    faqSectionTitle: wire.faqSectionTitle,
    faqItems: wire.faqItems,
  };
}
