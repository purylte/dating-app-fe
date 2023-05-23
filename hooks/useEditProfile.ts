import fetchAuth from "@/utils/fetchAuth";
import React, { useEffect, useState } from "react";

export const useEditProfile = () => {
  const [gender, setGender] = useState<string>("L");
  const [age, setAge] = useState<number>(10);
  const [location, setLocation] = useState<string>("Jakarta");
  const [description, setDescription] = useState<string>("Deskripsi");

  useEffect(() => {
    fetchAuth("profile", "api/profile/get_my_profile", {
      method: "GET",
    }).then((res) => {
      res.json().then((data) => {
        setGender(data.gender);
        setAge(data.umur);
        setLocation(data.domisili);
        setDescription(data.deskripsi);
      });
    });
  }, [gender, age, location, description]);

  const onSubmit = (e: React.FormEvent, buttonClicked: string) => {
    console.log("HAIII");
    if (buttonClicked != "cancel") {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      fetchAuth("profile", "api/profile/update_profile_username/", {
        method: "POST",
        body: JSON.stringify({
          gender: formData.get("gender") as String,
          deskripsi: formData.get("deskripsi") as String,
          domisili: formData.get("domisili") as String,
          umur: formData.get("umur") as String,
        }),
      });
      window.location.reload();
    }
  };

  return { gender, age, location, description, onSubmit };
};
