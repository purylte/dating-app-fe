import React from "react";
import { Button, Form, Input, Select, Textarea, Modal } from "react-daisyui";
import { useEditProfile } from "@/hooks";

type EditProfileProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

export default function EditProfile({ isOpen, onClose }: EditProfileProps) {
  const { gender, age, location, description, onSubmit } = useEditProfile();

  const handleCancelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose?.("cancel");
  };

  return (
    <div>
      <Modal open={isOpen}>
        <Modal.Header>
          <h2 className="modal-title">Edit Profile</h2>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => onSubmit(e, "submit")}>
            <Form.Label title="Gender" />
            <Select
              defaultValue={gender}
              name="gender"
              className="select select-bordered"
            >
              <option value="default" disabled>
                Pick one
              </option>
              <option value="L">Male</option>
              <option value="P">Female</option>
            </Select>
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
            <div className="flex justify-end mt-6">
              <Button className="mr-2" onClick={handleCancelClick}>
                Cancel
              </Button>
              <Button className="btn-primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
