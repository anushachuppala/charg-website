import type {
  Fuel,
  FuelWire,
  Manufacturer,
  ManufacturerWire,
} from "../dto/emissionCalculator.dto";

export const mapFuel = (fuel: FuelWire): Fuel => ({
  id: fuel.id,
  name: fuel.fuel_name,
  kgCo2eLitres: fuel.kg_co2e_litres,
  kgCo2eTonnes: fuel.kg_co2e_tonnes,
});

export const mapFuels = (fuels: FuelWire[]): Fuel[] => fuels.map(mapFuel);

export const mapManufacturer = (
  manufacturer: ManufacturerWire,
): Manufacturer => ({
  id: manufacturer.id,
  name: manufacturer.name,
  vehicleType: manufacturer.vehicle_type,
  vehicleModels: manufacturer.vehicle_models.map((model) => ({
    id: model.id,
    name: model.name,
    emissionPerKm: model.emission_per_km,
    fuel: model.fuel,
  })),
});

export const mapManufacturers = (
  manufacturers: ManufacturerWire[],
): Manufacturer[] => manufacturers.map(mapManufacturer);
