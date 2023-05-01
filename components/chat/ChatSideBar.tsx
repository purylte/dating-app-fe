import classNames from "classnames";
import Link from "next/link";
import React from "react";
import Image from "../Image";

export default function ChatSideBar() {
  return (
    <div className="flex flex-col gap-2 pr-2">
      <SideBarItem
        text="a"
        link="/chat/a"
        profileUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
        isActive
      />
      <SideBarItem
        text="b"
        link="/chat/b"
        profileUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
      />
      <SideBarItem
        text="c"
        link="/chat/c"
        profileUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
      />
      <SideBarItem
        text="d"
        link="/chat/d"
        profileUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
      />
      <SideBarItem
        text="e"
        link="/chat/e"
        profileUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
      />
      <SideBarItem
        text="f"
        link="/chat/f"
        profileUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
      />
      <SideBarItem
        text="g"
        link="/chat/g"
        profileUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
      />
      <SideBarItem
        text="h"
        link="/chat/h"
        profileUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
      />
      <SideBarItem
        text="h"
        link="/chat/h"
        profileUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
      />
      <SideBarItem
        text="h"
        link="/chat/h"
        profileUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
      />
    </div>
  );
}

type SideBarItemProps = {
  text: string;
  link: string;
  profileUrl: string;
  isActive?: boolean;
};
function SideBarItem({
  text,
  link,
  profileUrl,
  isActive = false,
}: SideBarItemProps) {
  return (
    <Link
      href={link}
      className={classNames("flex items-stretch gap-4 rounded-lg p-2", {
        "bg-primary hover:bg-opacity-50": isActive,
        "hover:bg-black hover:bg-opacity-5": !isActive,
      })}
    >
      <Image
        size={3}
        src={profileUrl}
        alt={text}
        className="rounded-full aspect-square"
      />
      <div className="flex-1 flex items-center">
        <div className="text-paragraph font-bold">{text}</div>
      </div>
    </Link>
  );
}
