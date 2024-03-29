import { HTMLAttributes } from "react";
import { twMerge } from "tw-merge";

export default function Button(props: HTMLAttributes<HTMLButtonElement>) {
  const { className, ...newProps } = props;

  return (
    <button
      className={twMerge(
        ` ring-rbp-500 text-rbp-500 font-semibold ring-2 shadow-md bg-white rounded-xl p-2 min-w-8 ${className}`
      )}
      {...newProps}
    >
      {newProps.children}
    </button>
  );
}
