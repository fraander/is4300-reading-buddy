import { useState } from "react";
import "./App.css";
import Content from "./components/layout/Content";
import VDiv from "./components/utils/VDiv";
import Toolbar from "./components/layout/Toolbar";
import { pop } from "./model/routing";
import { RouteOption } from "./types/Route";

function App() {
  const [route, setRoute] = useState<RouteOption>(pop());

  return (
    <VDiv className="h-screen">
      <Toolbar route={route} setRoute={setRoute} />
      <Content route={route} setRoute={setRoute} />
    </VDiv>
  );
}

export default App;
