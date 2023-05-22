import React from "react";
import Icon from "../Icon";

type ProfileProps = {
  username: string;
  gender: string;
  age: number;
  location: string;
  description: string;
  hobbies: string[];
  genres: string[];
};
export default function Profile({
  username,
  gender,
  age,
  location,
  description,
  hobbies,
  genres,
}: ProfileProps) {
  return (
    <div className="w-2/3 flex flex-col pt-16 flex-1 overflow-y-hidden">
      <p className="pb-2 text-header font-bold">
        {username}, {gender}, {age}
      </p>
      <div className="pb-4 text-subheader">
        <p>
          <Icon icon="mdi:location" /> {location}
        </p>
        <p>
          <Icon icon="streamline:travel-places-theater-mask-hobby-theater-masks-drama-event-show-entertainment" />{" "}
          {hobbies?.join(", ")}
        </p>
        <p>
          <Icon icon="material-symbols:movie" /> {genres?.join(", ")}
        </p>
      </div>
      <p className="text-paragraph overflow-y-auto">{description}</p>
    </div>
  );
}
