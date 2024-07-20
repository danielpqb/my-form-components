"use client";

import { ChangeEvent, useState } from "react";
import { twMerge } from "tailwind-merge";

type TProps = {
  acceptFiles?: string[];
};
export function DropFiles({ acceptFiles }: TProps) {
  const [documents, setDocuments] = useState<Record<string, File> | null>(null);
  const [isDropping, setIsDropping] = useState(false);

  async function onChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.files && e.currentTarget.files.length > 0) {
      const fileList = e.currentTarget.files;

      const files = {} as Record<string, File>;
      Object.values(fileList).forEach((value) => {
        // If acceptFiles is undefined, accept all files
        if (acceptFiles === undefined) {
          files[value.name] = value;
          return;
        }
        // If acceptFiles is defined, only accept files with the correct extension
        const type = value.type.split(".").slice(-1)[0];
        if (acceptFiles.includes(type)) {
          files[value.name] = value;
        }
      });

      // Update the documents state with the new files
      setDocuments((old) => {
        return { ...old, ...files };
      });
    }
  }

  return (
    <div
      className={twMerge(
        "relative flex w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600",
        isDropping && "bg-gray-600"
      )}
    >
      <input
        type="file"
        multiple
        className="absolute w-full h-full cursor-pointer file:hidden text-transparent"
        accept={acceptFiles?.join(",")}
        onChange={onChange}
        onDragEnter={() => {
          setIsDropping(true);
        }}
        onDragLeave={() => {
          setIsDropping(false);
        }}
        onDrop={() => {
          setIsDropping(false);
        }}
      />
      <div className="flex flex-col items-center justify-center p-4 w-full pointer-events-none [&>*]:pointer-events-none">
        <svg
          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
          />
        </svg>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Click to upload</span> or drag and
          drop
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Only .XLSX Files
        </p>
      </div>
    </div>
  );
}
