import { getCookie, setCookie } from "cookies-next";
import getUrl from "./getUrl";

export function getFilter() {
  return {
    domisili: getCookie("domisili") as string,
    gender: getCookie("gender") as string,
    age_range: getCookie("ageRange") as string,
    hobi: getCookie("hobi") as string,
    genre: getCookie("genre") as string,
  };
}

export function setFilter(
  domisili: string,
  gender: string,
  minAge: number,
  maxAge: number,
  hobi: string,
  genre: string
) {
  setCookie("domisili", domisili);
  setCookie("gender", gender);
  setCookie("ageRange", `${minAge}-${maxAge}`);
  setCookie("hobi", hobi);
  setCookie("genre", genre);
}
