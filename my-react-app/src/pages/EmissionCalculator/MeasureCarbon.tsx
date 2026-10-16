import { useId, useState } from "react";
import type { FormEvent } from "react";

import { SectionHeader } from "../../shared/ui";

import styles from "./MeasureCarbon.module.css";
import carIcon from "../../assets/Emission-calculator/carIcon.png";

import { Section, Container, Panel } from "../../shared/layout";

const VEHICLE_TYPES = ["Two wheeler", "Three wheeler", "Four wheeler"] as const;
const FUEL_UNITS = ["litres", "kg"] as const;
const FUELS = ["CNG", "Diesel", "LNG", "Petrol", "LPG"] as const;

type VehicleType = (typeof VEHICLE_TYPES)[number];
type FuelUnit = (typeof FUEL_UNITS)[number];
type Fuel = (typeof FUELS)[number];

// TODO: fill these in (or load from your API) once you have the data.
// Manufacturer is enabled after a vehicle type is chosen,
// model is enabled after a manufacturer is chosen.
const MANUFACTURERS: Record<VehicleType, string[]> = {
  "Two wheeler": [],
  "Three wheeler": [],
  "Four wheeler": [],
};
const MODELS: Record<string, string[]> = {};

const INITIAL = {
  vehicleType: "" as VehicleType | "",
  manufacturer: "",
  model: "",
  start: "",
  destination: "",
  distance: "",
  fuel: "Petrol" as Fuel,
  fuelUnit: "litres" as FuelUnit,
  mileage: "",
};

function Chevron() {
  return (
    <svg
      className={styles.chevron}
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

interface SelectFieldProps {
  id: string;
  value: string;
  placeholder?: string;
  options: readonly string[];
  disabled?: boolean;
  onChange: (value: string) => void;
}

function SelectField({
  id,
  value,
  placeholder,
  options,
  disabled,
  onChange,
}: SelectFieldProps) {
  return (
    <div className={styles.selectWrap}>
      <select
        id={id}
        className={`${styles.control} ${styles.select} ${
          value === "" ? styles.placeholder : ""
        }`}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <Chevron />
    </div>
  );
}

function MeasureCarbon() {
  const uid = useId();
  const [form, setForm] = useState(INITIAL);

  const update = <K extends keyof typeof INITIAL>(
    key: K,
    value: (typeof INITIAL)[K],
  ) => setForm((prev) => ({ ...prev, [key]: value }));

  const manufacturers = form.vehicleType ? MANUFACTURERS[form.vehicleType] : [];
  const models = form.manufacturer ? (MODELS[form.manufacturer] ?? []) : [];

  const handleVehicleType = (value: string) =>
    setForm((prev) => ({
      ...prev,
      vehicleType: value as VehicleType,
      manufacturer: "",
      model: "",
    }));

  const handleManufacturer = (value: string) =>
    setForm((prev) => ({ ...prev, manufacturer: value, model: "" }));

  const handleReset = () => setForm(INITIAL);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: run the emission calculation with `form`
  };

  return (
    <Section>
      <Container>
        <Panel>
          <div className={styles.textContent}>
            <SectionHeader
              as="div"
              eyebrow="Emission Calculator"
              title="Measure Your Trip's Carbon Footprint"
              subtitle="Four short steps. Change any answer at any time."
              align="center"
            />
          </div>

          <form className={styles.card} onSubmit={handleSubmit} noValidate>
            <div className={styles.cardHeader}>
              <span className={styles.iconCircle}>
                <img src={carIcon} alt="" />
              </span>
              <div>
                <h3 className={styles.cardTitle}>Vehicle details</h3>
                <p className={styles.cardSubtitle}>
                  Tell us what you drive so we can load the right defaults.
                </p>
              </div>
            </div>

            <div className={styles.grid}>
              {/* Row 1 */}
              <div className={styles.field}>
                <label className={styles.label} htmlFor={`${uid}-type`}>
                  Vehicle type
                </label>
                <SelectField
                  id={`${uid}-type`}
                  value={form.vehicleType}
                  placeholder="Select type"
                  options={VEHICLE_TYPES}
                  onChange={handleVehicleType}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor={`${uid}-maker`}>
                  Manufacturer{" "}
                  <span className={styles.optional}>(optional)</span>
                </label>
                <SelectField
                  id={`${uid}-maker`}
                  value={form.manufacturer}
                  placeholder="Select manufacturer"
                  options={manufacturers}
                  disabled={!form.vehicleType}
                  onChange={handleManufacturer}
                />
              </div>

              {/* Row 2 */}
              <div className={styles.field}>
                <label className={styles.label} htmlFor={`${uid}-model`}>
                  Vehicle model{" "}
                  <span className={styles.optional}>(optional)</span>
                </label>
                <SelectField
                  id={`${uid}-model`}
                  value={form.model}
                  placeholder="Select model"
                  options={models}
                  disabled={!form.manufacturer}
                  onChange={(value) => update("model", value)}
                />
              </div>
              <div className={styles.spacer} aria-hidden="true" />

              {/* Row 3 */}
              <div className={styles.field}>
                <label className={styles.labelSmall} htmlFor={`${uid}-start`}>
                  Start location (optional)
                </label>
                <input
                  id={`${uid}-start`}
                  type="text"
                  className={styles.control}
                  placeholder="Search city or place..."
                  value={form.start}
                  onChange={(e) => update("start", e.target.value)}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.labelSmall} htmlFor={`${uid}-dest`}>
                  Destination (optional)
                </label>
                <input
                  id={`${uid}-dest`}
                  type="text"
                  className={styles.control}
                  placeholder="Search city or place..."
                  value={form.destination}
                  onChange={(e) => update("destination", e.target.value)}
                />
              </div>

              {/* Row 4 – full width */}
              <div className={`${styles.field} ${styles.fullWidth}`}>
                <label className={styles.label} htmlFor={`${uid}-distance`}>
                  Distance Travelled (auto from route)
                </label>
                <div className={styles.inputWrap}>
                  <input
                    id={`${uid}-distance`}
                    type="number"
                    min="0"
                    inputMode="decimal"
                    className={`${styles.control} ${styles.withSuffix}`}
                    placeholder="e.g. 250"
                    value={form.distance}
                    onChange={(e) => update("distance", e.target.value)}
                  />
                  <span className={styles.suffix}>km</span>
                </div>
                <p className={styles.helper}>
                  Pick locations to auto-fill, or enter km manually.
                </p>
              </div>

              {/* Row 5 */}
              <div className={styles.field}>
                <label className={styles.label} htmlFor={`${uid}-fuel`}>
                  Fuel type
                </label>
                <input
                  id={`${uid}-fuel`}
                  type="text"
                  className={styles.control}
                  value={form.fuel}
                  readOnly
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor={`${uid}-unit`}>
                  Fuel unit
                </label>
                <SelectField
                  id={`${uid}-unit`}
                  value={form.fuelUnit}
                  options={FUEL_UNITS}
                  onChange={(value) => update("fuelUnit", value as FuelUnit)}
                />
              </div>

              {/* Row 6 */}
              <div className={styles.field}>
                <span className={styles.label} id={`${uid}-chips`}>
                  Select fuel
                </span>
                <div
                  className={styles.chips}
                  role="group"
                  aria-labelledby={`${uid}-chips`}
                >
                  {FUELS.map((fuel) => (
                    <button
                      key={fuel}
                      type="button"
                      className={`${styles.chip} ${
                        form.fuel === fuel ? styles.chipActive : ""
                      }`}
                      aria-pressed={form.fuel === fuel}
                      onClick={() => update("fuel", fuel)}
                    >
                      {fuel}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor={`${uid}-mileage`}>
                  Mileage
                </label>
                <input
                  id={`${uid}-mileage`}
                  type="number"
                  min="0"
                  inputMode="decimal"
                  className={styles.control}
                  placeholder="e.g. 35"
                  value={form.mileage}
                  onChange={(e) => update("mileage", e.target.value)}
                />
              </div>
            </div>

            <div className={styles.footer}>
              <button
                type="button"
                className={styles.resetBtn}
                onClick={handleReset}
              >
                Reset
              </button>
              <button type="submit" className={styles.calculateBtn}>
                Calculate Emission
              </button>
            </div>
          </form>
        </Panel>
      </Container>
    </Section>
  );
}

export default MeasureCarbon;
