"use client";
import React from "react";
import { Button, Carousel } from "react-daisyui";
import Image from "../Image";

type ImageCarouselProps = {
  images: string[];
};
export default function ImageCarousel({ images }: ImageCarouselProps) {
  const buttonStyle = (value: string) => {
    return (
      <Button color="primary" size="sm" className="min-w-[2.5*rem]">
        {value}
      </Button>
    );
  };
  return (
    <div className="flex flex-col h-full">
      <Carousel
        className="rounded-box w-full flex-1"
        display="numbered"
        buttonStyle={buttonStyle}
      >
        {images.map((image) => (
          <Carousel.Item key={image}>
            <Image src={image} alt={image} wrapperClassName="w-full h-full" />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
