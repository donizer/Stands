import empty from "../assets/images/empty.png";
import FunnyD4C from "../assets/images/FunnyD4C.png";
import Funny from "../assets/images/funny.png";
import D4C from "../assets/images/d4c.png";
import FunnyBack from "../assets/images/amFlag.jpg";
import KiraKiller from "../assets/images/KiraKillerQeen.png";
import Kira from "../assets/images/kira.png";
import Killer from "../assets/images/killerQueen.png";
import KiraBack from "../assets/images/kiraTiePattern.jpg";

export interface isStand {
  id: number;
  name?: string;
  logo?: string;
  master?: {
    image: string;
    pos: {
      x: number;
      y: number;
    };
  };
  stand?: {
    image: string;
    pos: {
      x: number;
      y: number;
    };
  };
  backgroundPixi?: string;
  backgroundCSS?: {
    image: string;
    scale: string;
  };
}

const StandsDB: isStand[] = [
  {
    id: 0,
    name: "",
    logo: empty,
  },
  {
    id: 1,
    name: "Funny",
    logo: FunnyD4C,
    master: {
      image: Funny,
      pos: {
        x: 1.6,
        y: 2,
      },
    },
    stand: {
      image: D4C,
      pos: {
        x: 1.35,
        y: 2,
      },
    },
    backgroundPixi: FunnyBack,
  },
  {
    id: 2,
    name: "Kira",
    logo: KiraKiller,
    master: {
      image: Kira,
      pos: {
        x: 1.4,
        y: 2,
      },
    },
    stand: {
      image: Killer,
      pos: {
        x: 1.6,
        y: 2,
      },
    },
    backgroundCSS: {
      image: `url(${KiraBack})`,
      scale: "20%",
    },
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
  if (StandsDB[i].backgroundPixi === undefined) {
    StandsDB[i].backgroundPixi = empty;
  }
  if (StandsDB[i].backgroundCSS === undefined) {
    StandsDB[i].backgroundCSS = {
      image: "",
      scale: "",
    };
  }
  console.log(typeof StandsDB[i].master);
  if (StandsDB[i].master?.image === undefined) {
    StandsDB[i].master = {
      image: empty,
      pos: {
        x: 0,
        y: 0,
      },
    };
  }
  if (StandsDB[i].stand === undefined) {
    StandsDB[i].stand = {
      image: empty,
      pos: {
        x: 0,
        y: 0,
      },
    };
  }
  StandsDB[i].id = i;

  console.log(StandsDB[i].backgroundCSS);
  // console.log(StandsDB[i].backgroundPixi, StandsDB[i].id);
}

export default StandsDB;
