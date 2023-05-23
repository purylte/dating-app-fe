import fetchAuth from "@/utils/fetchAuth";
import { useEffect, useState } from "react";

export const useEditGenre = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const [genres, setGenres] = useState<{ id: number; genre: string }[]>([]);
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
    }).finally(() => {
      setUpdate(update + 1);
    });
  };

  const handleDelete = (id: number) => {
    fetchAuth("profile", "api/profile/delete_genre/", {
      method: "DELETE",
      body: JSON.stringify({ genre: [id] }),
    }).finally(() => {
      setUpdate(update + 1);
    });
  };

  return { selected, genres, handleAdd, handleDelete };
};
