import { apiClient } from "../../../shared/services/apiClient";
import type { SolutionsWire } from "./solutions.api.types";

export async function getSolutions(): Promise<SolutionsWire[]> {
  const { data } = await apiClient.get<SolutionsWire[]>("ev-cms-solution");

  return data;
}
