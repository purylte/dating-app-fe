import React from "react";
import { Button, Form, Input } from "react-daisyui";

type AddFriendProps = {
  onAdd: (e: React.FormEvent) => void;
};

export default function AddFriend({ onAdd }: AddFriendProps) {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-header">Add Friend</h1>
      <Form onSubmit={(e) => onAdd(e)} className="flex flex-col gap-4">
        <Input
          type="text"
          name="username"
          placeholder="Username"
          className="input input-bordered"
        />
        <Button type="submit" className="btn-primary">
          Add
        </Button>
      </Form>
    </div>
  );
}
