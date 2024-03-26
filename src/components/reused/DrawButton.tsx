import { faMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { push } from "../../model/routing";
import { SetRoute } from "../../types/Route";
import Button from "../utils/Button";

export default function DrawButton({ setRoute }: SetRoute) {
  return (
    <Button onClick={() => setRoute(push("draw"))}>
      <FontAwesomeIcon icon={faMarker} /> Draw
    </Button>
  );
}
