import React from "react";
import { Button, Modal } from "react-daisyui";
import Icon from "../Icon";
import { useEditGenre } from "@/hooks";

type SelectFromGenreProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

export default function SelectFromGenre({
  isOpen,
  onClose,
}: SelectFromGenreProps) {
  const { genres, selected, handleAdd, handleDelete } = useEditGenre();

  return (
    <Modal open={isOpen}>
      <Modal.Header>
        <h2 className="modal-title">Genre Selection</h2>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col w-2/3">
          <h2 className="text-header">Selected</h2>
          <div className="flex gap-4 flex-wrap">
            {genres.map(
              (genre) =>
                selected.includes(genre.id) && (
                  <Button
                    key={genre.id}
                    onClick={() => handleDelete(genre.id)}
                    className="bg-accent"
                  >
                    {genre.genre}
                    <Icon icon="mdi:remove-bold" />
                  </Button>
                )
            )}
          </div>
          <div>
            <h2 className="text-header mt-8">Others</h2>
            <div className="flex gap-4 flex-wrap">
              {genres.map(
                (genre) =>
                  !selected.includes(genre.id) && (
                    <Button
                      key={genre.id}
                      onClick={() => handleAdd(genre.id)}
                      className="bg-secondary"
                    >
                      {genre.genre}
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
