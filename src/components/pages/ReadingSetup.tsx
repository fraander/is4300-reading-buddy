import { Dispatch, SetStateAction, useEffect } from "react";
import { SetRoute } from "../../types/Route";
import TimeButton from "../reused/TimeButton";
import VDiv from "../utils/VDiv";

interface Props {
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
  pages: number;
  setPages: Dispatch<SetStateAction<number>>;
  bookTitle: string;
  setBookTitle: Dispatch<SetStateAction<string>>;
}

export default function ReadingSetup({
  setRoute,
  time,
  setTime,
  pages,
  setPages,
  bookTitle,
  setBookTitle,
}: SetRoute & Props) {
  useEffect(() => {
    setTime(0);
    setPages(0);
    setBookTitle("");
  }, [setTime, setPages, setBookTitle]);

  return (
    <VDiv className="px-4 gap-8 bg-rbg-0 h-full">
      <VDiv className="gap-2 w-full">
        <h1 className="w-full text-xl font-semibold">
          What book are you reading?
        </h1>
        <input
          className="focus:ring-rbo-700-700 outline-none focus:outline-none w-full ring-2 font-mono text-lg ring-rbp-500 rounded-lg p-4"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />
      </VDiv>
      <VDiv className="gap-2 w-full">
        <h1 className="w-full text-xl font-semibold">
          How many minutes do you want to read for?
        </h1>
        <input
          type="number"
          className="focus:ring-rbo-700-700 outline-none focus:outline-none w-full ring-2 font-mono text-lg ring-rbp-500 rounded-lg p-4"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
        />
      </VDiv>
      <VDiv className="gap-2 w-full">
        <h1 className="w-full text-xl font-semibold">
          How many pages do you want to read?
        </h1>
        <input
          type="number"
          className="focus:ring-rbo-700-700 outline-none focus:outline-none w-full ring-2 font-mono text-lg ring-rbp-500 rounded-lg p-4"
          value={pages}
          onChange={(e) => setPages(Number(e.target.value))}
        />
      </VDiv>
      <div className="mt-12 scale-125">
        <TimeButton setRoute={setRoute} destination={"time"} />
      </div>
    </VDiv>
  );
}
