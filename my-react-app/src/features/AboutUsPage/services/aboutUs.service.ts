import { getAboutUs } from "../api/aboutUs.http";
import { mapAboutUS } from "../mappers/aboutUs.mapper";
import type { AboutUs } from "../dto/aboutUs.dto";

export async function fetchAboutUs(): Promise<AboutUs> {
  const rows = await getAboutUs();

  if (!rows[0]) {
    throw new Error("About Us data not found");
  }

  return mapAboutUS(rows[0]);
}
