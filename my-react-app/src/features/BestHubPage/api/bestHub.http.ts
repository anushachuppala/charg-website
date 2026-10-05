import { apiClient } from "../../../shared/services/apiClient";
import type { BestHubWire } from "./bestHub.api.types";

export async function getBestHub(): Promise<BestHubWire[]> {
  const { data } = await apiClient.get<BestHubWire[]>("ev-besthub");
  //Call the Best Hub backend endpoint and return the raw API data.

  return data;
}
