import { MdDescription } from "react-icons/md";
import type {
  WhoIsThisForItemCardWire,
  cmsSolutionPointsWire,
  toolsSectionItemCardsWire,
  efficiencyItemPointsWire,
  keyFeaturesItemCardsWire,
  powerNetworkStepsWire,
  FaqItemWire,
} from "../api/solutions.api.types";

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

export function mapWhoIsThisForItemCard(
  wire: WhoIsThisForItemCardWire,
): WhoIsThisForCards {
  return {
    icon: wire.icon?.trim() || "",
    title: wire.title?.trim() || "",
    description: wire.description?.trim() || "",
  };
}
