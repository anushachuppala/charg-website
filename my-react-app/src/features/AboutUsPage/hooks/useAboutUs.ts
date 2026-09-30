import { useQuery } from "@tanstack/react-query";

import { fetchAboutUs } from "../services/aboutUs.service";

export function useAboutUsQuery() {
  return useQuery({
    queryKey: ["ev-about-us"], //given to react query
    queryFn: fetchAboutUs, //what to call/ identify items
  });
}
