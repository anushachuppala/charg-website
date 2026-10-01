import { getSolutions } from "../api/solutions.http";

import type {
  WhoIsThisForItemCardWire,
  cmsSolutionPointsWire,
  toolsSectionItemCardsWire,
  efficiencyItemPointsWire,
  keyFeaturesItemCardsWire,
  powerNetworkStepsWire,
  FaqItemWire,
  SolutionsWire,
} from "../api/solutions.api.types";

import { resolveRemoteMediaUrl } from "../../../shared/services/resolveRemoteMediaUrl";

import type {
  Solutions,
  WhoIsThisForCards,
  cmsSolutionPoint,
  toolsItemCards,
  efficiencyPoints,
  keyFeaturesCards,
  powerNetworkSteps,
  FaqItem,
} from "../dto/solutions.dto";

export type { Solutions };

function cleanMediaUrl(url: string | undefined | null): string {
  if (!url) return "";
  return resolveRemoteMediaUrl(url.trim());
}

export function mapWhoIsThisForItemCard(
  wire: WhoIsThisForItemCardWire,
): WhoIsThisForCards {
  return {
    icon: cleanMediaUrl(wire?.icon),
    title: wire.title?.trim() || "",
    description: wire.description?.trim() || "",
  };
}

export function mapcmsSolutionPoint(
  wire: cmsSolutionPointsWire,
): cmsSolutionPoint {
  return {
    label: wire.label?.trim() || "",
    description: wire.description?.trim() || "",
  };
}

export function maptoolItemCards(
  wire: toolsSectionItemCardsWire,
): toolsItemCards {
  return {
    icon: cleanMediaUrl(wire?.icon),

    title: wire.title?.trim() || "",
    description: wire.description?.trim() || "",
  };
}

export function mapefficiencyPoints(
  wire: efficiencyItemPointsWire,
): efficiencyPoints {
  return {
    label: wire.label?.trim() || "",
    description: wire.description?.trim() || "",
  };
}

export function mapkeyFeaturesCards(
  wire: keyFeaturesItemCardsWire,
): keyFeaturesCards {
  return {
    icon: cleanMediaUrl(wire?.icon),
    title: wire.title?.trim() || "",
    description: wire.description?.trim() || "",
  };
}

export function mappowerNetworkSteps(
  wire: powerNetworkStepsWire,
): powerNetworkSteps {
  return {
    icon: cleanMediaUrl(wire?.icon),
    title: wire.title?.trim() || "",
    description: wire.description?.trim() || "",
  };
}

export function mapFaqItem(wire: FaqItemWire): FaqItem {
  return {
    question: wire.question?.trim() || "",
    answer: wire.answer?.trim() || "",
  };
}

export function mapSolutions(wire: SolutionsWire): Solutions {
  return {
    id: wire.id || 0,
    status: wire?.status || "",
    title: wire?.title || "",
    slug: wire?.slug || "",
    heroTitle: wire?.heroTitle || "",
    heroSubtitle: wire?.heroSubtitle || "",
    heroDescription: wire?.heroDescription || "",
    heroImage: cleanMediaUrl(wire?.heroImage),
    heroImageAlt: wire?.heroImageAlt || "",
    whoIsThisForLabel: wire?.whoIsThisForLabel || "",
    whoIsThisForTitle: wire?.whoIsThisForTitle || "",
    whoIsThisForCards: Array.isArray(wire?.whoIsThisForCards)
      ? wire.whoIsThisForCards.map(mapWhoIsThisForItemCard)
      : [],
    cmsSolutionLabel: wire?.cmsSolutionLabel || "",
    cmsSolutionTitle: wire?.cmsSolutionTitle || "",
    cmsSolutionDescription: wire?.cmsSolutionDescription || "",
    cmsSolutionPoints: Array.isArray(wire?.cmsSolutionPoints)
      ? wire.cmsSolutionPoints.map(mapcmsSolutionPoint)
      : [],
    cmsSolutionImage: cleanMediaUrl(wire?.cmsSolutionImage),
    toolsSectionLabel: wire?.toolsSectionLabel || "",
    toolsSectionTitle: wire?.toolsSectionTitle || "",
    toolsCards: Array.isArray(wire?.toolsCards)
      ? wire.toolsCards.map(maptoolItemCards)
      : [],
    efficiencyLabel: wire?.efficiencyLabel || "",
    efficiencyTitle: wire?.efficiencyTitle || "",
    efficiencyDescription: wire?.efficiencyDescription || "",
    efficiencyPoints: Array.isArray(wire?.efficiencyPoints)
      ? wire.efficiencyPoints.map(mapefficiencyPoints)
      : [],
    efficiencyImage: cleanMediaUrl(wire?.efficiencyImage),
    keyFeaturesLabel: wire?.keyFeaturesLabel || "",
    keyFeaturesTitle: wire?.keyFeaturesTitle || "",
    keyFeaturesCards: Array.isArray(wire?.keyFeaturesCards)
      ? wire.keyFeaturesCards.map(mapkeyFeaturesCards)
      : [],
    powerNetworkLabel: wire?.powerNetworkLabel || "",
    powerNetworkTitle: wire?.powerNetworkTitle || "",
    powerNetworkDescription: wire?.powerNetworkDescription || "",
    powerNetworkSteps: Array.isArray(wire?.powerNetworkSteps)
      ? wire.powerNetworkSteps.map(mappowerNetworkSteps)
      : [],
    powerNetworkImage: cleanMediaUrl(wire?.powerNetworkImage),
    faqSectionLabel: wire?.faqSectionLabel || "",
    faqFeaturedImage: cleanMediaUrl(wire?.faqFeaturedImage),
    faqItems: Array.isArray(wire?.faqItems)
      ? wire.faqItems.map(mapFaqItem)
      : [],
  };
}

export async function getMappedSolutions(): Promise<Solutions[]> {
  const data = await getSolutions();

  return data.map(mapSolutions);
}
