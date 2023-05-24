"use client";
import ChatSideBar from "@/components/chat/ChatSideBar";
import fetchAuth from "@/utils/fetchAuth";
import React, { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [chatRooms, setChatRooms] = React.useState<
    { chatRoomId: number; username: string }[]
  >([]);
  useEffect(() => {
    fetchAuth("profile", "api/profile/get_my_profile/", {
      method: "GET",
    }).then((resAuth) => {
      resAuth.json().then((my) => {
        fetchAuth("chat", "api/chat/list", {
          method: "GET",
        }).then((res) => {
          res.json().then((data) => {
            const chatRoomsTemp: { chatRoomId: number; username: string }[] =
              [];
            data.map((d: any) => {
              chatRoomsTemp.push({
                chatRoomId: d.id,
                username:
                  my.user.username == d.agents[0].username
                    ? d.agents[1].username
                    : d.agents[0].username,
              });
            });
            setChatRooms(chatRoomsTemp);
          });
        });
      });
    });
  }, []);

  return (
    <div className="flex-1 flex">
      <div className="w-1/5 overflow-y-auto">
        <ChatSideBar chatRooms={chatRooms} />
      </div>
      <div className="w-4/5">{children}</div>
    </div>
  );
}
