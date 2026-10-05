import { apiClient } from "../../../shared/services/apiClient";
import type { ProductsWire } from "./products.api.types";

export async function getProducts(): Promise<ProductsWire[]> {
  const { data } = await apiClient.get<ProductsWire[]>("evProducts");

  return data;
}
