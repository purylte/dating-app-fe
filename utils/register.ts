import getUrl from "./getUrl";

export default function register(
  username: String,
  password: String,
  successCallback: Function,
  errorCallback: Function
) {
  fetch(getUrl("auth", "auth/signup"), {
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
