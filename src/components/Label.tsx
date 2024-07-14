import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TProps = {
  className?: string;
  children?: ReactNode;
};
export function Label({ children, className }: TProps) {
  return <label className={twMerge("text-white", className)}>{children}</label>;
}
