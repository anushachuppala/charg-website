import type { Solutions, HomeCharging } from "../dto/solutions.dto";
import { getEvSolutionBySlug } from "../api/solutions.http";
import {
  getMappedSolutions,
  mapHomeCharging,
} from "../mappers/solutions.mapper";

export async function fetchSolutions(): Promise<Solutions[]> {
  return getMappedSolutions();
}

export async function fetchEvSolutionBySlug(
  slug: string,
): Promise<HomeCharging | null> {
  const data = await getEvSolutionBySlug(slug);
  const status = data?.status?.trim().toLowerCase();

  if (status !== "published") {
    return null;
  }

  return mapHomeCharging(data);
}
