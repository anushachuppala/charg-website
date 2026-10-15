import { useQuery } from "@tanstack/react-query";
import {
  fetchSolutions,
  fetchEvSolutionBySlug,
} from "../services/solutions.service";

export function useSolutionsQuery() {
  return useQuery({
    queryKey: ["ev-cms-solutions"],
    queryFn: fetchSolutions,
  });
}

export function useEvSolutionBySlugQuery(slug: string) {
  return useQuery({
    queryKey: ["ev-solution", slug],
    queryFn: () => fetchEvSolutionBySlug(slug),
    enabled: Boolean(slug),
  });
}
