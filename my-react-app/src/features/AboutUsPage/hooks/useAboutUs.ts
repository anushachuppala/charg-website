import { useQuery } from "@tanstack/react-query";

import { fetchAboutUs } from "../services/aboutUs.service";

import { aboutUsQueryKeys } from "./aboutUsQueryKeys";

export function useAboutUsQuery() {
  return useQuery({
    queryKey: aboutUsQueryKeys.all(),

    queryFn: fetchAboutUs,
  });
}
