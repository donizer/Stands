import "./scss/Button.scss";
import { isStand } from "../data/StandsDB";

export default function Button(props: {
  currStand: number;
  setStand: (num: number) => void;
  stand: isStand;
}) {
  return (
    <>
      <button
        onClick={(e) => {
          props.setStand(props.stand.id);
          console.log(`current state is: ${props.stand.id}`);
        }}
        className="btn"
      >
        <p key={0} className="name">
          {props.stand.name}
        </p>
        <img key={1} src={props.stand.logo} alt="" className="logo" />
      </button>
    </>
  );
}
