import { Stage, Container, Sprite, Text, Graphics } from "@pixi/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import amFlag from "./assets/images/amFlag.jpg";
import funny from "./assets/images/funny.png";
import d4c from "./assets/images/d4c.png";
import MousePos from "./MousePos";
import { isStand } from "./StandsDB";

export const PixiComp = (props: {
  currStand: number;
  setStand: (num: number) => void;
  stand: isStand;
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, heigth: 0 });

  useEffect(() => {
    setDimensions({
      width: document.body.clientWidth,
      heigth: document.body.clientHeight,
    });
  }, [document.body.clientWidth, document.body.clientHeight]);

  // console.log(dimensions.heigth / 1000);

  return (
    <Stage
      key={0}
      id="canvas"
      width={dimensions.width}
      height={dimensions.heigth}
      options={{ backgroundColor: 0x000000 }}
    >
      <Sprite
        image={amFlag}
        scale={0.3}
        x={dimensions.width / 1.5}
        y={dimensions.heigth / 2.2}
        anchor={0.5}
      />
      <Container>
        <Sprite
          scale={dimensions.heigth / 1300}
          image={funny}
          x={dimensions.width / 1.6 + MousePos().x / 12} //
          y={dimensions.heigth / 2 + MousePos().y / 12} //
          anchor={0.5}
        />
        <Sprite
          scale={dimensions.heigth / 1300}
          image={d4c}
          x={dimensions.width / 1.35 + MousePos().x / 9} //
          y={dimensions.heigth / 2 + MousePos().y / 9} //
          anchor={0.5}
        />
      </Container>
    </Stage>
  );
};
