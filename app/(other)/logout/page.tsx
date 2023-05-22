"use client";

import logout from "@/utils/logout";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Logout() {
  const router = useRouter();
  useEffect(() => {
    logout(() => {
      router.push("/login");
    });
  }, [router]);
  return <div>Logging out...</div>;
}
