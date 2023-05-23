"use client";

import Profile from "@/components/profile/Profile";
import fetchAuth from "@/utils/fetchAuth";
import React, { useEffect, useState } from "react";
import { Button, Link } from "react-daisyui";

import EditProfile from "@/components/profile/EditProfile";
import SelectFromGenre from "@/components/profile/SelectFormGenre";
import SelectFormHobi from "@/components/profile/SelectFormHobi";

export default function ProfileHome() {
  const [username, setUsername] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [location, setLocation] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [hobiState, setHobiState] = useState<string[]>([]);
  const [genreState, setGenreState] = useState<string[]>([]);

  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isEditGenreOpen, setIsEditGenreOpen] = useState(false);
  const [isEditHobiOpen, setIsEditHobiOpen] = useState(false);

  useEffect(() => {
    fetchAuth("auth", "auth/profile", {
      method: "GET",
    }).then((res) => {
      res.json().then((data) => {
        setUsername(data.username);
      });
    });

    fetchAuth("profile", "api/profile/get_my_profile", {
      method: "GET",
    }).then((res) => {
      res.json().then((data) => {
        setGender(data.gender);
        setAge(data.umur);
        setLocation(data.domisili);
        setDescription(data.deskripsi);

        const hobis: string[] = [];
        data.hobi.forEach((hobi: { id: number; hobi: string }) => {
          hobis.push(hobi.hobi);
        });
        setHobiState(hobis);

        const genres: string[] = [];
        data.genre.forEach((genre: { id: number; genre: string }) => {
          genres.push(genre.genre);
        });
        setGenreState(genres);
      });
    });
  }, []);

  const handleEditProfileClick = () => {
    setIsEditProfileOpen(true);
  };

  const handleEditGenreClick = () => {
    setIsEditGenreOpen(true);
  };

  const handleEditHobiClick = () => {
    setIsEditHobiOpen(true);
  };

  const handleEditProfileClose = () => {
    setIsEditProfileOpen(false);
  };

  const handleEditGenreClose = () => {
    setIsEditGenreOpen(false);
  };

  const handleEditHobiClose = () => {
    setIsEditHobiOpen(false);
  };

  return (
    <>
      <EditProfile
        isOpen={isEditProfileOpen}
        onClose={handleEditProfileClose}
      />

      <SelectFromGenre
        isOpen={isEditGenreOpen}
        onClose={handleEditGenreClose}
      />

      <SelectFormHobi isOpen={isEditHobiOpen} onClose={handleEditHobiClose} />

      <div className="flex flex-1 flex-col items-center justify-start pb-4">
        <div className="flex justify-center gap-4">
          <Button
            className="bg-secondary hover:bg-secondary-focus"
            onClick={handleEditProfileClick}
          >
            Edit Profile
          </Button>
          <Button
            className="bg-secondary hover:bg-secondary-focus"
            onClick={handleEditGenreClick}
          >
            Edit Genre
          </Button>
          <Button
            className="bg-secondary hover:bg-secondary-focus"
            onClick={handleEditHobiClick}
          >
            Edit Hobi
          </Button>
        </div>

        <Profile
          username={username}
          age={age}
          description={description}
          gender={gender}
          genres={genreState}
          hobbies={hobiState}
          location={location}
        />
      </div>
    </>
  );
}
