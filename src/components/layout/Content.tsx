import { RouteProps } from "../../types/Route";
import HDiv from "../utils/HDiv";
import VDiv from "../utils/VDiv";
import BackButton from "../reused/BackButton";
import DrawButton from "../reused/DrawButton";
import TimeButton from "../reused/TimeButton";

export default function Content({ route, setRoute }: RouteProps) {
  return (
    <VDiv id="content" className="bg-yellow-50">
      <h1>
        Current Page:{" "}
        <span className="p-1 bg-white font-mono text-red-700 font-semibold">
          {route}
        </span>
      </h1>
      <HDiv className="gap-4 my-4">
        {route === "list" ? (
          <>
            <DrawButton setRoute={setRoute} />
            <TimeButton setRoute={setRoute} />
          </>
        ) : (
          <BackButton setRoute={setRoute} />
        )}
      </HDiv>
    </VDiv>
  );
}
