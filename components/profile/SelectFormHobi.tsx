import React from "react";
import { Button } from "react-daisyui";
import Icon from "../Icon";

type SelectFormProps = {
  data: { id: number; hobi: string }[];
  selected: number[];
  addFunction: (id: number) => void;
  deleteFunction: (id: number) => void;
};
export default function SelectFormHobi({
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
          (hobi) =>
            selected.includes(hobi.id) && (
              <Button key={hobi.id} onClick={() => deleteFunction(hobi.id)}>
                {hobi.hobi}
                <Icon icon="mdi:remove-bold" />
              </Button>
            )
        )}
      </div>
      <div>
        <h1 className="text-header mt-16"> Others </h1>
        <div className="flex gap-4 flex-wrap">
          {data.map(
            (hobi) =>
              !selected.includes(hobi.id) && (
                <Button key={hobi.id} onClick={() => addFunction(hobi.id)}>
                  {hobi.hobi}
                  <Icon icon="mdi:add-bold" />
                </Button>
              )
          )}
        </div>
      </div>
    </div>
  );
}
