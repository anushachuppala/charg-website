export type FuelWire = {
  id: number;
  fuel_name: string;
  kg_co2e_litres: number | null;
  kg_co2e_tonnes: number | null;
};

export type VehicleModelWire = {
  id: number;
  name: string;
  emission_per_km: number | null;
  fuel: string | null;
};

export type ManufacturerWire = {
  id: number;
  name: string;
  vehicle_type: "TWO_WHEELER" | "THREE_WHEELER" | "FOUR_WHEELER";
  vehicle_models: VehicleModelWire[];
};

export type Fuel = {
  id: number;
  name: string;
  kgCo2eLitres: number | null;
  kgCo2eTonnes: number | null;
};

export type VehicleModel = {
  id: number;
  name: string;
  emissionPerKm: number | null;
  fuel: string | null;
};

export type Manufacturer = {
  id: number;
  name: string;
  vehicleType: ManufacturerWire["vehicle_type"];
  vehicleModels: VehicleModel[];
};
