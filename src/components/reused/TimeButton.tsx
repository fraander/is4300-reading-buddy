import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { push } from "../../model/routing";
import { SetRoute } from "../../types/Route";
import Button from "../utils/Button";

export default function TimeButton({ setRoute }: SetRoute) {
  return (
    <Button className="text-purple-600" onClick={() => setRoute(push("time"))}>
      <FontAwesomeIcon icon={faClock} /> Time
    </Button>
  );
}
