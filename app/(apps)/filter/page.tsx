"use client";
import fetchAuth from "@/utils/fetchAuth";
import { setFilter } from "@/utils/filter";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Button, Form, Input, Radio, Select } from "react-daisyui";

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
    <div className="m-auto w-full relative flex flex-col justify-center">
      <div className="w-full max-w-xl p-6 m-auto bg-base-200 rounded-md shadow-md">
        <h1 className="text-3xl font-semibold text-center">Filter</h1>
        <Form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="label">
              <span className="text-base label-text">Domisili</span>
            </label>
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
            <label className="label">
              <span className="text-base label-text">Gender</span>
            </label>
            <div className="flex flex-row items-center gap-4">
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
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Age Range</span>
            </label>
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

          {/* <div>
            <label className="label">
              <span className="text-base label-text">Hobi</span>
            </label>
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
          </div> */}

          {/* <div>
            <label className="label">
              <span className="text-base label-text">Hobi</span>
            </label>
            <div className="flex flex-row items-center">
              <Form.Label title="None" />
              <Radio
                value=""
                color="primary"
                checked={hobi === ""}
                onChange={() => setHobi("")}
              />
            </div>
            {hobiList.map((h) => (
              <div key={h} className="flex flex-row items-center">
                <Form.Label title={h} />
                <Radio
                  value={h}
                  color="primary"
                  checked={hobi === h}
                  onChange={() => setHobi(h)}
                />
              </div>
            ))}
          </div> */}

          <div className="flex flex-row justify-between">
            <div className="w-1/2">
              <label className="label">
                <span className="text-base label-text">Hobi</span>
              </label>
              <select
                value={hobi}
                className="select select-bordered w-full"
                onChange={(e) => setHobi(e.target.value)}
              >
                <option value="" disabled>
                  None
                </option>
                {hobiList.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-1/2">
              <label className="label">
                <span className="text-base label-text">Genre</span>
              </label>
              <select
                value={genre}
                className="select select-bordered w-full"
                onChange={(e) => setGenre(e.target.value)}
              >
                <option value="" disabled>
                  None
                </option>
                {genreList.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Button className="w-1/3 btn-primary" onClick={() => saveFilter()}>
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
