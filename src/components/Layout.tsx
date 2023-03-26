import "../scss/Layout.scss";
import Button from "./Button";
import StandsDB, { IObjStandMaster } from "../data/StandsDB";
import SVGAElement from "../components/SVGComponent";

function Layout(props: {
  currStand: number;
  setStand: (num: number) => void;
  stand: IObjStandMaster;
}) {
  function handleBrgrClick() {
    document.getElementById("brgr-btn")!.classList.toggle("active");
    document.getElementById("nav")!.classList.toggle("active");
  }

  return (
    <div className="wrapper">
      <header>
        <nav id="nav">
          {StandsDB.slice(1).map((i) => {
            return (
              <Button
                key={i.id}
                currStand={props.currStand}
                setStand={props.setStand}
                stand={i}
                handleClick={handleBrgrClick}
              />
            );
          })}
        </nav>
        <button
          id="brgr-btn"
          onClick={(e) => {
            handleBrgrClick();
          }}
          className="nav-btn"
        ></button>
      </header>
      <main>
        <audio
          onEnded={(e) => {
            e.currentTarget.src = props.stand.audio.main;
          }}
          src={props.stand.audio.init}
          autoPlay
        ></audio>
        <div className="svgFlexContainer">
          <SVGAElement objStandMaster={props.stand} />
        </div>
      </main>
    </div>
  );
}

export default Layout;
