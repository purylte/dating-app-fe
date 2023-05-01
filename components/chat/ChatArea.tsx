"use client";
import React from "react";
import { Textarea } from "react-daisyui";

export default function ChatArea({ ...props }) {
  return <Textarea {...props} />;
}
