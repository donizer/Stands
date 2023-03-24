import * as PIXI from "pixi.js";
import { Stage, Container, Sprite, Text, Graphics } from "@pixi/react";
import { Button, RadioGroup, ScrollBox } from "@pixi/ui";
import { useCallback, useEffect, useMemo, useState } from "react";
import stats from './assets/images/stats.svg';
import amFlag from "./assets/images/amFlag.jpg";
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

  console.log(dimensions.heigth / 1000);

  return (
    <Stage
      id="canvas"
      width={dimensions.width}
      height={dimensions.heigth}
      options={{ backgroundColor: 0x000000 }}
    >
      <Sprite
        image={amFlag}
        scale={0.2}
        x={dimensions.width / 1.5}
        y={dimensions.heigth / 2}
        anchor={0.5}
      />
      <Sprite 
        image={stats}
        x={dimensions.width / 1.5}
        y={dimensions.heigth / 2}
        anchor={0.5}
      />
      <Container>
        <Sprite
          scale={dimensions.heigth / 1200}
          image={funny}
          x={dimensions.width / 1.8 + MousePos().x / 12}
          y={dimensions.heigth / 2 + MousePos().y / 12}
          anchor={0.5}
        />
        <Sprite
          scale={dimensions.heigth / 1200}
          image={d4c}
          x={dimensions.width / 1.4 + MousePos().x / 9}
          y={dimensions.heigth / 2 + MousePos().y / 9}
          anchor={0.5}
        />
      </Container>
    </Stage>
  );
};
