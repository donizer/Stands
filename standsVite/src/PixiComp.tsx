import * as PIXI from "pixi.js";
import { Stage, Container, Sprite, Text, Graphics } from "@pixi/react";
import { Button, ScrollBox } from "@pixi/ui";
import { useCallback, useEffect, useMemo, useState } from "react";
import funny from "./assets/images/funny.png";
import d4c from "./assets/images/d4c.png";
import MousePos from "./MousePos";

export const PixiComp = () => {
  const [dimensions, setDimensions] = useState({ width: 0, heigth: 0 });
  const blurFilter = useMemo(() => new PIXI.BlurFilter(4), []);

  useEffect(() => {
    setDimensions({
      width: document.body.clientWidth,
      heigth: document.body.clientHeight,
    });
  }, [document.body.clientWidth, document.body.clientHeight]);

  console.log(Sprite);

  return (
    <Stage
      id="canvas"
      width={dimensions.width}
      height={dimensions.heigth}
      // options={{ backgroundColor: 0xeef1f5 }}
    >
      <Sprite
        scale={0.8}
        image={funny}
        x={dimensions.width / 1.8 + MousePos().x / 12}
        y={dimensions.heigth / 2 + MousePos().y / 12}
        anchor={0.5}
      />
      <Sprite
        scale={0.8}
        image={d4c}
        x={dimensions.width / 1.4 + MousePos().x / 9}
        y={dimensions.heigth / 2 + MousePos().y / 9}
        anchor={0.5}
      />
    </Stage>
  );
};
