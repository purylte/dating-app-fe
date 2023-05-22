"use client";

import "../globals.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import fetchAuth from "@/utils/fetchAuth";
import Header from "@/components/navigation/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    fetchAuth("http://localhost:3000/auth/profile", {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) router.push("/login");
      })
      .catch((err) => {
        router.push("/login");
      });
  }, [router]);
  return (
    <>
      <Header />
      <div className="flex-1 px-4 pt-4 flex overflow-y-hidden">{children}</div>
    </>
  );
}
