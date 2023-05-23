"use client";

import ChatBubble from "@/components/chat/ChatBubble";
import fetchAuth from "@/utils/fetchAuth";
import { getCookie } from "cookies-next";
import React, { useEffect, useRef } from "react";
import { Button, Textarea } from "react-daisyui";
import { Socket, io } from "socket.io-client";

export default function Chat({ params }: any) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    const current: any = messagesEndRef.current;
    current?.scrollIntoView({ behavior: "smooth" });
  };
  const [myId, setMyId] = React.useState();
  const [myMessage, setMyMessage] = React.useState<string>("");
  const [messages, setMessages] = React.useState<
    {
      content: string;
      userId: string;
      timestamp: {
        _seconds: number;
        _nanoseconds: number;
      };
    }[]
  >([]);
  const socket = useRef<Socket>();

  useEffect(() => {
    fetchAuth("profile", "api/profile/get_my_profile/", {
      method: "GET",
    }).then((resAuth) => {
      resAuth.json().then((my) => {
        setMyId(my.id);
      });
    });

    fetchAuth("chat", `api/chat/${params.id}/`, {
      method: "GET",
    }).then((res: any) => {
      res.json().then((data: any) => {
        const listMessage: {
          content: string;
          userId: string;
          timestamp: {
            _seconds: number;
            _nanoseconds: number;
          };
        }[] = [];
        console.log(data);
        data.map((d: any) => {
          listMessage.push({
            content: d.message,
            userId: d.sender_id,
            timestamp: d.timestamp,
          });
        });
        setMessages(listMessage);
        setTimeout(() => {
          scrollToBottom();
        }, 500);
      });
    });
    const token = getCookie("access-token");

    socket.current = io("http://35.223.12.163:3000/", {
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    socket.current.emit("joinRoom", {
      chat_room_id: params.id,
    });
    // Event listeners for receiving messages
    socket.current.on("newMessage", (message) => {
      console.log("Received message:", message);
      setMessages((prev) => [
        ...prev,
        {
          content: message.content,
          userId: message.userId,
          timestamp: {
            _seconds: message.timestamp / 1000,
            _nanoseconds: message.timestamp / 10000,
          },
        },
      ]);
      setTimeout(() => {
        scrollToBottom();
      }, 500);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.current?.disconnect();
    };
  }, [params.id]);

  const onSend = () => {
    sendMessage();
    setMyMessage("");
    setTimeout(() => {
      scrollToBottom();
    }, 500);
  };
  const sendMessage = () => {
    socket.current?.emit("message", {
      chat_room_id: params.id,
      content: myMessage,
    });
  };

  return (
    <div className="pl-8 flex h-full flex-col justify-end overflow-y-hidden p-8">
      <div className="grow justify-start overflow-y-auto">
        <div className="flex-col flex">
          {messages.map((message, index) => (
            <ChatBubble
              text={message.content}
              isMine={message.userId !== myId}
              timestamp={message.timestamp}
              key={index}
            />
          ))}
          <div ref={messagesEndRef}></div>
        </div>
      </div>
      <Textarea
        className="mb-8"
        color="primary"
        value={myMessage}
        onChange={(e) => setMyMessage(e.target.value)}
      />
      <Button onClick={() => onSend()}>Send</Button>
    </div>
  );
}
