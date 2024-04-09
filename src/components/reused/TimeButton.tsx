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
      <div style={{ display: 'inline-flex', alignItems: 'center' }}>
    <img src="/Book.png" alt="book icon" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
    <span>New Read!</span>
    </div>
    </Button>
  );
}
