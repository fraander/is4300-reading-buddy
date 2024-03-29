import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Progress from "../reused/Progress";
import HDiv from "../utils/HDiv";
import Spacer from "../utils/Spacer";
import VDiv from "../utils/VDiv";
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import DogIcon from "../reused/DogIcon";
import Timer from "../reused/Timer";
import { useState } from "react";
import { pop } from "../../model/routing";
import { SetRoute } from "../../types/Route";

export default function TimerReadingPage({ setRoute }: SetRoute) {
  const [progress, setProgress] = useState<number>(0);
  const total = 10;

  return (
    <VDiv className="h-full">
      <VDiv className="bg-yellow-400 h-1/3">
        <Timer timeoutInSeconds={180} />
      </VDiv>
      <VDiv className="h-2/3 px-4 text-purple-700 gap-2 pt-6">
        <DogIcon />
        <h1 className="text-lg w-full mt-4 font-semibold">Progress</h1>
        <Progress current={progress} full={total} />
        <HDiv>
          <Spacer />
          <button
            onClick={() => {
              if (progress < total) {
                setProgress(progress + 1);
              } else if (progress === total) {
                setRoute(pop());
              }
            }}
          >
            <HDiv className="gap-1 font-semibold italic">
              {progress === total ? "Done!" : "Next page!"}
              <FontAwesomeIcon
                icon={progress === total ? faCheck : faArrowRight}
              />
            </HDiv>
          </button>
        </HDiv>
      </VDiv>
    </VDiv>
  );
}
