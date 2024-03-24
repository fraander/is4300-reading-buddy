import { Dispatch, SetStateAction } from "react";

type Page = "list" | "draw" | "time";

type Route = {
  page: Page;
};

type RouteProps = {
  route: Route;
  setRoute: Dispatch<SetStateAction<Route>>;
};

export type { Page, Route, RouteProps };
