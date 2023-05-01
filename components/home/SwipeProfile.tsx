/* eslint-disable @next/next/no-img-element */
import Icon from "../Icon";
import ImageCarousel from "./ImageCarousel";

export default function SwipeProfile({
  name,
  age,
  bio,
  education,
  work,
  photos,
}: {
  name: string;
  age: number;
  bio: string;
  education: string;
  work: string;
  photos: string[];
}) {
  return (
    <div className="flex justify-between gap-8 h-full">
      <div className="w-1/2">
        <ImageCarousel images={photos} />
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <p className="pb-2 text-header font-bold">
          {name}, {age}
        </p>
        <div className="pb-4 text-subheader">
          <p>
            <Icon icon="ic:round-work" /> {work}
          </p>
          <p>
            <Icon icon="material-symbols:school-rounded" /> {education}
          </p>
        </div>
        <p className="text-paragraph">{bio}</p>
      </div>
    </div>
  );
}
