import { getAboutUs } from "../api/aboutUs.http";
import { mapAboutUS } from "../mappers/aboutUs.mapper";
import type { AboutUs } from "../dto/aboutUs.dto";

export async function fetchAboutUs(): Promise<AboutUs> {
  const rows = await getAboutUs(); // makes API request

  if (!rows[0]) {
    throw new Error("About Us data not found");
  }

  return mapAboutUS(rows[0]); // sends the API data to the mapper
}
