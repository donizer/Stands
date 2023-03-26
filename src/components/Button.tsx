import "../scss/Button.scss";
import { IObjStandMaster } from "../data/StandsDB";

export default function Button(props: {
  currStand: number;
  setStand: (num: number) => void;
  stand: IObjStandMaster;
  handleClick: () => void;
}) {
  return (
    <>
      <button
        onClick={(e) => {
          props.setStand(props.stand.id);
          console.log(`current state is: ${props.stand.id}`);
          props.handleClick();
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = props.stand.maincolor;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "var(--mainColor)";
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
