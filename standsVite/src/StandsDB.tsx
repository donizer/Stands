import FunnyD4C from "./assets/images/FunnyD4C.png";
import Funny from "./assets/images/funny.png";
import D4C from "./assets/images/d4c.png";

export interface isStand {
  id: number;
  name?: string;
  logo?: string;
  master?: string;
  stand?: string;
}

const StandsDB: isStand[] = [
  {
    id: 0,
    name: "",
  },
  {
    id: 1,
    name: "Funny",
    logo: FunnyD4C,
    master: Funny,
    stand: D4C,
  },
  {
    id: 2,
    name: "Kira",
  },
  {
    id: 3,
    name: "DIO",
  },
  {
    id: 4,
    name: "Jotaro",
  },
  {
    id: 5,
    name: "Yasuho",
  },
  {
    id: 1,
    name: "Funny",
    logo: FunnyD4C,
  },
  {
    id: 2,
    name: "Kira",
  },
  {
    id: 3,
    name: "DIO",
  },
  {
    id: 4,
    name: "Jotaro",
  },
  {
    id: 5,
    name: "Yasuho",
  },
];

for (let i = 0; i < StandsDB.length; i++) {
  StandsDB[i].id = i;
}

export default StandsDB;
