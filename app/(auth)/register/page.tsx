"use client";
import { useRouter } from "next/navigation";
import { Button, Form, Input, Link } from "react-daisyui";

export default function Register() {
  const router = useRouter();
  const onSubmit = (e: any) => {
    e.preventDefault();
    const password: string = e.target["password"].value;
    const username: string = e.target["username"].value;
    // fetch("http://34.70.123.231:3000/auth/signup", {
    fetch("api/signup", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1 className="text-header"> Register </h1>
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
        <Button className="mt-6" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}
