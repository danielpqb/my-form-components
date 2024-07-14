"use client";

import { twMerge } from "tailwind-merge";
import { Label } from "./Label";

type TProps = {
  label?: string;
  className?: { container?: string; input?: string; label?: string };
};

export function InputText({ label, className }: TProps) {
  return (
    <div className={twMerge("", className?.container)}>
      {label && <Label className={className?.label}>{label}</Label>}
      <input
        className={twMerge(
          "w-full p-2 rounded-md ring-2 ring-blue-500 bg-transparent",
          "text-white outline-none focus:ring-blue-300",
          className?.input
        )}
        type="text"
      />
    </div>
  );
}
