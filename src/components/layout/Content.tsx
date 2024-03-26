import { RouteProps } from "../../types/Route";
import HDiv from "../utils/HDiv";
import VDiv from "../utils/VDiv";
import DrawButton from "../reused/DrawButton";
import TimeButton from "../reused/TimeButton";
import PastReads from "../pages/PastReads";

export default function Content({ route, setRoute }: RouteProps) {
  return (
    <VDiv id="content" className="bg-yellow-100">
      {route === "list" && (
        <>
          <HDiv className="gap-4 pt-4">
            <h1 className="text-purple-900 font-semibold">Start reading:</h1>
            <DrawButton setRoute={setRoute} />
            <TimeButton setRoute={setRoute} />
          </HDiv>
          <PastReads />
        </>
      )}
    </VDiv>
  );
}
