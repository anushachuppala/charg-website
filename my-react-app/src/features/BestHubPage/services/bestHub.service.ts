import type { BestHub } from "../dto/bestHub.dto";
import { getMappedBestHub } from "../mappers/bestHub.mapper";

export async function fetchBestHub(): Promise<BestHub[]> {
  return getMappedBestHub();
}
