"use client";

import { MouseEventHandler, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TProps = {
  className?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export function Button({ children, onClick, className }: TProps) {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center text-center w-full p-2 rounded-md",
        "bg-blue-500 text-white hover:bg-opacity-85 active:opacity-50",
        className
      )}
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick(e);
      }}
    >
      {children || "Button"}
    </button>
  );
}
