"use client";
import SelectFormGenre from "@/components/profile/SelectFormGenre";
import fetchAuth from "@/utils/fetchAuth";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "react-daisyui";

export default function EditGenre() {
  const [selected, setSelected] = useState<number[]>([1, 3]);
  const [genres, setGenres] = useState<{ id: number; genre: string }[]>([
    {
      id: 1,
      genre: "Action",
    },
    {
      id: 2,
      genre: "Adventure",
    },
    {
      id: 3,
      genre: "Comedy",
    },
  ]);
  const [update, setUpdate] = useState(0);
  useEffect(() => {
    fetchAuth("profile", "api/genre").then((res) => {
      res.json().then((data) => {
        setGenres(data);
      });
    });
    fetchAuth("profile", "api/profile/get_my_profile").then((res) => {
      res.json().then((data) => {
        console.log(data);
        const pilih: number[] = [];
        data.genre.map((genre: { id: number; genre: string }) => {
          pilih.push(genre.id);
        });
        setSelected(pilih);
      });
    });
  }, [update]);

  const handleAdd = (id: number) => {
    fetchAuth("profile", "api/profile/add_genre/", {
      method: "POST",
      body: JSON.stringify({ genre: [id] }),
    });
    setUpdate(update + 1);
  };

  const handleDelete = (id: number) => {
    fetchAuth("profile", "api/profile/delete_genre/", {
      method: "DELETE",
      body: JSON.stringify({ genre: [id] }),
    });
    setUpdate(update + 1);
  };

  return (
    <div className="flex items-center flex-1 flex-col">
      <SelectFormGenre
        data={genres}
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
