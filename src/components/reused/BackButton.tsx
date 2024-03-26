import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SetRoute } from "../../types/Route";
import Button from "../utils/Button";
import { pop } from "../../model/routing";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function BackButton({ setRoute }: SetRoute) {
  return (
    <Button onClick={() => setRoute(pop())}>
      <FontAwesomeIcon icon={faArrowLeft} /> Back
    </Button>
  );
}
