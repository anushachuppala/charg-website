import { getProducts } from "../api/products.http";

import type {
  HeroSpecsWire,
  FeatureCardsWire,
  SmartFeatureCardsWire,
  SafetyItemsWire,
  TechnicalSpecificationItemWire,
  TechnicalSpecificationWire,
  FaqItemsWire,
  ProductsWire,
} from "../api/products.api.types";

import type {
  HeroSpecs,
  FeatureCard,
  SmartFeatureCard,
  SafetyItem,
  TechnicalSpecificationItem,
  TechnicalSpecifications,
  FaqItem,
  Products,
} from "../dto/products.dto";

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

export function mapTechnicalSpecificationItem(
  wire: TechnicalSpecificationItemWire,
): TechnicalSpecificationItem {
  return {
    label: wire?.label || "",
    value: wire?.value || "",
  };
}

export function mapTechnicalSpecifications(
  wire: TechnicalSpecificationWire,
): TechnicalSpecifications {
  return {
    ui: Array.isArray(wire?.ui)
      ? wire.ui.map(mapTechnicalSpecificationItem)
      : [],

    general: Array.isArray(wire?.general)
      ? wire.general.map(mapTechnicalSpecificationItem)
      : [],
    mechanical: Array.isArray(wire?.mechanical)
      ? wire.mechanical.map(mapTechnicalSpecificationItem)
      : [],
    communication: Array.isArray(wire?.communication)
      ? wire.communication.map(mapTechnicalSpecificationItem)
      : [],
    environment: Array.isArray(wire?.environment)
      ? wire.environment.map(mapTechnicalSpecificationItem)
      : [],

    "Certifications And Standards": Array.isArray(
      wire?.["Certifications And Standards"],
    )
      ? wire["Certifications And Standards"].map(mapTechnicalSpecificationItem)
      : [],
  };
}

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
  console.log("Mapping product:", wire.id, wire.title);

  console.log("RAW SAFETY TITLE:", wire.safetyTitle);
  console.log("RAW SAFETY DESCRIPTION:", wire.safetyDescription);
  console.log("RAW SAFETY TAGS:", wire.safetyTags);

  console.log("RAW SAFETY ITEMS:", JSON.stringify(wire.safetyItems, null, 2));

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

    technicalSpecifications: mapTechnicalSpecifications(
      wire.technicalSpecifications,
    ),

    safetyTitle: wire?.safetyTitle || "",

    safetyDescription: wire?.safetyDescription || "",

    safetyTags: Array.isArray(wire.safetyTags) ? wire.safetyTags : [],

    safetyItems: Array.isArray(wire?.safetyItems)
      ? wire.safetyItems.map(mapSafetyItem)
      : [],
    faqSectionLabel: wire?.faqSectionLabel || "",
    faqItems: Array.isArray(wire?.faqItems)
      ? wire.faqItems.map(mapFaqItem)
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
