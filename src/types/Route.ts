import { Dispatch, ReactNode, SetStateAction } from "react";

type RouteOption = "list" | "time" | "setup";
type Route = { route: RouteOption };

type SetRoute = { setRoute: Dispatch<SetStateAction<RouteOption>> };

type RouteProps = Route & SetRoute;

function routeToTitle(route: RouteOption): ReactNode {
  switch (route) {
    case "list":
      return "Past Reads";
    case "time":
      return "Currently reading ...";
    case "setup":
      return "Time to read ...";
  }
}

export type { RouteOption, Route, SetRoute, RouteProps };

export { routeToTitle };
