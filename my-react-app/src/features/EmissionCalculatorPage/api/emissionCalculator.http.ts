import { apiClient } from "../../../shared/services/apiClient";
import type { FuelWire } from "./emissionCalculator.api.types";

export async function getEmissionCalculator(): Promise<FuelWire[]> {
  const { data } = await apiClient.get<FuelWire[]>("/ev-fuel");

  return data;
}
