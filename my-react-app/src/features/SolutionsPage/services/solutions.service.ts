import type { Solutions } from "../dto/solutions.dto";
import { getMappedSolutions } from "../mappers/solutions.mapper";

export async function fetchSolutions(): Promise<Solutions[]> {
  return getMappedSolutions();
}
