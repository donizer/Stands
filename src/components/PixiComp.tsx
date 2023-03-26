import { Stage, Container, Sprite } from "@pixi/react";
import { useEffect, useState } from "react";
import CssVarController from "../Ts/CssVarController";
import MousePos from "../Ts/MousePos";
import { IObjStandMaster } from "../data/StandsDB";

export const PixiComp = (props: {
  standIndex: number;
  setStand: (num: number) => void;
  currStand: IObjStandMaster;
}) => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    heigth: 0,
  });
  const [gyroProp, setGyroProp] = useState({
    b: 0,
    g: 0,
  });

  useEffect(() => {
    setDimensions({
      width: document.body.clientWidth,
      heigth: document.body.clientHeight,
    });
  }, [document.body.clientWidth, document.body.clientHeight]);

  useEffect(() => {
    let mainColor = new CssVarController("--mainColor");
    let bgImage = new CssVarController("--bgImage");
    let bgScale = new CssVarController("--bgScale");
    mainColor.set(props.currStand.maincolor);
    bgImage.set(props.currStand.background.css?.color);
    bgScale.set(props.currStand.background.css?.scale);
  }, [props.currStand.stand]);

  useEffect(() => {
    window.addEventListener(
      "deviceorientation",
      (e) => {
        if (e.beta && e.gamma != null) {
          setGyroProp({
            b: ((e.beta - 45) / 90) * 100,
            g: e.gamma,
          });
        }
      },
      true
    );
  });

  return (
    <Stage
      key={0}
      id="canvas"
      width={dimensions.width}
      height={dimensions.heigth}
      options={{
        backgroundAlpha: 0,
        antialias: true,
      }}
    >
      <Sprite
        image={props.currStand.background.pixi?.image}
        scale={dimensions.width / 5000}
        x={dimensions.width / 1.5}
        y={dimensions.heigth / 2.2}
        anchor={0.5}
      />
      <Container>
        <Sprite
          scale={dimensions.heigth / 1200}
          image={props.currStand.master?.image}
          x={
            dimensions.width / props.currStand.master!.pos.x +
            MousePos().x / 12 +
            gyroProp.g
          } //
          y={
            dimensions.heigth / props.currStand.master!.pos.y +
            MousePos().y / 12 +
            gyroProp.b
          } //
          anchor={0.5}
        />
        <Sprite
          scale={dimensions.heigth / 1200}
          image={props.currStand.stand?.image}
          x={
            dimensions.width / props.currStand.stand!.pos.x +
            MousePos().x / 9 +
            gyroProp.g
          } //
          y={
            dimensions.heigth / props.currStand.stand!.pos.y +
            MousePos().y / 9 +
            gyroProp.b
          } //
          anchor={0.5}
        />
      </Container>
    </Stage>
  );
};
