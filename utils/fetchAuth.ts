import { getCookie } from "cookies-next";

export default function fetchAuth(
  url: RequestInfo | URL,
  init?: RequestInit | undefined,
  headers?: HeadersInit | undefined
) {
  const token = getCookie("access-token");
  return fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    },
  });
}
