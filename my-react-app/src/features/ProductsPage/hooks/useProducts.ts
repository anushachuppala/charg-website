import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/products.service";
import type { Products } from "../dto/products.dto";

export function useProductsQuery() {
  return useQuery<Products[]>({
    queryKey: ["evProducts"],
    queryFn: fetchProducts,
  });
}
