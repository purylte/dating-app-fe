"use client";

import { Button, Navbar } from "react-daisyui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LogoButton from "./LogoButton";

export default function Header() {
  const router = useRouter();
  return (
    <div className="flex w-full items-center justify-center gap-2 font-sans">
      <Navbar className="bg-base-300 shadow-xl">
        <div className="flex-1">
          <LogoButton />
        </div>
        <div>
          <Button className="text-xl normal-case" color="ghost">
            <Link href="/login">Login</Link>
          </Button>
          <Button className="text-xl normal-case" color="ghost">
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </Navbar>
    </div>
  );
}
