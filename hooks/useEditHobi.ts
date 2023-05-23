import fetchAuth from "@/utils/fetchAuth";
import { useEffect, useState } from "react";

export const useEditHobi = () => {
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

  return { selected, hobis, handleAdd, handleDelete };
};
