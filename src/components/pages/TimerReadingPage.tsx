import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Progress from "../reused/Progress";
import HDiv from "../utils/HDiv";
import Spacer from "../utils/Spacer";
import VDiv from "../utils/VDiv";
import {
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import DogIcon from "../reused/DogIcon";
import Timer from "../reused/Timer";
import { Dispatch, SetStateAction, useEffect } from "react";
import { pop } from "../../model/routing";
import { SetRoute } from "../../types/Route";

interface Props {
  time: number;
  pages: number;
  progress: number;
  setProgress: Dispatch<SetStateAction<number>>;
}

export default function TimerReadingPage({
  time,
  pages,
  progress,
  setProgress,
  setRoute,
}: SetRoute & Props) {
  useEffect(() => setProgress(0), [setProgress]);

  return (
    <VDiv className="h-full">
      <VDiv className="bg-rbo-200 h-1/3">
        <Timer timeoutInSeconds={time * 60} />
      </VDiv>
      <VDiv className="h-2/3 px-4 bg-rbo-500 text-rbp-700 gap-2 pt-6">
        <DogIcon />
        <h1 className="text-lg w-full mt-4 font-semibold">Progress</h1>
        <Progress current={progress} full={pages} />
        <HDiv>
          <Spacer />
          <button
            onClick={() => {
              if (progress < pages) {
                setProgress(progress + 1);
              } else if (progress === pages) {
                setRoute(pop());
              }
            }}
          >
            <HDiv className="gap-1 font-semibold italic">
              {progress === pages ? "Done!" : "Next page!"}
              <FontAwesomeIcon
                icon={progress === pages ? faCheck : faArrowRight}
              />
            </HDiv>
          </button>
        </HDiv>
      </VDiv>
    </VDiv>
  );
}
