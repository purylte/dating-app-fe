"use client";
import EditProfile from "@/components/profile/EditProfile";
import fetchAuth from "@/utils/fetchAuth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function EditProfilePage() {
  const router = useRouter();
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
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log(formData);
    fetchAuth("profile", "api/profile/update_profile_username/", {
      method: "POST",
      body: JSON.stringify({
        gender: formData.get("gender") as String,
        deskripsi: formData.get("deskripsi") as String,
        domisili: formData.get("domisili") as String,
        umur: formData.get("umur") as String,
      }),
    });
    router.push("/profile");
  };

  return (
    <div className="flex-1 flex justify-center">
      <EditProfile
        gender={gender}
        age={age}
        description={description}
        location={location}
        onSubmit={onSubmit}
      />
    </div>
  );
}
