"use client";

import { ReactNode } from "react";
import { InputTextUI } from "./ui/InputTextUI";
import { LabelUI } from "./ui/LabelUI";

type TProps = {
  children?: ReactNode;
  label?: string;
};

export function InputText({ children, label }: TProps) {
  return (
    <div>
      {label && <LabelUI>{label}</LabelUI>}
      <InputTextUI type="text">{children}</InputTextUI>
    </div>
  );
}
