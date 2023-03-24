import { useState } from "react";
import { PixiComp } from "./PixiComp";
import "./App.scss";
import Layout from "./Layout";
import StandsDB from "./StandsDB";

function App() {
  const [currStand, setCurrStand] = useState(0);
  return (
    <>
      <PixiComp
        currStand={currStand}
        setStand={setCurrStand}
        stand={StandsDB[currStand]}
      />
      <Layout
        currStand={currStand}
        setStand={setCurrStand}
        stand={StandsDB[currStand]}
      />
    </>
  );
}

export default App;
