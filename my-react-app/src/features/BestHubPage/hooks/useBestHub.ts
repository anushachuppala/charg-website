import { useQuery } from "@tanstack/react-query";

import { fetchBestHub } from "../services/bestHub.service";

export function useBestHubQuery() {
  return useQuery({
    queryKey: ["ev-bestHub"],
    queryFn: fetchBestHub,
  });
}
