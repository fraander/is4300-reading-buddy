import { useState } from "react";
import "./App.css";
import Content from "./components/layout/Content";
import VDiv from "./components/utils/VDiv";
import Toolbar from "./components/layout/Toolbar";
import { pop } from "./model/routing";
import { Route } from "./types/Route";

function App() {
  const [route, setRoute] = useState<Route>(pop());

  return (
    <VDiv className="h-screen">
      <Toolbar />
      <Content route={route} setRoute={setRoute} />
    </VDiv>
  );
}

export default App;
