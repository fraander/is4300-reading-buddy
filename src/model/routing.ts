import { RouteOption } from "../types/Route";

export function pop(): RouteOption {
  return "list";
}

export function push(page: "draw" | "time"): RouteOption {
  return page;
}
