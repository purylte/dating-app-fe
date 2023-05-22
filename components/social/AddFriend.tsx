import React from "react";
import { Button, Form, Input } from "react-daisyui";

type AddFriendProps = {
  onAdd: (e: React.FormEvent) => void;
};

export default function AddFriend({ onAdd }: AddFriendProps) {
  return (
    <div>
      <h1 className="text-header">Add Friend</h1>
      <Form onSubmit={(e) => onAdd(e)}>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          className="input input-bordered"
        />
        <Button type="submit">Add</Button>
      </Form>
    </div>
  );
}
