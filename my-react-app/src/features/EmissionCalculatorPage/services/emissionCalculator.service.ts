import { apiClient } from "../../../shared/services/apiClient";
import type { FuelWire, ManufacturerWire } from "../dto/emissionCalculator.dto";

export const getEmissionFuels = async (): Promise<FuelWire[]> => {
  const response = await apiClient.get<FuelWire[]>("/emission/fuels");

  return response.data;
};

export const getEmissionVehicles = async (): Promise<ManufacturerWire[]> => {
  const response = await apiClient.get<ManufacturerWire[]>(
    "/emission/vehicle/data",
  );

  return response.data;
};
