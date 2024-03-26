import HDiv from "../utils/HDiv";
import Spacer from "../utils/Spacer";
import VList from "../utils/VList";

interface Read {
  title: string;
  duration: number;
  progress: number;
}

class GenericRead implements Read {
  title: string;
  duration: number;
  progress: number;

  constructor(title: string, duration: number, progress: number) {
    this.title = title;
    this.duration = duration;
    this.progress = progress;
  }
}

const reads: Read[] = [
  new GenericRead("Where the wild things are", 15, 10),
  new GenericRead("Green Eggs & Ham", 22, 8),
  new GenericRead("Very Hungry Caterpillar", 6, 6),
  new GenericRead("Where the wild things decided to go", 15, 10),
  new GenericRead("Green Eggs & Ham", 22, 8),
  new GenericRead("Very Hungry Caterpillar", 6, 6),
  new GenericRead("Where the wild things are", 15, 10),
  new GenericRead("Green Eggs & Ham", 22, 8),
  new GenericRead("Very Hungry Caterpillar", 6, 6),
  new GenericRead("Where the wild things are", 15, 10),
  new GenericRead("Green Eggs & Ham", 22, 8),
  new GenericRead("Very Hungry Caterpillar", 6, 6),
  new GenericRead("Where the wild things are", 15, 10),
  new GenericRead("Green Eggs & Ham", 22, 8),
  //   new GenericRead("Very Hungry Caterpillar", 6, 6),
];

function PastReadRow({ read }: { read: Read }) {
  const { title, duration, progress } = read;

  return (
    <HDiv className="m-1 p-3 bg-white rounded-lg shadow-md">
      <h2 className="font-semibold font-serif text-purple-900">{title}</h2>
      <Spacer />
      <p
        className={`font-mono text-xs bg-purple-100 rounded-lg p-2 min-w-24 max-w-24 text-center ml-3`}
      >
        {progress}
        <span className="font-thin">{" / "}</span>
        {duration}
      </p>
    </HDiv>
  );
}

export default function PastReads() {
  return (
    <VList className="px-4 mt-4 ring-2 ring-purple-400 pt-4 bg-slate-100">
      {reads.map((read, i) => (
        <PastReadRow key={i} read={read} />
      ))}
    </VList>
  );
}
