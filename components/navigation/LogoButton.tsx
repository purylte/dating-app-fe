import Link from "next/link";
import React from "react";
import { Button } from "react-daisyui";

export default function LogoButton() {
  return (
    <Button className="text-3xl normal-case" color="ghost">
      <Link href="/">Meow!</Link>
    </Button>
  );
}
