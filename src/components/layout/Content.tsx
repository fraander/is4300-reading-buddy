import { RouteProps } from "../../types/Route";
import VDiv from "../utils/VDiv";
import PastReads from "../pages/PastReads";
import TimerReadingPage from "../pages/TimerReadingPage";
import ReadingSetup from "../pages/ReadingSetup";
import { useState } from "react";
import { ReadProps } from "../../model/reads";

export default function Content({
  route,
  setRoute,
  reads,
  setReads,
}: RouteProps & ReadProps) {
  const [pages, setPages] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [bookTitle, setBookTitle] = useState<string>("");

  return (
    <VDiv id="content" className="bg-rbg-200">
      {route === "list" && (
        <>
          <PastReads reads={reads} />
        </>
      )}
      {route === "time" && (
        <TimerReadingPage
          time={time}
          pages={pages}
          setRoute={setRoute}
          pageProgress={progress}
          setPageProgress={setProgress}
          reads={reads}
          setReads={setReads}
          title={bookTitle}
        />
      )}
      {route === "setup" && (
        <ReadingSetup
          setRoute={setRoute}
          time={time}
          setTime={setTime}
          pages={pages}
          setPages={setPages}
          bookTitle={bookTitle}
          setBookTitle={setBookTitle}
        />
      )}
    </VDiv>
  );
}
