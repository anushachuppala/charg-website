import { useQuery } from "@tanstack/react-query";

import { fetchAboutUs } from "../services/aboutUs.service";

export function useAboutUsQuery() {
  return useQuery({
    queryKey: ["ev-about-us"],
    queryFn: fetchAboutUs,
  });
}
