import { apiClient } from "../../../shared/services/apiClient";

import type { AboutUsWire } from "./aboutUs.api.types";

export async function getAboutUs(): Promise<AboutUsWire[]> {
  const { data } = await apiClient.get<AboutUsWire[]>("/ev-about-us");

  return data;
}
