import HDiv from "../utils/HDiv";
import { RouteProps, routeToTitle } from "../../types/Route";
import BackButton from "../reused/BackButton";
import HSpacer from "../utils/Spacer";

export default function Toolbar({ route, setRoute }: RouteProps) {
  return (
    <HDiv
      id="toolbar"
      className="h-1/6 ring-8 ring-purple-700 bg-yellow-300 p-6"
    >
      {route !== "list" ? (
        <>
          <BackButton setRoute={setRoute} />
          <HSpacer />
          <h3 className="p-2 rounded-lg bg-white italic text-purple-900 font-bold px-4">
            {routeToTitle(route)}
          </h3>
        </>
      ) : (
        <HDiv>
          <h1 className="text-xl text-purple-600 font-bold">Past Reads</h1>
        </HDiv>
      )}
    </HDiv>
  );
}
