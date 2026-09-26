import { apiClient } from "../../../shared/services/apiClient";
import type { AboutUsWire } from "./aboutUs.api.types";
import type { AboutUs } from "../dto/aboutUs.dto";
import { mapAboutUS } from "./../mappers/aboutUs.mapper";

export async function getAboutUs(): Promise<AboutUs> {
  const { data } = await apiClient.get<AboutUsWire[]>("/ev-about-us");

  if (!Array.isArray(data) || !data[0]) {
    throw new Error("About Us data not found");
  }

  return mapAboutUS(data[0]);
}
