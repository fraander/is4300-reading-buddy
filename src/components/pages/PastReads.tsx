import HDiv from "../utils/HDiv";
import Spacer from "../utils/Spacer";
import VList from "../utils/VList";

function PastReadRow({ read }: { read: Read }) {
  const { title, pages, pageTarget, duration, progress } = read;

  return (
    <HDiv className="m-1 p-3 bg-white rounded-lg shadow-md gap-2">
      <h2 className="font-semibold font-serif text-rbp-700 line-clamp-2 flex-1">
        {title}
      </h2>
      {/* <Spacer /> */}
      <p
        className={`font-mono text-xs ${
          pages === pageTarget ? "bg-rbg-200 text-white font-bold" : "bg-rbp-0"
        } rounded-lg p-2 min-w-20 text-center`}
      >
        {pages}
        <span className="font-thin">{" / "}</span>
        {pageTarget}
        <br />
        pages
      </p>
      <p
        className={`font-mono text-xs ${
          (duration * 60 - progress) === 0
            ? "bg-rbg-200 text-white font-bold"
            : "bg-rbp-0"
        } rounded-lg p-2 min-w-20 text-center`}
      >
        {duration - Math.max(0, progress)} // TODO: time math
        <span className="font-thin">{" / "}</span>
        {duration}
        <br />
        mins
      </p>
    </HDiv>
  );
}
import { Read } from "../../model/reads";

export default function PastReads({ reads }: { reads: Read[] }) {
  return (
    <VList className="px-4 py-4 pb-12 bg-rbg-0 min-h-full">
      {reads.map((read, i) => (
        <PastReadRow key={i} read={read} />
      ))}
    </VList>
  );
}
