import React, { useState } from "react";
import { Button, Form, Input, Select, Textarea } from "react-daisyui";

type EditProfileProps = {
  gender: string;
  age: number;
  location: string;
  description: string;
  onSubmit: (e: React.FormEvent) => void;
};

export default function EditProfile({
  gender,
  age,
  location,
  description,
  onSubmit,
}: EditProfileProps) {
  return (
    <div className="w-2/3">
      <h1 className="text-header"> Edit Profile </h1>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Label title="Gender" />
        <select className="select select-bordered" defaultValue={gender}>
          <option value={"default"} disabled>
            Pick one
          </option>
          <option value={"L"}>Male</option>
          <option value={"P"}>Female</option>
        </select>
        <Form.Label title="Age" />
        <Input
          name="umur"
          type="number"
          defaultValue={age}
          className="input-bordered"
        />
        <Form.Label title="Location" />
        <Input
          name="domisili"
          type="text"
          defaultValue={location}
          className="input-bordered"
        />
        <Form.Label title="Description" className="mt-4" />
        <Textarea
          name="deskripsi"
          defaultValue={description}
          className="input-bordered"
        />

        <Button className="mt-8" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
