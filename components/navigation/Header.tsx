"use client";

import { Button, Card, Divider, Dropdown, Navbar } from "react-daisyui";
import Image from "../Image";
import Icon from "../Icon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LogoButton from "./LogoButton";

export default function Header() {
  const router = useRouter();
  return (
    <div className="flex w-full items-center justify-center gap-2 font-sans">
      <Navbar className="bg-primary shadow-xl">
        <div className="flex-1">
          <LogoButton />
          <Button className="text-xl normal-case" color="ghost">
            <Link href="/">Home</Link>
          </Button>
          <Button className="text-xl normal-case" color="ghost">
            <Link href="/filter">Filter</Link>
          </Button>
          <Button className="text-xl normal-case" color="ghost">
            <Link href="/chat">Chat</Link>
          </Button>
        </div>
        <div>
          <Dropdown vertical="bottom" horizontal="left">
            <Button color="ghost" className="avatar" shape="circle">
              <Icon
                icon="iconamoon:profile-circle-fill"
                className="w-10 h-10"
              />
            </Button>
            <Dropdown.Menu className="w-32 menu-compact">
              <Dropdown.Item className="font-bold" href="/profile">
                Profile
              </Dropdown.Item>
              <Dropdown.Item className="font-bold" href="/social">
                Social
              </Dropdown.Item>
              <Dropdown.Item className="font-bold" href="/logout">
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar>
    </div>
  );
}
