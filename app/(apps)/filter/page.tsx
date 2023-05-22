"use client";
import fetchAuth from "@/utils/fetchAuth";
import { setFilter } from "@/utils/filter";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Button, Form, Input, Radio } from "react-daisyui";

export default function Filter() {
  const router = useRouter();
  const [hobiList, setHobiList] = React.useState<string[]>([]);
  const [genreList, setGenreList] = React.useState<string[]>([]);

  const [domisili, setDomisili] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [hobi, setHobi] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [minRange, setMinRange] = React.useState(0);
  const [maxRange, setMaxRange] = React.useState(50);

  useEffect(() => {
    fetchAuth("profile", "api/hobi/", {
      method: "GET",
    }).then((res) => {
      res.json().then((data) => {
        const temp: string[] = [];
        data.map((hobi: { id: number; hobi: string }) => {
          temp.push(hobi.hobi);
        });
        setHobiList(temp);
      });
    });
    fetchAuth("profile", "api/genre/", {
      method: "GET",
    }).then((res) => {
      res.json().then((data) => {
        const temp: string[] = [];
        data.map((genre: { id: number; genre: string }) => {
          temp.push(genre.genre);
        });
        setGenreList(temp);
      });
    });
  }, []);

  const saveFilter = () => {
    setFilter(domisili, gender, minRange, maxRange, hobi, genre);
    router.push("/");
  };
  return (
    <div className="flex flex-col items-center flex-1 gap-8">
      <h1 className="text-header">Filter</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-4">
          <h2 className="text-subheader">Domisili</h2>
          <Input
            name="domisili"
            type="text"
            placeholder="Domisili"
            className="input-bordered"
            value={domisili}
            onChange={(e) => setDomisili(e.target.value)}
          />
        </div>
        <div className="flex flex-row items-center gap-4">
          <h2 className="text-subheader">Gender</h2>
          <div className="flex flex-row items-center">
            <Form.Label title="None" />
            <Radio
              value=""
              color="primary"
              checked={"" === gender}
              onChange={() => setGender("")}
            />
          </div>
          <div className="flex flex-row items-center">
            <Form.Label title="Male" />
            <Radio
              value="L"
              color="primary"
              checked={"L" === gender}
              onChange={() => setGender("L")}
            />
          </div>
          <div className="flex flex-row items-center">
            <Form.Label title="Female" />
            <Radio
              value="P"
              color="primary"
              checked={"P" === gender}
              onChange={() => setGender("P")}
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <h2 className="text-subheader">Age Range </h2>
          <Input
            name="minRange"
            type="number"
            placeholder="0"
            className="input-bordered"
            value={minRange}
            onChange={(e) => setMinRange(parseInt(e.target.value))}
          />{" "}
          -
          <Input
            name="maxRange"
            type="number"
            placeholder="50"
            className="input-bordered"
            value={maxRange}
            onChange={(e) => setMaxRange(parseInt(e.target.value))}
          />
        </div>
        <div className="flex flex-row items-center gap-4">
          <h2 className="text-subheader">Hobi </h2>
          <div className="flex flex-row items-center">
            <Form.Label title="None" />
            <Radio
              value=""
              color="primary"
              checked={"" === hobi}
              onChange={() => setHobi("")}
            />
          </div>
          {hobiList.map((h) => {
            return (
              <div key={h} className="flex flex-row items-center">
                <Form.Label title={h} />
                <Radio
                  value={h}
                  color="primary"
                  checked={hobi === h}
                  onChange={() => setHobi(h)}
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-row items-center gap-4">
          <h2 className="text-subheader">Genre </h2>
          <div className="flex flex-row items-center">
            <Form.Label title="None" />
            <Radio
              value=""
              color="primary"
              checked={"" === genre}
              onChange={() => setGenre("")}
            />
          </div>
          {genreList.map((g) => {
            return (
              <div key={g} className="flex flex-row items-center">
                <Form.Label title={g} />
                <Radio
                  value={g}
                  color="primary"
                  checked={genre === g}
                  onChange={() => setGenre(g)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Button className="w-1/3" onClick={() => saveFilter()}>
        Save
      </Button>
    </div>
  );
}
