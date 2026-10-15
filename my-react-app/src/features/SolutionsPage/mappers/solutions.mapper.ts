import { getSolutions, getEvSolutionBySlug } from "../api/solutions.http";

import type {
  WhoIsThisForItemCardWire,
  cmsSolutionPointsWire,
  toolsSectionItemCardsWire,
  efficiencyItemPointsWire,
  keyFeaturesItemCardsWire,
  powerNetworkStepsWire,
  FaqItemWire,
  SolutionsWire,
  HeroTypeWire,
  TrustWire,
  OverviewPointWire,
  RecommendedWire,
  FeaturedWire,
  DestinationWire,
  HomeChargingFaqWire,
  EvSolutionWire,
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
  HeroType,
  TrustItem,
  OverviewPoint,
  RecommendedProduct,
  FeaturedItem,
  DestinationItem,
  HomeChargingFaq,
  HomeCharging,
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

export function mapHeroType(wire: HeroTypeWire): HeroType {
  return {
    viewDistance: wire?.viewDistance?.trim() || "",
    viewType: wire.viewType?.trim() || "",
  };
}

export function mapTrustItem(wire: TrustWire): TrustItem {
  return {
    icon: cleanMediaUrl(wire?.icon),
    title: wire.title?.trim() || "",
    subtitle: wire.subtitle?.trim() || "",
  };
}

export function mapOverviewPoint(wire: OverviewPointWire): OverviewPoint {
  return {
    description: wire.description?.trim() || "",
  };
}

export function maprecommended(wire: RecommendedWire): RecommendedProduct {
  return {
    image: cleanMediaUrl(wire?.image),
    title: wire.title?.trim() || "",
    subtitle: wire.subtitle?.trim() || "",
    chargerType: wire.chargerType?.trim() || "",
  };
}

export function mapfeatured(wire: FeaturedWire): FeaturedItem {
  return {
    icon: cleanMediaUrl(wire?.icon),
    title: wire.title?.trim() || "",
    subtitle: wire.subtitle?.trim() || "",
  };
}

export function mapdestination(wire: DestinationWire): DestinationItem {
  return {
    image: cleanMediaUrl(wire?.image),
    title: wire.title?.trim() || "",
    subtitle: wire.subtitle?.trim() || "",
  };
}

export function mapfaqs(wire: HomeChargingFaqWire): HomeChargingFaq {
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

export function mapHomeCharging(wire: EvSolutionWire): HomeCharging {
  return {
    id: wire.id || 0,
    title: wire?.title || "",
    slug: wire?.slug || "",
    description: wire?.description || "",
    summary: wire?.summary || "",
    status: wire?.status || "",
    categoryId: wire?.categoryId ?? null,
    tags: Array.isArray(wire.tags) ? wire.tags : [],

    heroTitle: wire?.heroTitle || "",
    heroSubtitle: wire?.heroSubtitle || "",
    heroDescription: wire?.heroDescription || "",
    heroImage: cleanMediaUrl(wire?.heroImage),
    heroTypes: Array.isArray(wire?.heroTypes)
      ? wire.heroTypes.map(mapHeroType)
      : [],
    viewDistance: wire?.viewDistance?.trim() || "",
    viewType: wire?.viewType?.trim() || "",

    trustTitle: wire?.trustTitle || "",
    trustSubtitle: wire?.trustSubtitle || "",
    trustDescription: wire?.trustDescription || "",
    trust: Array.isArray(wire?.trust) ? wire.trust.map(mapTrustItem) : [],

    overviewTitle: wire?.overviewTitle || "",
    overviewSubtitle: wire?.overviewSubtitle || "",
    overviewDescription: wire?.overviewDescription || "",
    overviewImage: cleanMediaUrl(wire?.overviewImage),
    overviewPoints: Array.isArray(wire?.overviewPoints)
      ? wire.overviewPoints.map(mapOverviewPoint)
      : [],

    recommendedTitle: wire?.recommendedTitle || "",
    recommendedSubtitle: wire?.recommendedSubtitle || "",
    recommendedDescription: wire?.recommendedDescription || "",
    recommended: Array.isArray(wire?.recommended)
      ? wire.recommended.map(maprecommended)
      : [],

    featuredTitle: wire?.featuredTitle || "",
    featuredSubtitle: wire?.featuredSubtitle || "",
    featured: Array.isArray(wire?.featured)
      ? wire.featured.map(mapfeatured)
      : [],

    destinationTitle: wire?.destinationTitle || "",
    destinationSubtitle: wire?.destinationSubtitle || "",
    destinationDescription: wire?.destinationDescription || "",
    destination: Array.isArray(wire?.destination)
      ? wire.destination.map(mapdestination)
      : [],

    faqTitle: wire?.faqTitle || "",
    faqImage: cleanMediaUrl(wire?.faqImage),
    faqs: Array.isArray(wire?.faqs) ? wire.faqs.map(mapfaqs) : [],
  };
}

export async function getMappedSolutions(): Promise<Solutions[]> {
  const data = await getSolutions();
  if (!data) return [];
  const rows = Array.isArray(data) ? data : [data];
  // Safety net: backend may still return drafts — only show published
  return rows
    .map(mapSolutions)
    .filter((row) => row.status.toLowerCase() === "published");
}

export async function fetchEvSolutionBySlug(
  slug: string,
): Promise<HomeCharging | null> {
  const data = await getEvSolutionBySlug(slug);

  if (data?.status?.trim().toLowerCase() !== "published") {
    return null;
  }

  return mapHomeCharging(data);
}
