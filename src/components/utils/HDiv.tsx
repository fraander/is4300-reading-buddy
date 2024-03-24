import { HTMLAttributes } from "react";
import { twMerge } from "tw-merge";
import VDiv from "./VDiv";

export default function HDiv(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...newProps } = props;

  const computedClassName = twMerge(`flex-row ${className}`);

  return <VDiv className={computedClassName} {...newProps} />;
}
