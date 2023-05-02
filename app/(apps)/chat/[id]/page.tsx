import ChatArea from "@/components/chat/ChatArea";
import ChatBubble from "@/components/chat/ChatBubble";
import React from "react";

export default function Chat() {
  return (
    <div className="pl-8 flex h-full flex-col justify-end">
      <div className="grow justify-start">
        <div className="flex-col flex">
          <ChatBubble
            text="Halo asdasd gssdfoeq!"
            isMine
            timestamp={new Date()}
          />
          <ChatBubble
            text="lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eg et tincidunt ultricies, nisl elit tincidunt elit, eget tincidunt elit elit elit elit"
            timestamp={new Date()}
          />
        </div>
      </div>
      <ChatArea className="mb-8" color="primary" />
    </div>
  );
}
