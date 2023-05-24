"use client";
import classNames from "classnames";
import Link from "next/link";
import React from "react";

type ChatSidebarProps = {
  chatRooms: { chatRoomId: number; username: string }[];
};
export default function ChatSideBar({ chatRooms }: ChatSidebarProps) {
  const [usernameActive, setUsernameActive] = React.useState<string>("");
  return (
    <div className="flex flex-col gap-2 pr-2">
      {chatRooms.map((chatRoom) => {
        return (
          <SideBarItem
            text={chatRoom.username}
            link={`/chat/${chatRoom.chatRoomId}`}
            isActive={usernameActive === chatRoom.username}
            key={chatRoom.chatRoomId}
            onClick={setUsernameActive}
          />
        );
      })}
    </div>
  );
}

type SideBarItemProps = {
  text: string;
  link: string;
  isActive?: boolean;
  onClick: (username: string) => void;
};
function SideBarItem({
  text,
  link,
  isActive = false,
  onClick,
}: SideBarItemProps) {
  return (
    <Link
      href={link}
      onClick={() => onClick(text)}
      className={classNames("flex items-stretch gap-4 rounded-lg p-2", {
        "bg-primary hover:bg-opacity-50": isActive,
        "hover:bg-black hover:bg-opacity-5": !isActive,
      })}
    >
      <div className="flex-1 flex items-center">
        <div className="text-paragraph font-bold">{text}</div>
      </div>
    </Link>
  );
}
