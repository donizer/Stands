import "./Layout.scss";
import Button from "./Button";
import StandsDB, { isStand } from "./StandsDB";

function Layout(props: {
  currStand: number;
  setStand: (num: number) => void;
  stand: isStand;
}) {
  return (
    <div className="wrapper">
      <header>
        <nav>
          {StandsDB.slice(1).map((i) => {
            return (
              <Button
                currStand={props.currStand}
                setStand={props.setStand}
                stand={i}
              />
            );
          })}
        </nav>
      </header>
      <main></main>
    </div>
  );
}

export default Layout;
