namespace Dejavu {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let dataForSave = {
    partnerInCrimeName: "",
    lifepoints: 0,
    lovepoints: 0,
  };

  //Transitions
  export let transitions = {
    blinkOpen: {
      duration: 2,
      alpha: "/Dejavu/Images/Transitions/blink.jpg",
      edge: 0.5,
    },
    blinkClose: {
      duration: 1,
      alpha: "/Dejavu/Images/Transitions/blinkReverse.jpg",
      edge: 1,
    },
    hearts: {
      duration: 1.5,
      alpha: "/Dejavu/Images/Transitions/hearts.jpg",
      edge: 0.5,
    },
    swirl: {
      duration: 2,
      alpha: "/Dejavu/Images/Transitions/009.jpg",
      edge: 1,
    },
  };

  //Animations
  export function slideToSide(
    _startPos: number,
    _endPos: number
  ): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positionPercent(_startPos, 100),
        color: ƒS.Color.CSS("white", 1),
      },
      end: {
        translation: ƒS.positionPercent(_endPos, 100),
        color: ƒS.Color.CSS("white", 1),
      },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  export function rightFade(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft, color: ƒS.Color.CSS("", 1) },
      end: { translation: ƒS.positions.bottomright, color: ƒS.Color.CSS("", 0) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  //Sounds
  export let sounds = {
    //background Music

    packing: "/Dejavu/Audio/boxes.mp3",
    circus: "/Dejavu/Audio/circus-11794.mp3",
    dejavu: "/Dejavu/Audio/dreamMusic.mp3",

    //sounds
    cafePouring: "/Dejavu/Audio/pouring-coffee-6743.mp3",

    //voices
    rosiLaughing: "/Dejavu/Audio/womenLaughing.mp3",
    rosiWow: "/Dejavu/Audio/Wow.mp3",
    divineLaughing: "/Dejavu/Audio/wichtlaughing.mp3",
    RosaliaScreaming: "/Dejavu/Audio/loud-female-scream-41894.mp3",
  };

  //Location
  export let locations = {
    Black: {
      name: "Black",
      background: "/Dejavu/Images/Backgrounds/black.png",
    },
    Uni: {
      name: "Uni",
      background: "/Dejavu/Images/Backgrounds/Uni.png",
    },
    Hallway: {
      name: "Hallway",
      background: "/Dejavu/Images/Backgrounds/Hallway.png",
    },
    livingroom: {
      name: "Livingroom",
      background: "/Dejavu/Images/Backgrounds/Livingroom.png",
    },
    Bedroom: {
      name: "Bedroom",
      background: "/Dejavu/Images/Backgrounds/Bedroom.png",
    },
    BedroomDiary: {
      name: "Bedroom with Diary",
      background: "/Dejavu/Images/Backgrounds/Bedroom_Diary.png",
    },
    BedroomDiaryIntro: {
      name: "Bedroom with Diary Introduction",
      background: "/Dejavu/Images/Backgrounds/Bedroom_Intro.png",
    },
    Flowergarden: {
      name: "Flowergarden",
      background: "/Dejavu/Images/Backgrounds/Flowergarden.png",
    },
    FlowergardenDiary: {
      name: "Flowergarden with Diary Vanishing",
      background: "/Dejavu/Images/Backgrounds/Flowergarden_Diary.png",
    },
    FlowergardenHandy: {
      name: "Flowergarden with Handy",
      background: "/Dejavu/Images/Backgrounds/Flowergarden_Handy.png",
    },
    CircusNow: {
      name: "CircusToday",
      background: "/Dejavu/Images/Backgrounds/CircusToday.png",
    },
    CircusDreaming: {
      name: "CircusDreaming",
      background: "/Dejavu/Images/Backgrounds/CircusDreaming.png",
    },
    Kitchen: {
      name: "Kitchen",
      background: "/Dejavu/Images/Backgrounds/Kitchen.png",
    },
    Clownroom: {
      name: "Clown Room",
      background: "/Dejavu/Images/Backgrounds/Clownroom.png",
    },
    MansionDreaming: {
      name: "MansionDreaming",
      background: "/Dejavu/Images/Backgrounds/MansionDreaming.png",
    },
  };

  //Characters
  export let characters = {
    Narrator: {
      name: "",
    },

    Mom: {
      name: "Mom",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        smiling: "Images/Characters/Mom/Mom_smiling.png",
      },
    },
    // PartnerInCrime
    PIC: {
      name: "",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        havingAnIdea:
          "/Dejavu/Images/Characters/PartnerInCrime/PartnerInCrime_idea.png",
        normal:
          "/Dejavu/Images/Characters/PartnerInCrime/PartnerInCrime_normal.png",
        sad: "/Dejavu/Images/Characters/PartnerInCrime/PartnerInCrime_sad.png",
        unsure:
          "/Dejavu/Images/Characters/PartnerInCrime/PartnerInCrime_unischer.png",
      },
    },
    Rosalia: {
      name: "Rosalia",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "/Dejavu/Images/Characters/Rosalia/Rosalia_normal.png",
        angry: "/Dejavu/Images/Characters/Rosalia/Rosalia_angry.png",
        dancing: "/Dejavu/Images/Characters/Rosalia/Rosalia_dancing.png",
        thinking: "/Dejavu/Images/Characters/Rosalia/Rosalia_thinking.png",
        training_confident:
          "/Dejavu/Images/Characters/Rosalia/Rosalia_Training_confident.png",
        traning_sad:
          "/Dejavu/Images/Characters/Rosalia/Rosalia_Training_sad.png",
      },
    },
    Clown: {
      name: "Clown",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        knwowing: "/Dejavu/Images/Characters/Clown/Clown_knowing.png",
        schelmisch: "/Dejavu/Images/Characters/Clown/Clown_schelmisch.png",
        thinking: "/Dejavu/Images/Characters/Clown/Clown_thinking.png",
      },
    },
    Diviner: {
      name: "Wahrsagerin",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        crazy: "/Dejavu/Images/Characters/Diviner/Wahrsagerin_crazy.png",
        normal: "/Dejavu/Images/Characters/Diviner/Wahrsagerin_normal.png",
        trance: "/Dejavu/Images/Characters/Diviner/Wahrsagerin_trance.png",
      },
    },
    Director: {
      name: "Zirkus Direktor",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "/Dejavu/Images/Characters/Director/Direktor_angry.png",
        smiling: "/Dejavu/Images/Characters/Director/Direktor_smiling.png",
        unknown: "/Dejavu/Images/Characters/Director/Direktor_unwissend.png",
      },
    },
    Julius: {
      name: "Julius",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "/Dejavu/Images/Characters/Director/Direktor_angry.png",
      },
    },
    RosaliasMother: {
      name: "Rosalias Mother",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "/Dejavu/Images/Characters/Director/Direktor_angry.png",
      },
    },
  };

  //InGameMenu
  let inGameMenuButtons = {
    save: "Save",
    load: "Load",
    volumeDown: "Volume down",
    volumeUp: "Volume up",
    close: "Close",
  };

  let gameMenu: ƒS.Menu;
  let menuIsOpen: boolean = true;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
        break;
      case inGameMenuButtons.volumeDown:
        if (ƒ.AudioManager.default.volume > 0) {
          ƒS.Sound.setMasterVolume(ƒ.AudioManager.default.volume - 0.2);
        }
        break;
      case inGameMenuButtons.volumeUp:
        if (ƒ.AudioManager.default.volume < 3) {
          ƒS.Sound.setMasterVolume(ƒ.AudioManager.default.volume + 0.2);
        }
        break;
      case inGameMenuButtons.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
    }
  }

  //Shortcuts for Menu
  document.addEventListener("keydown", handleKeyPress);
  async function handleKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("saving...");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("loading...");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menuIsOpen) {
          gameMenu.close();
          menuIsOpen = false;
        } else {
          gameMenu.open();
          menuIsOpen = true;
        }
        break;
      case ƒ.KEYBOARD_CODE.I:
        await ƒS.Inventory.open();
        break;
    }
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(
      inGameMenuButtons,
      buttonFunctionalities,
      "inGameMenu"
    );
    buttonFunctionalities("Close");

    let scenes: ƒS.Scenes = [
      // Act one
      { scene: home, name: "Arriving and Finding Diary" },
      //Act two
      { scene: firstMorning, name: "Arriving and Finding Diary" },
      { scene: arrivingAtHome, id: "ArrivingAtHome", name: "Back from the Flowergarden" },
      { scene: meetingPIC, id: "MeetingPIC", name: "Meeting your PIC" },
      //Act three

      //Act four

      //Endings
      { scene: badEnding, id: "BadEnding", name: "bad Ending" },
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
