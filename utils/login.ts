import { setCookie } from "cookies-next";
import getUrl from "./getUrl";

export default function login(
  username: String,
  password: String,
  successCallback: Function,
  errorCallback: Function
) {
  fetch(getUrl("auth", "auth/signin"), {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setCookie("access-token", data["accessToken"]);
          successCallback();
        });
      } else {
        res.json().then((data) => {
          errorCallback();
          console.log(data);
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
