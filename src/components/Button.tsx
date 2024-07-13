"use client";

import { MouseEventHandler, ReactNode } from "react";
import { ButtonUI } from "./ui/ButtonUI";

type TProps = {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export function Button({ children, onClick }: TProps) {
  return (
    <ButtonUI
      type="submit"
      onClick={(e) => {
        onClick && onClick(e);
      }}
    >
      {children}
    </ButtonUI>
  );
}
