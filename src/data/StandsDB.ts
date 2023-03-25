import empty from "../assets/images/empty.png";
import FunnyD4C from "../assets/images/FunnyD4C.png";
import Funny from "../assets/images/funny.png";
import D4C from "../assets/images/d4c.png";
import FunnyBack from "../assets/images/amFlag.jpg";
import KiraKiller from "../assets/images/KiraKillerQeen.png";
import Kira from "../assets/images/kira.png";
import Killer from "../assets/images/killerQueen.png";
import KiraBack from "../assets/images/kiraTiePattern.jpg";

export interface IObjStandMaster {
  id: number;
  name: string;
  logo: string;
  maincolor: string;
  master: {
    image: string;
    pos: {
      x: number;
      y: number;
    };
  };
  stand: {
    image: string;
    pos: {
      x: number;
      y: number;
    };
    stats: string[];
  };
  background: {
    pixi: {
      image: string;
    };
    css: {
      color: string;
      scale?: string;
    };
  };
}

const StandsDB: IObjStandMaster[] = [
  {
    id: 0,
    name: "",
    logo: empty,
    maincolor: "",
    master: {
      image: empty,
      pos: {
        x: 1.6,
        y: 2,
      },
    },
    stand: {
      image: empty,
      pos: {
        x: 1.35,
        y: 2,
      },
      stats: [],
    },
    background: {
      pixi: {
        image: empty,
      },
      css: {
        color: "#000000",
      },
    },
  },
  {
    id: 1,
    name: "Funny",
    logo: FunnyD4C,
    maincolor: "#ec33d4",
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
      stats: ["A", "A", "A", "A", "A", "A"],
    },
    background: {
      pixi: {
        image: FunnyBack,
      },
      css: {
        color: "#000000",
      },
    },
  },
  {
    id: 2,
    name: "Kira",
    logo: KiraKiller,
    maincolor: "#ce8d15",
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
      stats: ["C", "B", "D", "E", "D", "B"],
    },
    background: {
      pixi: {
        image: empty,
      },
      css: {
        color: `url(${KiraBack})`,
        scale: "20%",
      },
    },
  },
  // {
  //   id: 3,
  //   name: "DIO",
  // },
  // {
  //   id: 4,
  //   name: "Jotaro",
  // },
  // {
  //   id: 5,
  //   name: "Yasuho",
  // },
];

for (let i = 0; i < StandsDB.length; i++) {
  // if (StandsDB[i].backgroundPixi === undefined) {
  //   StandsDB[i].backgroundPixi = empty;
  // }
  // if (StandsDB[i].backgroundCSS === undefined) {
  //   StandsDB[i].backgroundCSS = {
  //     image: "",
  //     scale: "",
  //   };
  // }
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
      stats: ["A", "A", "A", "A", "A", "A"],
    };
  }
  StandsDB[i].id = i;
}

export default StandsDB;
