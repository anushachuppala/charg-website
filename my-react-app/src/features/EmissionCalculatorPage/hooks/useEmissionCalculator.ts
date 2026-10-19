import { useQuery } from "@tanstack/react-query";

import {
  getEmissionFuels,
  getEmissionVehicles,
} from "../services/emissionCalculator.service";

import {
  mapFuels,
  mapManufacturers,
} from "../mapper/emissionCalculator.mapper";

export const useEmissionFuelsQuery = () => {
  return useQuery({
    queryKey: ["emission-fuels"],
    queryFn: async () => {
      const fuels = await getEmissionFuels();
      return mapFuels(fuels);
    },
  });
};

export const useEmissionVehiclesQuery = () => {
  return useQuery({
    queryKey: ["emission-vehicles"],
    queryFn: async () => {
      const manufacturers = await getEmissionVehicles();
      return mapManufacturers(manufacturers);
    },
  });
};
