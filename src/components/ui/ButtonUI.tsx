import { twMerge } from "tailwind-merge";

export function ButtonUI(props: JSX.IntrinsicElements["button"]) {
  return (
    <button
      {...props}
      className={twMerge(
        "flex items-center justify-center text-center w-full p-2 rounded-md",
        "bg-blue-500 text-white hover:bg-opacity-85 active:opacity-50",
        props.className
      )}
    >
      {props.children || "Button"}
    </button>
  );
}
