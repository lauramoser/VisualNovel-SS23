namespace Dejavu {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let dataForSave = {
    partnerInCrimeName: "",
    lifepoints: 0,
    lovepoints: 0,
  };

  //Flower Image
  export function handleFlower() {
    let flower: HTMLImageElement = <HTMLImageElement>(
      document.getElementById("flowerImg")
    );
    if (dataForSave.lifepoints <= 0) {
      flower.src = "./Images/Flower/Knospe.png";
    }
    if (dataForSave.lifepoints == 10) {
      flower.src = "./Images/Flower/Blume_1.png";
    }
    if (dataForSave.lifepoints == 20) {
      flower.src = "./Images/Flower/Blume_2.png";
    }
    if (dataForSave.lifepoints == 30) {
      flower.src = "./Images/Flower/Blume_3.png";
    }
    if (dataForSave.lifepoints == 40) {
      flower.src = "./Images/Flower/Blume_4.png";
    }
    if (dataForSave.lifepoints == 50) {
      flower.src = "./Images/Flower/Blume_5.png";
    }
    if (dataForSave.lifepoints == 60) {
      flower.src = "./Images/Flower/Blume_6.png";
    }
    if (dataForSave.lifepoints == 70) {
      flower.src = "./Images/Flower/Blume_7.png";
    }
    if (dataForSave.lifepoints == 80) {
      flower.src = "./Images/Flower/Blume_8.png";
    }
    if (dataForSave.lifepoints == 90) {
      flower.src = "./Images/Flower/Blume_9.png";
    }
    if (dataForSave.lifepoints == 100) {
      flower.src = "./Images/Flower/Blume_10.png";
    }
  }

  //Transitions
  export let transitions = {
    blinkOpen: {
      duration: 2,
      alpha: "./Images/Transitions/blink.jpg",
      edge: 0.5,
    },
    blinkClose: {
      duration: 2,
      alpha: "./Images/Transitions/blinkReverse.jpg",
      edge: 0.5,
    },
    hearts: {
      duration: 1.5,
      alpha: "./Images/Transitions/hearts.jpg",
      edge: 0.5,
    },
    swirl: {
      duration: 2,
      alpha: "./Images/Transitions/009.jpg",
      edge: 1,
    },
    pzzle: {
      duration: 1.5,
      alpha: "./Images/Transitions/puzz.png",
      edge: 0.5,
    },
  };

  //Animations
  export function slideToSide(
    _startPos: number,
    _endPos: number
  ): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positionPercent(_startPos, 90),
        color: ƒS.Color.CSS("white", 1),
      },
      end: {
        translation: ƒS.positionPercent(_endPos, 90),
        color: ƒS.Color.CSS("white", 1),
      },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  export function slideIn(): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positionPercent(0, 90),
        color: ƒS.Color.CSS("white", 1),
      },
      end: {
        translation: ƒS.positionPercent(50, 90),
        color: ƒS.Color.CSS("white", 1),
      },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  //Sounds
  export let sounds = {
    //background Music
    packing: "./Audio/boxes.mp3",
    circus: "./Audio/circus-11794.mp3",
    dejavu: "./Audio/ambient-dream-16671.mp3",
    crowdTalking: "./Audio/crowd-talking-138493.mp3",
    divineroom: "./Audio/magical-background-6892.mp3",
    badEnding: "./Audio/evil-cue-111895.mp3",
    decision: "./Audio/quiz-game-music-loop-bpm-90-61070.mp3",
    goodEnding: "./Audio/motivational-corporate-medium1-110677.mp3",

    //sounds
    cafePouring: "./Audio/pouring-coffee-6743.mp3",
    fallingDown: "./Audio/person-knocked-down-14798.mp3",
    phoneRinging: "./Audio/smartphone_vibrating_alarm_silent-7040.mp3",
    phoneCalling: "./Audio/phone-calling-153844.mp3",
    phoneMessage: "./Audio/notifications-sound-127856.mp3",

    //voices
    rosiLaughing: "./Audio/womenLaughing.mp3",
    divineLaughing: "./Audio/wichtlaughing.mp3",
    RosaliaScreaming: "./Audio/loud-female-scream-41894.mp3",
    wheeze: "./Audio/huff-and-puff-63816.mp3",
  };

  //Location
  export let locations = {
    Black: {
      name: "Black",
      background: "./Images/Backgrounds/black.png",
    },
    Uni: {
      name: "Uni",
      background: "./Images/Backgrounds/Uni.png",
    },
    Hallway: {
      name: "Hallway",
      background: "./Images/Backgrounds/Hallway.png",
    },
    livingroom: {
      name: "Livingroom",
      background: "./Images/Backgrounds/Livingroom.png",
    },
    Bedroom: {
      name: "Bedroom",
      background: "./Images/Backgrounds/Bedroom.png",
    },
    BedroomDiary: {
      name: "Bedroom with Diary",
      background: "./Images/Backgrounds/Bedroom_Diary.png",
    },
    BedroomDiaryIntro: {
      name: "Bedroom with Diary Introduction",
      background: "./Images/Backgrounds/Bedroom_Intro.png",
    },
    Flowergarden: {
      name: "Flowergarden",
      background: "./Images/Backgrounds/Flowergarden.png",
    },
    FlowergardenDiary: {
      name: "Flowergarden with Diary Vanishing",
      background: "./Images/Backgrounds/Flowergarden_Diary.png",
    },
    FlowergardenHandy: {
      name: "Flowergarden with Handy",
      background: "./Images/Backgrounds/Flowergarden_Handy.png",
    },
    CircusNow: {
      name: "CircusToday",
      background: "./Images/Backgrounds/CircusToday.png",
    },
    CircusDreaming: {
      name: "CircusDreaming",
      background: "./Images/Backgrounds/CircusDreaming.png",
    },
    Kitchen: {
      name: "Kitchen",
      background: "./Images/Backgrounds/Kitchen.png",
    },
    KitchenClue3: {
      name: "KitchenClue3",
      background: "./Images/Backgrounds/Kitchen_Clue3.png",
    },
    Clownroom: {
      name: "Clown Room",
      background: "./Images/Backgrounds/Clownroom.png",
    },
    ClownroomCard: {
      name: "Clown Room with Card",
      background: "./Images/Backgrounds/Clownroom_Card.png",
    },
    MansionDreaming: {
      name: "MansionDreaming",
      background: "./Images/Backgrounds/MansionDreaming.png",
    },
    Divineroom: {
      name: "Divine Room",
      background: "./Images/Backgrounds/Divineroom.png",
    },
    DivineroomTarot: {
      name: "Divineroom Tarot",
      background: "./Images/Backgrounds/DivineroomTarot.png",
    },
    Graveyard: {
      name: "Graveyard",
      background: "./Images/Backgrounds/Graveyard.png",
    },
    Psychiatry: {
      name: "Psychiatry",
      background: "./Images/Backgrounds/Psychatrie.png",
    },
    FinalDecision: {
      name: "Night",
      background: "./Images/Backgrounds/FinalDecision.png",
    },
    Newspaper: {
      name: "Newspaper Bad Ending",
      background: "./Images/Backgrounds/Newspaper.png",
    },
    LetterRosi: {
      name: "Diary Rosi",
      background: "./Images/Backgrounds/LetterRosiEnding.png",
    },
  };

  //Characters
  export let characters = {
    Narrator: {
      name: "",
    },

    Mom: {
      name: "Mama",
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
          "./Images/Characters/PartnerInCrime/PartnerInCrime_idea.png",
        normal:
          "./Images/Characters/PartnerInCrime/PartnerInCrime_normal.png",
        sad: "./Images/Characters/PartnerInCrime/PartnerInCrime_sad.png",
        unsure:
          "./Images/Characters/PartnerInCrime/PartnerInCrime_unischer.png",
      },
    },
    Rosalia: {
      name: "Rosalia",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Characters/Rosalia/Rosalia_normal.png",
        angry: "./Images/Characters/Rosalia/Rosalia_angry.png",
        dancing: "./Images/Characters/Rosalia/Rosalia_dancing.png",
        thinking: "./Images/Characters/Rosalia/Rosalia_thinking.png",
        training_confident:
          "./Images/Characters/Rosalia/Rosalia_Training_confident.png",
        traning_sad:
          "./Images/Characters/Rosalia/Rosalia_Training_sad.png",
      },
    },
    Clown: {
      name: "Clown",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        knwowing: "./Images/Characters/Clown/Clown_knowing.png",
        schelmisch: "./Images/Characters/Clown/Clown_schelmisch.png",
        thinking: "./Images/Characters/Clown/Clown_thinking.png",
      },
    },
    Diviner: {
      name: "Wahrsagerin",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        crazy: "./Images/Characters/Diviner/Wahrsagerin_crazy.png",
        normal: "./Images/Characters/Diviner/Wahrsagerin_normal.png",
        trance: "./Images/Characters/Diviner/Wahrsagerin_trance.png",
      },
    },
    Director: {
      name: "Zirkus Direktor",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./Images/Characters/Director/Direktor_angry.png",
        smiling: "./Images/Characters/Director/Direktor_smiling.png",
        unknown: "./Images/Characters/Director/Direktor_unwissend.png",
      },
    },
    Julius: {
      name: "Julius",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./Images/Characters/Julius/Julius_angry.png",
      },
    },
    RosaliasMother: {
      name: "Rosalias Mutter",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry:
          "./Images/Characters/RosaliasMother/RosaliasMother_angry.png",
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
      {
        scene: firstMorning,
        id: "FirstMorning",
        name: "Arriving and Finding Diary",
      },
      {
        scene: arrivingAtHome,
        id: "ArrivingAtHome",
        name: "Back from the Flowergarden",
      },
      { scene: meetingPIC, id: "MeetingPIC", name: "Meeting your PIC" },
      //Act three
      { scene: decisiveDream, id: "DecisiveDream", name: "The Crucial Dream" },
      { scene: wakingUp, id: "WakingUp", name: "Deciding what to do" },
      {
        scene: makingPlan,
        id: "MakingPlan",
        name: "How to find out what happened?",
      },
      //Act four
      {
        scene: arrivingCircus,
        id: "ArrivingCircus",
        name: "Deciding who to ask first",
      },
      {
        scene: directorFirst,
        id: "DirectorFirst",
        name: "Asking Director first",
      },
      { scene: clownFirst, id: "ClownFirst", name: "Asking Divine first" },
      { scene: divineFirst, id: "DivineFirst", name: "Asking Clown first" },
      {
        scene: directorSeconde,
        id: "DirectorSeconde",
        name: "Asking Director seconde",
      },
      {
        scene: clownSeconde,
        id: "ClownSeconde",
        name: "Asking Divine seconde",
      },
      {
        scene: divineSeconde,
        id: "DivineSeconde",
        name: "Asking Clown seconde",
      },
      {
        scene: finalDecision,
        id: "FinalDecision",
        name: "Deciding what happened",
      },
      //Clues
      {
        scene: clueOne,
        id: "ClueOne",
        name: "big fight with Rosalia and her Mother",
      },
      { scene: clueThree, id: "ClueThree", name: "threatening letter" },
      //Endings
      { scene: badEnding, id: "BadEnding", name: "bad Ending" },
      { scene: neutralEnding, id: "NeutralEnding", name: "neutral Ending" },
      { scene: goodEnding, id: "GoodEnding", name: "good Ending" },

      { scene: end, id: "End", name: "the end" },
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
