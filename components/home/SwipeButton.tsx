"use client";
import { Button } from "react-daisyui";

type SwipeButtonProps = {
  text: string;
} & React.ComponentProps<typeof Button>;
export default function SwipeButton({ text, ...props }: SwipeButtonProps) {
  return (
    <Button
      fullWidth
      color="primary"
      animation
      {...props}
      className="text-subheader"
    >
      {text}
    </Button>
  );
}
