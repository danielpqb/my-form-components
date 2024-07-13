import { twMerge } from "tailwind-merge";

export function LabelUI(props: JSX.IntrinsicElements["label"]) {
  return (
    <label
      {...props}
      className={twMerge("text-white", props.className)}
    >
      {props.children}
    </label>
  );
}
