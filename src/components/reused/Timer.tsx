import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { fancyTimeFormat } from "../utils/fancyTimeFormat";

interface Props {
  timeoutInSeconds: number;
  setProgress: Dispatch<SetStateAction<number>>;
}

export default function Timer({ timeoutInSeconds, setProgress }: Props) {
  const [timeLeftInSeconds, setTimeLeftInSeconds] =
    useState<number>(timeoutInSeconds);

  useEffect(() => {
    setTimeLeftInSeconds(timeoutInSeconds);
  }, [timeoutInSeconds, setProgress]);

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      const newTimeLeftInMillis = timeLeftInSeconds - 1;
      setProgress(() => newTimeLeftInMillis);
      console.log("New Time: " + Math.max(0, newTimeLeftInMillis));
      return newTimeLeftInMillis < 0
        ? clearInterval(interval)
        : setTimeLeftInSeconds(timeLeftInSeconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="p-4 text-4xl font-bold font-mono bg-rbp-0 rounded-lg shadow-lg text-rbp-500">
      {fancyTimeFormat(timeLeftInSeconds)}
    </div>
  );
}
