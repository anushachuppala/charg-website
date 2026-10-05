import { useQuery } from "@tanstack/react-query";
// import { fetchProducts } from "../services/products.service";

export function useProductsQuery() {
  return useQuery({
    queryKey: ["evProducts"],
    // queryFn: fetchProducts,
  });
}
