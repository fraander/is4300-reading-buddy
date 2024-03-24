import { Route } from "../types/Route";

export function pop(): Route {
  return { page: "list" };
}

export function push(page: "draw" | "time"): Route {
  return { page: page };
}
