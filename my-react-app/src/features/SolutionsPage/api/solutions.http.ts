import { apiClient } from "../../../shared/services/apiClient";
import type { SolutionsWire, EvSolutionWire } from "./solutions.api.types";

export async function getSolutions(): Promise<SolutionsWire[]> {
  const { data } = await apiClient.get<SolutionsWire[]>("ev-cms-solution");

  return data;
}

export async function getEvSolutionBySlug(
  slug: string,
): Promise<EvSolutionWire> {
  const { data } = await apiClient.get<EvSolutionWire>(
    `/ev-solutions/slug/${slug}?status=published&includeViews=true`,
  );

  return data;
}
