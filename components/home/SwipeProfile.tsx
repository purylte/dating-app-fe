/* eslint-disable @next/next/no-img-element */
import Icon from "../Icon";
import ImageCarousel from "./ImageCarousel";

type SwipeProfileProps = {
  username: string;
  age: number;
  gender: string;
  description: string;
  location: string;
  genres: string[];
  hobbies: string[];
  photos: string[];
};

export default function SwipeProfile({
  username,
  age,
  gender,
  location,
  description,
  genres,
  hobbies,
  photos,
}: SwipeProfileProps) {
  return (
    <div className="flex justify-between gap-8 h-full">
      <div className="w-1/2">
        <ImageCarousel images={photos} />
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <p className="pb-2 text-header font-bold">
          {username}, {age}, {gender}
        </p>
        <div className="pb-4 text-subheader">
          <p>
            <Icon icon="mdi:location" /> {location}
          </p>
          <p>
            <Icon icon="streamline:travel-places-theater-mask-hobby-theater-masks-drama-event-show-entertainment" />{" "}
            {hobbies.join(", ")}
          </p>
          <p>
            <Icon icon="mdi:music" /> {genres.join(", ")}
          </p>
        </div>
        <p className="text-paragraph">{description}</p>
      </div>
    </div>
  );
}
