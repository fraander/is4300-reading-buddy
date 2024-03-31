import HDiv from "../utils/HDiv";
import { RouteProps, routeToTitle } from "../../types/Route";
import BackButton from "../reused/BackButton";
import Spacer from "../utils/Spacer";
import TimeButton from "../reused/TimeButton";

export default function Toolbar({ route, setRoute }: RouteProps) {
  return (
    <HDiv id="toolbar" className="h-1/6 bg-rbg-700 p-6 shadow-md z-10">
      {route === "list" && (
        <HDiv>
          <h1 className="text-xl text-white italic font-bold">Past Reads</h1>
          <Spacer />
          <TimeButton setRoute={setRoute} destination="setup" />
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
          <h3 className=" text-white text-xl italic font-bold">
            {routeToTitle(route)}
          </h3>
        </>
      )}
    </HDiv>
  );
}
