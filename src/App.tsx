import { useState } from "react";
import "./App.css";
import Content from "./components/layout/Content";
import VDiv from "./components/utils/VDiv";
import Toolbar from "./components/layout/Toolbar";
import { pop } from "./model/routing";
import { RouteOption } from "./types/Route";
import { Read } from "./model/reads";

function App() {
  const [route, setRoute] = useState<RouteOption>(pop());
  const [reads, setReads] = useState<Read[]>([]);

  return (
    <VDiv className="h-screen">
      <Toolbar route={route} setRoute={setRoute} />
      <Content route={route} setRoute={setRoute} reads={reads} setReads={setReads} />
    </VDiv>
  );
}

export default App;
