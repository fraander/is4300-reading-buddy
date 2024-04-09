import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Progress from "../reused/Progress";
import HDiv from "../utils/HDiv";
import Spacer from "../utils/Spacer";
import VDiv from "../utils/VDiv";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import DogIcon from "../reused/DogIcon";
import Timer from "../reused/Timer";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { pop } from "../../model/routing";
import { SetRoute } from "../../types/Route";
import { GenericRead, ReadProps } from "../../model/reads";
import Button from "../utils/Button";

interface Props {
  title: string;
  time: number;
  pages: number;
  pageProgress: number;
  setPageProgress: Dispatch<SetStateAction<number>>;
}

export default function TimerReadingPage({
  title,
  time,
  pages,
  pageProgress,
  setPageProgress,
  setRoute,
  reads,
  setReads,
}: SetRoute & Props & ReadProps) {
  const [timeProgress, setTimeProgress] = useState<number>(0);

  useEffect(() => {
    setPageProgress(0);
    setTimeProgress(time);
  }, [setPageProgress, time]);

  return (
    <VDiv className="h-full">
      <VDiv className="h-full px-4 bg-rbo-500 text-rbp-700 gap-2 pt-6">
        <VDiv className="my-10">
          <Timer timeoutInSeconds={time * 60} setProgress={setTimeProgress} />
        </VDiv>
        {timeProgress <= 0 && (
          <HDiv className="mt-4 gap-4 p-3">
            <div className="flex flex-row bg-white rounded-full  justify-center items-center p-4 w-96 gap-4">
              <p className="text-xl font-serif text-rbp-700">You did it!</p>
              <Button
                onClick={() => {
                  const newRead = new GenericRead(
                    title,
                    timeProgress,
                    time,
                    pageProgress,
                    pages
                  );
                  setReads([...reads, newRead]);
                  setRoute(pop());
                }}
              >
                Done <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </HDiv>
        )}
        <DogIcon />
        <h1 className="text-lg w-full mt-4 font-semibold">Page Progress</h1>
        <Progress current={pageProgress} full={pages} />
        <HDiv>
          <Spacer />
          <button
            onClick={() => {
              if (pageProgress < pages) {
                setPageProgress(pageProgress + 1);
              } else if (pageProgress === pages) {
                const newRead = new GenericRead(
                  title,
                  timeProgress,
                  time,
                  pageProgress,
                  pages
                );
                setReads([...reads, newRead]);
                setRoute(pop());
              }
            }}
          >
            <HDiv className="gap-1 mb-32 font-semibold italic">
              {pageProgress === pages ? "Done!" : "Next page!"}
              <FontAwesomeIcon
                icon={pageProgress === pages ? faCheck : faArrowRight}
              />
            </HDiv>
          </button>
        </HDiv>
      </VDiv>
    </VDiv>
  );
}
