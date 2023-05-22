import React from "react";
import { Button } from "react-daisyui";
import Icon from "../Icon";

type FriendListProps = {
  friends: string[];
  onRemove: (username: string) => void;
};
export default function FriendList({ friends, onRemove }: FriendListProps) {
  return (
    <div>
      <h1 className="text-header">Friend List</h1>
      <div className="flex flex-col gap-4">
        {friends.map((friend) => (
          <div key={friend}>
            <p>{friend}</p>
            <Button onClick={() => onRemove(friend)}>
              <Icon icon="mdi:remove-bold" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
