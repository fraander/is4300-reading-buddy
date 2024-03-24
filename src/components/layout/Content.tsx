import { pop, push } from "../../model/routing";
import { RouteProps } from "../../types/Route";
import Button from "../utils/Button";
import HDiv from "../utils/HDiv";
import VDiv from "../utils/VDiv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faClock,
  faMarker,
} from "@fortawesome/free-solid-svg-icons";

export default function Content({ route, setRoute }: RouteProps) {
  return (
    <VDiv id="content" className="bg-yellow-50">
      <h1>
        Current Page:{" "}
        <span className="p-1 bg-white font-mono text-red-700 font-semibold">
          {route.page}
        </span>
      </h1>
      <HDiv className="gap-4 my-4">
        {route.page !== "list" ? (
          <Button onClick={() => setRoute(pop())}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
        ) : (
          <>
            <Button onClick={() => setRoute(push("draw"))}>
              <FontAwesomeIcon icon={faMarker} /> Draw
            </Button>
            <Button onClick={() => setRoute(push("time"))}>
              <FontAwesomeIcon icon={faClock} /> Draw
            </Button>
          </>
        )}
      </HDiv>
    </VDiv>
  );
}
