"use client";
import AddFriend from "@/components/social/AddFriend";
import FriendList from "@/components/social/FriendList";
import fetchAuth from "@/utils/fetchAuth";
import React, { useEffect, useState } from "react";

export default function Social() {
  const [friends, setFriends] = useState<string[]>([]);
  const [update, setUpdate] = useState(0);
  useEffect(() => {
    fetchAuth("profile", "api/profile/get_my_friend").then((res) => {
      res.json().then((data) => {
        const friendsTemp: string[] = [];
        console.log(data);
        data.map((friend: { username: string }) => {
          friendsTemp.push(friend.username);
        });
        setFriends(friendsTemp);
      });
    });
  }, [update]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    fetchAuth("profile", "api/profile/add_teman/", {
      method: "POST",
      body: JSON.stringify({ username: formData.get("username") }),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        const friendsTemp: string[] = [];
        data.teman.map((friend: { username: string }) => {
          friendsTemp.push(friend.username);
        });
        setFriends(friendsTemp);
        setUpdate(update + 1);
      });
    });
  };

  const handleRemove = (username: string) => {
    fetchAuth("profile", "api/profile/remove_teman/", {
      method: "DELETE",
      body: JSON.stringify({ username: username }),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        const friendsTemp: string[] = [];
        data.map((friend: { username: string }) => {
          friendsTemp.push(friend.username);
        });
        setFriends(friendsTemp);
        setUpdate(update + 1);
      });
    });
  };
  return (
    <>
      <AddFriend onAdd={handleAdd} />
      <FriendList friends={friends} onRemove={handleRemove} />
    </>
  );
}
