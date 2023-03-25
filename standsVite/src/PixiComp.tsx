import { Stage, Container, Sprite } from "@pixi/react";
import { useEffect, useState } from "react";
import CssVarController from "./CssVarController";
import MousePos from "./MousePos";
import { isStand } from "./StandsDB";

export const PixiComp = (props: {
  standIndex: number;
  setStand: (num: number) => void;
  currStand: isStand;
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, heigth: 0 });

  useEffect(() => {
    setDimensions({
      width: document.body.clientWidth,
      heigth: document.body.clientHeight,
    });
  }, [document.body.clientWidth, document.body.clientHeight]);

  useEffect(() => {
    let bgImage = new CssVarController("--bgImage");
    let bgScale = new CssVarController("--bgScale");
    bgImage.set(props.currStand.backgroundCSS?.image);
    bgScale.set(props.currStand.backgroundCSS?.scale);
  }, [props.currStand.stand]);

  // console.log(dimensions.heigth / 1000);
  // console.log(dimensions.heigth / 1800)
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
        image={props.currStand.backgroundPixi}
        scale={dimensions.width / 5000}
        x={dimensions.width / 1.5}
        y={dimensions.heigth / 2.2}
        anchor={0.5}
      />
      <Container>
        <Sprite
          scale={dimensions.heigth / 1300}
          image={props.currStand.master?.image}
          x={
            dimensions.width / props.currStand.master!.pos.x + MousePos().x / 12
          } //
          y={
            dimensions.heigth / props.currStand.master!.pos.y +
            MousePos().y / 12
          } //
          anchor={0.5}
        />
        <Sprite
          scale={dimensions.heigth / 1300}
          image={props.currStand.stand?.image}
          x={dimensions.width / props.currStand.stand!.pos.x + MousePos().x / 9} //
          y={
            dimensions.heigth / props.currStand.stand!.pos.y + MousePos().y / 9
          } //
          anchor={0.5}
        />
      </Container>
    </Stage>
  );
};
