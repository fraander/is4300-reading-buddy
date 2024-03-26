import { HTMLAttributes } from "react";
import VDiv from "./VDiv";
import { twMerge } from "tw-merge";

export default function VList(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...newProps } = props;

  const computedClassName = twMerge(
    `overflow-y-scroll justify-start ${className}`
  );

  return (
    <VDiv className={computedClassName} {...newProps}>
      {newProps.children}
    </VDiv>
  );
}
