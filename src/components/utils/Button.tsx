import { HTMLAttributes } from "react";
import { twMerge } from "tw-merge";

export default function Button(props: HTMLAttributes<HTMLButtonElement>) {
  const { className, ...newProps } = props;

  return (
    <button
      className={twMerge(`ring-2 shadow-md ring-yellow-400 bg-white rounded-xl p-2 min-w-8 ${className}`)}
      {...newProps}
    >
      {newProps.children}
    </button>
  );
}
