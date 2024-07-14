"use client";

import { twMerge } from "tailwind-merge";
import { Label } from "./Label";
import { Control, FieldValues, useController } from "react-hook-form";
import { useState } from "react";

type TProps = {
  label?: string;
  className?: { container?: string; input?: string; label?: string };
  name: string;
  control: Control<FieldValues, any>;
};

export function InputBoolean({ label, className, control, name }: TProps) {
  const { field } = useController({
    control: control,
    defaultValue: null,
    name,
  });

  function onChange(value: boolean) {
    setValue(value);
    field.onChange(value);
  }

  const [value, setValue] = useState<boolean | null>(null);

  return (
    <div className={twMerge("flex flex-col w-full", className?.container)}>
      {label && <Label className={className?.label}>{label}</Label>}
      <div className="flex gap-2 w-full max-w-56">
        <button
          className="p-2 bg-green-500 rounded-md text-white w-full"
          onClick={(e) => {
            e.preventDefault();
            onChange(true);
          }}
        >
          Sim
        </button>
        <button
          className="p-2 bg-red-500 rounded-md text-white w-full"
          onClick={(e) => {
            e.preventDefault();
            onChange(false);
          }}
        >
          Não
        </button>
      </div>
    </div>
  );
}
