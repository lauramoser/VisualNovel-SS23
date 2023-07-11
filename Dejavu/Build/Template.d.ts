declare namespace Dejavu {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        partnerInCrimeName: string;
        lifepoints: number;
        lovepoints: number;
    };
    function handleFlower(): void;
    let transitions: {
        blinkOpen: {
            duration: number;
            alpha: string;
            edge: number;
        };
        blinkClose: {
            duration: number;
            alpha: string;
            edge: number;
        };
        hearts: {
            duration: number;
            alpha: string;
            edge: number;
        };
        swirl: {
            duration: number;
            alpha: string;
            edge: number;
        };
        pzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    function slideToSide(_startPos: number, _endPos: number): ƒS.AnimationDefinition;
    function slideIn(): ƒS.AnimationDefinition;
    let sounds: {
        packing: string;
        circus: string;
        dejavu: string;
        crowdTalking: string;
        divineroom: string;
        badEnding: string;
        decision: string;
        goodEnding: string;
        cafePouring: string;
        fallingDown: string;
        phoneRinging: string;
        phoneCalling: string;
        phoneMessage: string;
        rosiLaughing: string;
        divineLaughing: string;
        RosaliaScreaming: string;
        wheeze: string;
    };
    let locations: {
        Black: {
            name: string;
            background: string;
        };
        Uni: {
            name: string;
            background: string;
        };
        Hallway: {
            name: string;
            background: string;
        };
        livingroom: {
            name: string;
            background: string;
        };
        Bedroom: {
            name: string;
            background: string;
        };
        BedroomDiary: {
            name: string;
            background: string;
        };
        BedroomDiaryIntro: {
            name: string;
            background: string;
        };
        Flowergarden: {
            name: string;
            background: string;
        };
        FlowergardenDiary: {
            name: string;
            background: string;
        };
        FlowergardenHandy: {
            name: string;
            background: string;
        };
        CircusNow: {
            name: string;
            background: string;
        };
        CircusDreaming: {
            name: string;
            background: string;
        };
        Kitchen: {
            name: string;
            background: string;
        };
        KitchenClue3: {
            name: string;
            background: string;
        };
        Clownroom: {
            name: string;
            background: string;
        };
        ClownroomCard: {
            name: string;
            background: string;
        };
        MansionDreaming: {
            name: string;
            background: string;
        };
        Divineroom: {
            name: string;
            background: string;
        };
        DivineroomTarot: {
            name: string;
            background: string;
        };
        Graveyard: {
            name: string;
            background: string;
        };
        Psychiatry: {
            name: string;
            background: string;
        };
        FinalDecision: {
            name: string;
            background: string;
        };
        Newspaper: {
            name: string;
            background: string;
        };
        LetterRosi: {
            name: string;
            background: string;
        };
    };
    let characters: {
        Narrator: {
            name: string;
        };
        Mom: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                smiling: string;
            };
        };
        PIC: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                havingAnIdea: string;
                normal: string;
                sad: string;
                unsure: string;
            };
        };
        Rosalia: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                angry: string;
                dancing: string;
                thinking: string;
                training_confident: string;
                traning_sad: string;
            };
        };
        Clown: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                knwowing: string;
                schelmisch: string;
                thinking: string;
            };
        };
        Diviner: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                crazy: string;
                normal: string;
                trance: string;
            };
        };
        Director: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                smiling: string;
                unknown: string;
            };
        };
        Julius: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
            };
        };
        RosaliasMother: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
            };
        };
    };
}
declare namespace Dejavu {
    function clueOne(): ƒS.SceneReturn;
}
declare namespace Dejavu {
    function home(): ƒS.SceneReturn;
}
declare namespace Dejavu {
    function arrivingAtHome(): ƒS.SceneReturn;
}
declare namespace Dejavu {
    function firstMorning(): ƒS.SceneReturn;
}
declare namespace Dejavu {
    function meetingPIC(): ƒS.SceneReturn;
}
declare namespace Dejavu {
    function clueThree(): ƒS.SceneReturn;
}
declare namespace Dejavu {
    function decisiveDream(): ƒS.SceneReturn;
}
declare namespace Dejavu {
    function makingPlan(): ƒS.SceneReturn;
}
declare namespace Dejavu {
    function neutralEnding(): ƒS.SceneReturn;
}
declare namespace Dejavu {
    function wakingUp(): ƒS.SceneReturn;
}
declare namespace Dejavu {
    function arrivingCircus(): ƒS.SceneReturn;
}
declare namespace Dejavu {
    function finalDecision(): ƒS.SceneReturn;
}
declare namespace Dejavu {
    function clownFirst(): ƒS.SceneReturn;
}
declare namespace Dejavu {
    function clownSeconde(): ƒS.SceneReturn;
}
declare namespace Dejavu {
    function directorFirst(): ƒS.SceneReturn;
}
declare namespace Dejavu {
    function directorSeconde(): ƒS.SceneReturn;
}
declare namespace Dejavu {
    function divineFirst(): ƒS.SceneReturn;
}
declare namespace Dejavu {
    function divineSeconde(): ƒS.SceneReturn;
}
declare namespace Dejavu {
    function badEnding(): ƒS.SceneReturn;
}
declare namespace Dejavu {
    function goodEnding(): ƒS.SceneReturn;
}
declare namespace Dejavu {
    function end(): ƒS.SceneReturn;
}
