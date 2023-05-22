"use client";
import SelectFormGenre from "@/components/profile/SelectFormGenre";
import SelectFormHobi from "@/components/profile/SelectFormHobi";
import fetchAuth from "@/utils/fetchAuth";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "react-daisyui";

export default function Edithobi() {
  const [selected, setSelected] = useState<number[]>([]);
  const [hobis, setHobis] = useState<{ id: number; hobi: string }[]>([]);
  const [update, setUpdate] = useState(0);
  useEffect(() => {
    fetchAuth("profile", "api/hobi").then((res) => {
      res.json().then((data) => {
        setHobis(data);
      });
    });
    fetchAuth("profile", "api/profile/get_my_profile").then((res) => {
      res.json().then((data) => {
        const pilih: number[] = [];
        data.hobi.map((hobi: { id: number; hobi: string }) => {
          pilih.push(hobi.id);
        });
        setSelected(pilih);
      });
    });
  }, [update]);

  const handleAdd = (id: number) => {
    fetchAuth("profile", "api/profile/add_hobi/", {
      method: "POST",
      body: JSON.stringify({ hobi: [id] }),
    }).finally(() => {
      setUpdate(update + 1);
    });
  };
  const handleDelete = (id: number) => {
    fetchAuth("profile", "api/profile/delete_hobi/", {
      method: "DELETE",
      body: JSON.stringify({ hobi: [id] }),
    }).finally(() => {
      setUpdate(update + 1);
    });
  };
  return (
    <div className="flex items-center flex-1 flex-col">
      <SelectFormHobi
        data={hobis}
        selected={selected}
        addFunction={handleAdd}
        deleteFunction={handleDelete}
      />
      <Button className="mt-16 text-subheader" color="success">
        <Link href="/profile">Done</Link>
      </Button>
    </div>
  );
}
