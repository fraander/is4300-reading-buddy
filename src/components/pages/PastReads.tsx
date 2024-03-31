import HDiv from "../utils/HDiv";
import Spacer from "../utils/Spacer";
import VList from "../utils/VList";

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

  constructor(title: string) {
    this.title = title;
    this.progress = Math.floor(Math.random() * 10);
    this.duration = this.progress + Math.floor(Math.random() * 10);
    this.pages = Math.floor(Math.random() * 10);
    this.pageTarget = this.pages + Math.floor(Math.random() * 10);
  }
}

const reads: Read[] = [
  new GenericRead("Where the wild things are"),
  new GenericRead("Green Eggs & Ham"),
  new GenericRead("Very Hungry Caterpillar"),
  new GenericRead("Where the wild things decided to go"),
  new GenericRead("Green Eggs & Ham"),
  new GenericRead("Very Hungry Caterpillar"),
  new GenericRead("Where the wild things are"),
  new GenericRead("Green Eggs & Ham"),
  new GenericRead("Very Hungry Caterpillar"),
  new GenericRead("Where the wild things are"),
  new GenericRead("Green Eggs & Ham"),
  new GenericRead("Very Hungry Caterpillar"),
  new GenericRead("Where the wild things are"),
  new GenericRead("Green Eggs & Ham"),
  //   new GenericRead("Very Hungry Caterpillar"),
];

function PastReadRow({ read }: { read: Read }) {
  const { title, pages, pageTarget, duration, progress } = read;

  return (
    <HDiv className="m-1 p-3 bg-white rounded-lg shadow-md gap-2">
      <h2 className="font-semibold font-serif text-rbp-700 line-clamp-2">
        {title}
      </h2>
      <Spacer />
      <p
      className={`font-mono text-xs ${pages === pageTarget ? "bg-rbg-200 text-white font-bold" : "bg-rbp-0"} rounded-lg p-2 min-w-20 max-w-20 text-center`}
      >
        {pages}
        <span className="font-thin">{" / "}</span>
        {pageTarget}
        <br />
        pages
      </p>
      <p
      className={`font-mono text-xs ${progress === duration ? "bg-rbg-200 text-white font-bold" : "bg-rbp-0"} rounded-lg p-2 min-w-20 max-w-20 text-center`}
      >
        {progress}
        <span className="font-thin">{" / "}</span>
        {duration}
        <br />
        mins
      </p>
    </HDiv>
  );
}

export default function PastReads() {
  return (
    <VList className="px-4 py-4 pb-12 bg-rbg-0">
      {reads.map((read, i) => (
        <PastReadRow key={i} read={read} />
      ))}
    </VList>
  );
}
