import { Dispatch, SetStateAction } from "react";

interface Read {
  title: string;
  duration: number;
  progress: number;
  pages: number;
  pageTarget: number;
}

class GenericRead implements Read {
  title: string;
  duration: number;
  progress: number;
  pages: number;
  pageTarget: number;

  constructor(
    title: string,
    progress: number,
    duration: number,
    pages: number,
    pageTarget: number
  ) {
    this.title = title;
    this.progress = Math.min(progress, duration);
    this.duration = duration;
    this.pages = pages;
    this.pageTarget = pageTarget;
  }
}

type SetReadProps = { setReads: Dispatch<SetStateAction<Read[]>> };

type ReadProps = {
  reads: Read[];
} & SetReadProps;

export { GenericRead };
export type { Read, ReadProps, SetReadProps };
