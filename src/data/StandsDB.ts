import empty from "../assets/images/empty.png";
import FunnyD4C from "../assets/images/FunnyD4C.png";
import Funny from "../assets/images/funny.png";
import D4C from "../assets/images/d4c.png";
import FunnyBack from "../assets/images/amFlag.jpg";
import FunnyAudiInit from "../assets/audio/d4c sound effect.mp3";
import FunnyAudiMain from "../assets/audio/Funny Valentine Theme.mp3";

import KiraKiller from "../assets/images/KiraKillerQeen.png";
import Kira from "../assets/images/kira.png";
import Killer from "../assets/images/killerQueen.png";
import KiraBack from "../assets/images/kiraTiePattern.jpg";
import KiraAudiInit from "../assets/audio/Killer Queen sound.mp3";
import KiraAudiMain from "../assets/audio/Yoshikage Kira's Theme.mp3";

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
  audio: {
    init: string;
    main: string;
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
        color: "#00000000",
      },
    },
    audio: {
      init: "",
      main: "",
    },
  },
  {
    id: 1,
    name: "Funny",
    logo: FunnyD4C,
    maincolor: "#ec33d4ff",
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
      stats: ["A", "A", "C", "A", "A", "A"],
    },
    background: {
      pixi: {
        image: FunnyBack,
      },
      css: {
        color: "#000000",
      },
    },
    audio: {
      init: FunnyAudiInit,
      main: FunnyAudiMain,
    },
  },
  {
    id: 2,
    name: "Kira",
    logo: KiraKiller,
    maincolor: "#ce8d15ff",
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
      stats: ["A", "B", "D", "B", "B", "A"],
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
    audio: {
      init: KiraAudiInit,
      main: KiraAudiMain,
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
