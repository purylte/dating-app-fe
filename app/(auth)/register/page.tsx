"use client";
import register from "@/utils/register";
import { useRouter } from "next/navigation";
import { Button, Form, Input, Link } from "react-daisyui";

export default function Register() {
  const router = useRouter();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    register(
      formData.get("username") as String,
      formData.get("password") as String,
      () => router.push("/login"),
      () => console.log("error")
    );
  };

  return (
    <div className="w-2/3">
      <h1 className="text-header"> Register </h1>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Label title="Username" />
        <Input
          name="username"
          type="text"
          placeholder="Your Username"
          className="input-bordered"
        />
        <Form.Label title="Password" className="mt-4" />
        <Input
          name="password"
          type="password"
          placeholder="Your Password"
          className="input-bordered"
        />
        <Button className="mt-16" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}
