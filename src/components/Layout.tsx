import "../scss/Layout.scss";
import Button from "./Button";
import StandsDB, { IObjStandMaster } from "../data/StandsDB";
import SVGAElement from "../components/SVGComponent";

function Layout(props: {
  currStand: number;
  setStand: (num: number) => void;
  stand: IObjStandMaster;
}) {
  return (
    <div className="wrapper">
      <header>
        <nav>
          {StandsDB.slice(1).map((i) => {
            return (
              <Button
                key={i.id}
                currStand={props.currStand}
                setStand={props.setStand}
                stand={i}
              />
            );
          })}
        </nav>
      </header>
      <main>
        <div className="svgFlexContainer">
          <SVGAElement objStandMaster={props.stand} />
        </div>
      </main>
    </div>
  );
}

export default Layout;
