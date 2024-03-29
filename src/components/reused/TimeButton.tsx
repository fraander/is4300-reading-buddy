import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { push } from "../../model/routing";
import { RouteOption, SetRoute } from "../../types/Route";
import Button from "../utils/Button";

interface Props {
  destination: RouteOption;
}

export default function TimeButton({
  setRoute,
  destination,
}: SetRoute & Props) {
  return (
    <Button
      className="text-rbp-500"
      onClick={() => setRoute(push(destination))}
    >
      <FontAwesomeIcon icon={faBook} /> New Read!
    </Button>
  );
}
