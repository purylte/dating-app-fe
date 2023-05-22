import React from "react";
import { Button, Checkbox, Form, Input } from "react-daisyui";
import Icon from "../Icon";

type SelectFormProps = {
  data: { id: number; genre: string }[];
  selected: number[];
  addFunction: (id: number) => void;
  deleteFunction: (id: number) => void;
};
export default function SelectFormGenre({
  data,
  selected,
  addFunction,
  deleteFunction,
}: SelectFormProps) {
  return (
    <div className="flex flex-col w-2/3">
      <h1 className="text-header"> Selected </h1>
      <div className="flex gap-4 flex-wrap">
        {data.map(
          (genre) =>
            selected.includes(genre.id) && (
              <Button key={genre.id} onClick={() => deleteFunction(genre.id)}>
                {genre.genre}
                <Icon icon="mdi:remove-bold" />
              </Button>
            )
        )}
      </div>
      <div>
        <h1 className="text-header mt-16"> Others </h1>
        <div className="flex gap-4 flex-wrap">
          {data.map(
            (genre) =>
              !selected.includes(genre.id) && (
                <Button key={genre.id} onClick={() => addFunction(genre.id)}>
                  {genre.genre}
                  <Icon icon="mdi:add-bold" />
                </Button>
              )
          )}
        </div>
      </div>
    </div>
  );
}
