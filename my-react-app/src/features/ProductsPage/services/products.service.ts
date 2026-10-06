import type { Products } from "../dto/products.dto";
import { getMappedProducts } from "../mapper/products.mapper";

export async function fetchProducts(): Promise<Products[]> {
  return getMappedProducts();
}
