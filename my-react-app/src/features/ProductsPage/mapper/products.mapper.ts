import { getProducts } from "../api/products.http";

import type {
  HeroSpecsWire,
  FeatureCardsWire,
  SmartFeatureCardsWire,
  SafetyItemsWire,
  FaqItemsWire,
  ProductsWire,
} from "../api/products.api.types";

import type {
  HeroSpecs,
  FeatureCard,
  SmartFeatureCard,
  SafetyItem,
  FaqItem,
  Products,
} from "../dto/products.dto";
import { mapfaqItems } from "../../BestHubPage/mappers/bestHub.mapper";

export type { Products };

export function mapHeroSpecs(wire: HeroSpecsWire): HeroSpecs {
  return {
    label: wire.label || "",
    answer: wire.answer || "",
  };
}

export function mapFeatureCard(wire: FeatureCardsWire): FeatureCard {
  return {
    icon: wire.icon || "",
    title: wire.title || "",
    description: wire.description || "",
  };
}

export function mapSmartFeatureCard(
  wire: SmartFeatureCardsWire,
): SmartFeatureCard {
  return {
    icon: wire.icon || "",
    title: wire.title || "",
    description: wire.description || "",
  };
}

export const mapsmartFeatureCards = mapSmartFeatureCard;

export function mapSafetyItem(wire: SafetyItemsWire): SafetyItem {
  return {
    icon: wire.icon || "",
    title: wire.title || "",
    description: wire.description || "",
  };
}

export function mapFaqItem(wire: FaqItemsWire): FaqItem {
  return {
    answer: wire.answer || "",
    question: wire.question || "",
  };
}

export function mapProducts(wire: ProductsWire): Products {
  return {
    id: wire.id || 0,
    title: wire?.title || "",
    slug: wire?.slug || "",
    shortDescription: wire?.shortDescription || "",
    description: wire?.description || "",
    capacity: wire?.capacity || "",
    status: wire?.status || "",
    heroTitle: wire?.heroTitle || "",
    heroSubtitle: wire?.heroSubtitle || "",
    heroDescription: wire?.heroDescription || "",
    heroImage: wire?.heroImage || "",

    heroTags: Array.isArray(wire.heroTags) ? wire.heroTags : [],

    heroSpecs: Array.isArray(wire?.heroSpecs)
      ? wire.heroSpecs.map(mapHeroSpecs)
      : [],
    featuresSectionLabel: wire?.featuresSectionLabel || "",
    featuresSectionTitle: wire?.featuresSectionTitle || "",
    featuresSectionDescription: wire?.featuresSectionDescription || "",
    featureCards: Array.isArray(wire?.featureCards)
      ? wire.featureCards.map(mapFeatureCard)
      : [],

    overviewImages: Array.isArray(wire.overviewImages)
      ? wire.overviewImages
      : [],

    smartFeatureCards: Array.isArray(wire?.smartFeatureCards)
      ? wire.smartFeatureCards.map(mapSmartFeatureCard)
      : [],

    specificationTabs: Array.isArray(wire.specificationTabs)
      ? wire.specificationTabs
      : [],

    technicalSpecifications: wire?.technicalSpecifications,
    safetyTitle: wire?.safetyTitle || "",
    safetyDescription: wire?.safetyDescription || "",

    safetyTags: Array.isArray(wire.safetyTags) ? wire.safetyTags : [],

    safetyItems: Array.isArray(wire?.safetyItems)
      ? wire.safetyItems.map(mapSafetyItem)
      : [],
    faqSectionLabel: wire?.faqSectionLabel || "",
    faqItems: Array.isArray(wire?.faqItems)
      ? wire.faqItems.map(mapfaqItems)
      : [],
  };
}

export async function getMappedProducts(): Promise<Products[]> {
  const data = await getProducts();
  if (!data) return [];
  const rows = Array.isArray(data) ? data : [data];
  return rows
    .map(mapProducts)
    .filter((row) => row.status.toLowerCase() === "published");
}
