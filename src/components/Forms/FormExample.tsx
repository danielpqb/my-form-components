"use client";

import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { InputBoolean } from "../InputBoolean";
import { InputText } from "../InputText";

type TProps = {};

export function FormExample({}: TProps) {
  const { control } = useForm();
  return (
    <form className="flex flex-col gap-2">
      <InputText label="Input" />
      <InputBoolean
        control={control}
        name="yn"
        label="Boolean"
      />
      <Button></Button>
    </form>
  );
}
