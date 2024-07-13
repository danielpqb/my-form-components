import { twMerge } from "tailwind-merge";

export function InputTextUI(props: JSX.IntrinsicElements["input"]) {
  return (
    <input
      {...props}
      className={twMerge(
        "w-full p-2 rounded-md ring-2 ring-blue-500 bg-transparent",
        "text-white outline-none focus:ring-blue-300",
        props.className
      )}
    ></input>
  );
}
