"use client";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { Button, Form, Input, Link } from "react-daisyui";

export default function Login() {
  const router = useRouter();
  const onSubmit = (e: any) => {
    e.preventDefault();
    const password: string = e.target["password"].value;
    const username: string = e.target["username"].value;
    // fetch("http://34.70.123.231:3000/auth/login/", {
    fetch("api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        if (res.status === 401) {
          alert("Invalid username or password");
        } else if (res.status === 200) {
          res.json().then((data) => {
            setCookie("access-token", "test");
            router.push("/");
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1 className="text-header"> Login </h1>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Label title="Username" />
        <Input
          name="username"
          type="text"
          placeholder="username"
          className="input-bordered"
        />
        <Form.Label title="Password" />
        <Input
          name="password"
          type="text"
          placeholder="password"
          className="input-bordered"
        />
        <label className="label">
          <Link href="#" className="label-text-alt" hover>
            Forgot password?
          </Link>
        </label>
        <label className="label">
          <Link href="/register" className="label-text-alt" hover>
            Don't have an account? Register here.
          </Link>
        </label>
        <Button className="mt-6" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
