import { useState } from "react";
import { PixiComp } from "./components/PixiComp";
import "./scss/App.scss";
import Layout from "./components/Layout";
import StandsDB from "./data/StandsDB";


function App() {
  const [currStand, setCurrStand] = useState(0);
  return (
    <>
      <PixiComp
        standIndex={currStand}
        setStand={setCurrStand}
        currStand={StandsDB[currStand]}
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
