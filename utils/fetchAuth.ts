import { getCookie } from "cookies-next";
import getUrl from "./getUrl";

export default function fetchAuth(
  type: string,
  endpoint: string,
  init?: RequestInit | undefined,
  headers?: HeadersInit | undefined
) {
  const token = getCookie("access-token");

  return fetch(getUrl(type, endpoint), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...headers,
    },
  });
}
