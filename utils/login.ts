import { setCookie } from "cookies-next";

export default function login(
  username: String,
  password: String,
  successCallback: Function,
  errorCallback: Function
) {
  fetch("http://localhost:3000/auth/signin", {
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
