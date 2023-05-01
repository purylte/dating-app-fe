"use client";

import { Button, Card, Divider, Dropdown, Navbar } from "react-daisyui";
import Image from "../Image";
import Icon from "../Icon";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex w-full items-center justify-center gap-2 font-sans">
      <Navbar className="bg-base-300 shadow-xl">
        <div className="flex-1">
          <Button className="text-3xl normal-case" color="ghost">
            <Link href="/">Meow!</Link>
          </Button>
          <Button className="text-xl normal-case" color="ghost">
            <Link href="/">Home</Link>
          </Button>
          <Button className="text-xl normal-case" color="ghost">
            <Link href="/chat">Chat</Link>
          </Button>
        </div>
        <div>
          <Dropdown vertical="bottom" horizontal="left">
            <Button tabIndex={0} color="ghost" shape="circle">
              <Icon icon="ph:bell" className="w-2/3 h-2/3" />
            </Button>
            <Dropdown.Menu
              tabIndex={0}
              className="mt-3 card card-compact w-96 bg-base-100 !p-0"
            >
              <Card.Body className="card-body">
                <span className="text-paragraph">
                  Welcome to Meow! asd asd asd asda s
                </span>
                <Divider className="m-0" />
                <span className="text-paragraph">... asdas you!</span>
              </Card.Body>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown vertical="bottom" horizontal="left">
            <Button color="ghost" className="avatar" shape="circle">
              <div className="w-10 rounded-full">
                <Image
                  size={3}
                  src={
                    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                  }
                  alt={"Profile Picture"}
                  className="rounded-full aspect-square"
                />
              </div>
            </Button>
            <Dropdown.Menu className="w-32 menu-compact">
              <Dropdown.Item className="font-bold">Profile</Dropdown.Item>
              <Dropdown.Item className="font-bold">Settings</Dropdown.Item>
              <Dropdown.Item className="font-bold">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar>
    </div>
  );
}
