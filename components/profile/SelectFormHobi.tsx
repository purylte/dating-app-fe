import React from "react";
import { Button, Modal } from "react-daisyui";
import Icon from "../Icon";
import { useEditHobi } from "@/hooks";

type SelectFormProps = {
  isOpen?: boolean;
  onClose?: () => void;
};
export default function SelectFormHobi({ isOpen, onClose }) {
  const { hobis, selected, handleAdd, handleDelete } = useEditHobi();

  return (
    <Modal open={isOpen}>
      <Modal.Header>
        <h2 className="modal-title">Genre Selection</h2>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col w-full">
          <h2 className="text-subheader"> Selected </h2>
          <div className="flex gap-4 flex-wrap">
            {hobis.map(
              (hobi) =>
                selected.includes(hobi.id) && (
                  <Button
                    key={hobi.id}
                    onClick={() => handleDelete(hobi.id)}
                    className="bg-accent"
                  >
                    {hobi.hobi}
                    <Icon icon="mdi:remove-bold" />
                  </Button>
                )
            )}
          </div>
          <div>
            <h2 className="text-subheader mt-8"> Others </h2>
            <div className="flex gap-4 flex-wrap">
              {hobis.map(
                (hobi) =>
                  !selected.includes(hobi.id) && (
                    <Button
                      key={hobi.id}
                      onClick={() => handleAdd(hobi.id)}
                      className="bg-secondary"
                    >
                      {hobi.hobi}
                      <Icon icon="mdi:add-bold" />
                    </Button>
                  )
              )}
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Body>
        <div className="flex justify-end mt-6">
          <Button
            className="btn-primary"
            onClick={() => window.location.reload()}
          >
            Done
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
