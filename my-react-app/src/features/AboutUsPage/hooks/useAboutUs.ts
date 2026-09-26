import { useQuery } from "@tanstack/react-query";

import { getAboutUs } from "../api/aboutUs.http";

import { aboutUsQueryKeys } from "./aboutUsQueryKeys";

export function useAboutUsQuery() {
  return useQuery({
    queryKey: aboutUsQueryKeys.all(),

    queryFn: getAboutUs,
  });
}
