"use client";
import { useRouter } from "next/navigation";
import { Button, Form, Input, Link } from "react-daisyui";
import login from "@/utils/login";

export default function Login() {
  const router = useRouter();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    login(
      formData.get("username") as String,
      formData.get("password") as String,
      () => router.push("/"),
      () => console.log("error")
    );
  };
  return (
    <div className="w-2/3">
      <h1 className="text-header"> Login </h1>
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
        <label className="label mt-4">
          <Link href="#" className="label-text-alt" hover>
            Forgot password?
          </Link>
        </label>
        <label className="label pt-0 pb-0">
          <Link href="/register" className="label-text-alt" hover>
            Dont have an account? Register here.
          </Link>
        </label>
        <Button className="mt-8" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
