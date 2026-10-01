import { useQuery } from "@tanstack/react-query";

import { fetchSolutions } from "../services/solutions.service";

export function useSolutionsQuery() {
  return useQuery({
    queryKey: ["ev-cms-solutions"],
    queryFn: fetchSolutions,
  });
}
