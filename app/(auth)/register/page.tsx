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
    <div className="w-full relative flex flex-col justify-center overflow-hidden">
      <div className="w-full max-w-xl p-6 m-auto bg-base-200 rounded-md shadow-md">
        <h1 className="text-3xl font-semibold text-center">Register</h1>
        <Form className="space-y-4" onSubmit={(e) => onSubmit(e)}>
          <div>
            <label className="label">
              <span className="text-base label-text">Username</span>
            </label>
            <Input
              name="username"
              type="text"
              placeholder="Your Username"
              className="w-full input input-bordered input-primary m-0"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <Input
              name="password"
              type="password"
              placeholder="Your Password"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <Button className="btn btn-primary w-full" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}
