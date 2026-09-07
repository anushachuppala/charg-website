import { apiClient } from "../../shared/config/apiClient";

import type { CreateGetInTouchWire } from "./getInTouch.api.types";

export async function createGetInTouch(
  payload: CreateGetInTouchWire,
): Promise<CreateGetInTouchWire> {
  const { data } = await apiClient.post<CreateGetInTouchWire>(
    "/posts",
    payload,
  );

  return data;
}
