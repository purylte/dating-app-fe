/* eslint-disable @next/next/no-img-element */
import Icon from "../Icon";
import ImageCarousel from "./ImageCarousel";

type SwipeProfileProps = {
  username: string;
  age: number;
  gender: string;
  description: string;
  genres: string[];
  hobbies: string[];
  photos: string[];
};

export default function SwipeProfile({
  username,
  age,
  gender,
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
            <Icon icon="ic:round-work" /> {hobbies.join(", ")}
          </p>
          <p>
            <Icon icon="material-symbols:school-rounded" /> {genres.join(", ")}
          </p>
        </div>
        <p className="text-paragraph">{description}</p>
      </div>
    </div>
  );
}
