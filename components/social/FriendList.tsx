import React from "react";
import { Button } from "react-daisyui";
import Icon from "../Icon";

type FriendListProps = {
  friends: string[];
  onRemove: (username: string) => void;
};
export default function FriendList({ friends, onRemove }: FriendListProps) {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-header">Friend List</h1>
      <div className="flex flex-col gap-4">
        {friends.map((friend) => (
          <div key={friend}>
            <Button className="bg-accent" onClick={() => onRemove(friend)}>
              <p className="text-paragraph">
                {friend} <Icon icon="mdi:remove-bold" />
              </p>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
