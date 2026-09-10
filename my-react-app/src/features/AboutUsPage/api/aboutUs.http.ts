import { apiClient } from "../../../shared/services/apiClient";
import type { AboutUsWire } from "./aboutUs.api.types";

export async function getAboutUs(): Promise<AboutUsWire> {
  const { data } = await apiClient.get<AboutUsWire[]>("/ev-about-us");

  if (!Array.isArray(data) || !data[0]) {
    throw new Error("About Us data not found");
  }

  return data[0];
}
