import { HTMLAttributes } from "react";
import { twMerge } from "tw-merge";

export default function VDiv(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...newProps } = props;

  const computedClassName = twMerge(
    `flex flex-col w-full justify-center items-center ${className}`
  );

  return (
    <div className={computedClassName} {...newProps}>
      {newProps.children}
    </div>
  );
}
