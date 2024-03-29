import { useEffect, useState } from "react";

interface Props {
  timeoutInSeconds: number;
}

function fancyTimeFormat(duration: number): string {
  // Hours, minutes and seconds
  const hrs = ~~(duration / 3600);
  const mins = ~~((duration % 3600) / 60);
  const secs = ~~duration % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;

  return ret;
}

export default function Timer({ timeoutInSeconds }: Props) {
  const [timeLeftInSeconds, setTimeLeftInSeconds] =
    useState<number>(timeoutInSeconds);

  useEffect(() => {
    setTimeLeftInSeconds(timeoutInSeconds);
  }, [timeoutInSeconds]);

  useEffect(() => {
    const interval: number = setInterval(() => {
      const newTimeLeftInMillis = timeLeftInSeconds - 1;
      return newTimeLeftInMillis < 0
        ? clearInterval(interval)
        : setTimeLeftInSeconds(timeLeftInSeconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return <div className="p-4 text-4xl font-bold font-mono bg-slate-100 rounded-lg shadow-lg text-purple-600">{fancyTimeFormat(timeLeftInSeconds)}</div>;
}
