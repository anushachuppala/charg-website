/**
 * Normalizes image/media URLs returned by the API for use in <img src>`.
 * - Absolute http(s), data:, and blob URLs are left unchanged (spaces preserved).
 * - Protocol-relative URLs get the current page protocol.
 * - Root-relative paths get the API host origin when VITE_API_* is an absolute URL
 *   (e.g. `/uploads/...` on the CMS host).
 */
function apiBackendOrigin(): string | undefined {
  // Find the backend's domain/origin.//
  const raw = import.meta.env.VITE_API_BASE_URL ?? import.meta.env.VITE_API_URL; //"If VITE_API_BASE_URL doesn't exist, use VITE_API_URL instead.//
  if (!raw || typeof raw !== "string") return undefined; //Did we actually get a value, and is it a string?, ifnot stop and return //
  const trimmed = raw.trim(); //Suppose your environment variable accidentally has spaces them trim() removes the spaces//
  if (!trimmed.startsWith("http")) return undefined; // does the Api URL starts with http? : If it isn't an absolute URL, the function can't determine the backend's domain, so it returns undefined//
  try {
    return new URL(trimmed).origin; // The URL contains https://api.bestinfra.org/api but the .origin gives only https://api.bestinfra.org
  } catch {
    return undefined;
  }
}

export function resolveRemoteMediaUrl(url: string): string {
  //This function receives a URL: and promises to return an string//
  const u = url.trim(); //Again, remove unnecessary spaces.//
  if (!u) return u; //if the APi gives an empty string then it returns an ""//
  if (/^(https?:|data:|blob:)/i.test(u)) return u; //If it's already one of these, the function says:"This URL is already usable. Don't change it." //
  //"Does this string start with http:, https:, data: or blob:?"//
  if (u.startsWith("//")) {
    if (typeof window !== "undefined" && window.location?.protocol) {
      return `${window.location.protocol}${u}`;
    }
    return `https:${u}`;
  }
  if (u.startsWith("/")) {
    const origin = apiBackendOrigin();
    if (origin) return `${origin}${u}`;
  }
  return u;
}
