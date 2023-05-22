import { deleteCookie } from "cookies-next";

export default function logout(callback: Function) {
  deleteCookie("access-token");
  callback();
}
