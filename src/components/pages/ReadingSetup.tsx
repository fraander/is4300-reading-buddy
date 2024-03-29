import { Dispatch, SetStateAction } from "react";
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
  return (
    <VDiv className="px-4 gap-8">
      <VDiv className="gap-2 w-full">
        <h1 className="w-full text-xl font-semibold">
          What book are you reading?
        </h1>
        <input className="w-full ring-2 ring-purple-500 rounded-lg p-4" />
      </VDiv>
      <VDiv className="gap-2 w-full">
        <h1 className="w-full text-xl font-semibold">
          How many minutes do you want to read for?
        </h1>
        <input
          type="number"
          className="w-full ring-2 ring-purple-500 rounded-lg p-4"
        />
      </VDiv>
      <VDiv className="gap-2 w-full">
        <h1 className="w-full text-xl font-semibold">
          How many pages do you want to read?
        </h1>
        <input
          type="number"
          className="w-full ring-2 ring-purple-500 rounded-lg p-4"
        />
      </VDiv>
      <div className="mt-12 scale-125">
        <TimeButton setRoute={setRoute} destination={"time"} />
      </div>
    </VDiv>
  );
}
