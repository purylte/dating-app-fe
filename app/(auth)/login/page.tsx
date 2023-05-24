"use client";
import { useRouter } from "next/navigation";
import { Button, Form, Input } from "react-daisyui";
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
    <div className="w-full relative flex flex-col justify-center overflow-hidden">
      <div className="w-full max-w-xl p-6 m-auto bg-base-200 rounded-md shadow-md">
        <h1 className="text-3xl font-semibold text-center">Login</h1>
        <Form className="space-y-4" onSubmit={(e) => onSubmit(e)}>
          <div>
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <Input
              name="username"
              type="text"
              placeholder="Your Username"
              className="w-full input input-bordered input-primary m-0"
              autoFocus
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <Input
              name="password"
              type="password"
              placeholder="Your Password"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <Button className="btn btn-primary w-full" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
