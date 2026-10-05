import { useQuery } from "@tanstack/react-query";

import { fetchBestHub } from "../services/bestHub.service";

export function useBestHubQuery() {
  return useQuery({
    //connect your React component to the API/service layer and manage the API request state.
    queryKey: ["ev-bestHub"],
    queryFn: fetchBestHub,
  });
}
