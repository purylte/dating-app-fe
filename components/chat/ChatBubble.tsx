"use client";
import classNames from "classnames";
type ChatBubbleProps = {
  text: string;
  isMine?: boolean;
  timestamp: {
    _seconds: number;
    _nanoseconds: number;
  };
};
export default function ChatBubble({
  text,
  isMine = false,
  timestamp,
}: ChatBubbleProps) {
  return (
    <div
      className={classNames("flex-1 flex mb-4", {
        "justify-end": isMine,
      })}
    >
      <div
        className={classNames(
          "max-w-[50%] flex items-end p-2 rounded-xl gap-1",
          {
            "flex-row-reverse": isMine,
            "bg-primary": isMine,
            "bg-secondary": !isMine,
          }
        )}
      >
        <p className="text-paragraph">{text}</p>
        <p className="text-caption whitespace-nowrap">
          {new Date(timestamp._seconds * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        {/* <p className="text-caption whitespace-nowrap">
          {timestamp.toLocaleTimeString(navigator.languages, {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p> */}
      </div>
    </div>
  );
}
