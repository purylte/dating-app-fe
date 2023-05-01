import React from "react";
import { default as NextImage } from "next/image";
import classNames from "classnames";

type ImageProps = (
  | {
      /**
       * Width and height in rem.
       * Optional if using wrapperClassName.
       */
      size: number;
      wrapperClassName?: string;
    }
  | {
      size?: never;
      wrapperClassName: string;
    }
) &
  React.ComponentProps<typeof NextImage>;
export default function Image({
  size,
  wrapperClassName,
  className,
  ...props
}: ImageProps) {
  return (
    <div
      className={classNames("relative", {
        [`${wrapperClassName}`]: !!wrapperClassName,
      })}
      style={!!size ? { width: `${size}rem`, height: `${size}rem` } : {}}
    >
      <NextImage fill className={`object-cover ${className}`} {...props} />
    </div>
  );
}
