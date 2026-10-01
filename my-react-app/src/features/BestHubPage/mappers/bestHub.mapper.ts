import { getBestHub } from "../api/bestHub.http";

import type {
  ExperienceItemsCardWire,
  growthItemsCardWire,
  resultItemsCardWire,
  DestinationItemWire,
  faqItemsWire,
  BestHubWire,
} from "../api/bestHub.api.types";

import type {
  ExperienceItemsCard,
  growthItemsCard,
  resultItemsCard,
  DestinationItem,
  faqItems,
  BestHub,
} from "../dto/bestHub.dto";

export type { BestHub };

export function mapExperienceItemsCard(
  wire: ExperienceItemsCardWire,
): ExperienceItemsCard {
  return {
    icon: wire.icon || "",
    title: wire.title?.trim() || "",
    subtitle: wire.subtitle?.trim() || "",
  };
}

export function mapgrowthItemsCard(wire: growthItemsCardWire): growthItemsCard {
  return {
    icon: wire.icon || "",
    title: wire.title?.trim() || "",
    subtitle: wire.subtitle?.trim() || "",
  };
}

export function mapresultItemsCard(wire: resultItemsCardWire): resultItemsCard {
  return {
    icon: wire.icon || "",
    title: wire.title?.trim() || "",
    value: wire.value?.trim() || "",
    subtitle: wire.subtitle?.trim() || "",
  };
}

export function mapDestinationItem(wire: DestinationItemWire): DestinationItem {
  return {
    title: wire.title?.trim() || "",
    description: wire.description?.trim() || "",
  };
}

export function mapfaqItems(wire: faqItemsWire): faqItems {
  return {
    answer: wire.answer?.trim() || "",
    question: wire.question?.trim() || "",
  };
}

export function mapBestHub(wire: BestHubWire): BestHub {
  return {
    id: wire.id || 0,
    status: wire?.status || "",
    title: wire?.title || "",
    slug: wire?.slug || "",
    heroTitle: wire?.heroTitle || "",
    heroSubtitle: wire?.heroSubtitle || "",
    heroDescription: wire?.heroDescription || "",
    heroBackgroundImage: wire?.heroBackgroundImage || "",
    heroBackgroundImageAlt: wire?.heroBackgroundImageAlt || "",
    experienceTitle: wire?.experienceTitle || "",
    experienceSubtitle: wire?.experienceSubtitle || "",
    experienceItems: Array.isArray(wire?.experienceItems)
      ? wire.experienceItems.map(mapExperienceItemsCard)
      : [],
    growthTitle: wire?.growthTitle || "",
    growthSubtitle: wire?.growthSubtitle || "",
    growthDescription: wire?.growthDescription || "",
    growthImage: wire?.growthImage || "",
    growthItems: Array.isArray(wire?.growthItems)
      ? wire.growthItems.map(mapgrowthItemsCard)
      : [],
    resultTitle: wire?.resultTitle || "",
    resultSubtitle: wire?.resultSubtitle || "",
    resultDescription: wire?.resultDescription || "",
    resultItems: Array.isArray(wire?.resultItems)
      ? wire.resultItems.map(mapresultItemsCard)
      : [],

    destinationItems: Array.isArray(wire?.destinationItems)
      ? wire.destinationItems.map(mapDestinationItem)
      : [],
    faqSectionLabel: wire?.faqSectionLabel || "",
    faqSectionTitle: wire?.faqSectionTitle || "",
    faqFeaturedImage: wire?.faqFeaturedImage || "",
    faqItems: Array.isArray(wire?.faqItems)
      ? wire.faqItems.map(mapfaqItems)
      : [],
  };
}

export async function getMappedBestHub(): Promise<BestHub[]> {
  const data = await getBestHub();
  if (!data) return [];
  const rows = Array.isArray(data) ? data : [data];
  // Safety net: backend may still return drafts — only show published
  return rows
    .map(mapBestHub)
    .filter((row) => row.status.toLowerCase() === "published");
}
