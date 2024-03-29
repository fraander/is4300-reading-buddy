import HDiv from "../utils/HDiv";
import { RouteProps, routeToTitle } from "../../types/Route";
import BackButton from "../reused/BackButton";
import Spacer from "../utils/Spacer";

export default function Toolbar({ route, setRoute }: RouteProps) {
  return (
    <HDiv id="toolbar" className="h-1/6 bg-rbg-700 p-6">
      {route === "list" && (
        <HDiv>
          <h1 className="text-xl text-rbg-0 font-bold">Past Reads</h1>
        </HDiv>
      )}

      {route === "time" && (
        <h3 className="p-2 rounded-lg bg-white italic text-rbp-700 font-bold px-4">
          {routeToTitle(route)}
        </h3>
      )}

      {route === "setup" && (
        <>
          <BackButton setRoute={setRoute} />
          <Spacer />
          <h3 className="p-2 rounded-lg bg-white italic text-rbp-700 font-bold px-4">
            {routeToTitle(route)}
          </h3>
        </>
      )}
    </HDiv>
  );
}
