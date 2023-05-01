"use client";

import React from "react";
import { Icon as Iconify } from "@iconify/react";
import { IconProps } from "@iconify/react";

export default function Icon(props: IconProps) {
  return <Iconify inline {...props} />;
}
