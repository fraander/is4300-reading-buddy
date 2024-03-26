import { Dispatch, ReactNode, SetStateAction } from "react";

type RouteOption = "list" | "draw" | "time";
type Route = { route: RouteOption };

type SetRoute = { setRoute: Dispatch<SetStateAction<RouteOption>> };

type RouteProps = Route & SetRoute;

function routeToTitle(route: RouteOption): ReactNode {
  switch (route) {
    case "list":
      return "Past Reads";
    case "draw":
      return "Reading ...";
    case "time":
      return "Reading ...";
  }
}

export type { RouteOption, Route, SetRoute, RouteProps };

export { routeToTitle };
