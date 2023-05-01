import ChatSideBar from "@/components/chat/ChatSideBar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 flex">
      <div className="w-1/5 overflow-y-auto">
        <ChatSideBar />
      </div>
      <div className="w-4/5">{children}</div>
    </div>
  );
}
