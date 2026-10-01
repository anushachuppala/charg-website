import { apiClient } from "../../../shared/services/apiClient";
import type { BestHubWire } from "./bestHub.api.types";

export async function getBestHub(): Promise<BestHubWire[]> {
  const { data } = await apiClient.get<BestHubWire[]>("ev-besthub");

  return data;
}
