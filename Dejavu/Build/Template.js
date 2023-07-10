"use strict";
var Dejavu;
(function (Dejavu) {
    Dejavu.ƒ = FudgeCore;
    Dejavu.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Dejavu.dataForSave = {
        partnerInCrimeName: "",
        lifepoints: 0,
        lovepoints: 0,
    };
    //Transitions
    Dejavu.transitions = {
        blinkOpen: {
            duration: 2,
            alpha: "/Dejavu/Images/Transitions/blink.jpg",
            edge: 0.5,
        },
        blinkClose: {
            duration: 2,
            alpha: "/Dejavu/Images/Transitions/blinkReverse.jpg",
            edge: 0.5,
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
        pzzle: {
            duration: 3,
            alpha: "/Dejavu/Images/Transitions/puzz.png",
            edge: 1,
        },
    };
    //Animations
    function slideToSide(_startPos, _endPos) {
        return {
            start: {
                translation: Dejavu.ƒS.positionPercent(_startPos, 100),
                color: Dejavu.ƒS.Color.CSS("white", 1),
            },
            end: {
                translation: Dejavu.ƒS.positionPercent(_endPos, 100),
                color: Dejavu.ƒS.Color.CSS("white", 1),
            },
            duration: 2,
            playmode: Dejavu.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Dejavu.slideToSide = slideToSide;
    function rightFade() {
        return {
            start: { translation: Dejavu.ƒS.positions.bottomleft, color: Dejavu.ƒS.Color.CSS("", 1) },
            end: { translation: Dejavu.ƒS.positions.bottomright, color: Dejavu.ƒS.Color.CSS("", 0) },
            duration: 2,
            playmode: Dejavu.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Dejavu.rightFade = rightFade;
    //Sounds
    Dejavu.sounds = {
        //background Music
        packing: "/Dejavu/Audio/boxes.mp3",
        circus: "/Dejavu/Audio/circus-11794.mp3",
        dejavu: "/Dejavu/Audio/ambient-dream-16671.mp3",
        crowdTalking: "/Dejavu/Audio/crowd-talking-138493.mp3",
        divineroom: "/Dejavu/Audio/magical-background-6892.mp3",
        badEnding: "/Dejavu/Audio/evil-cue-111895.mp3",
        decision: "/Dejavu/Audio/quiz-game-music-loop-bpm-90-61070.mp3",
        goodEnding: "/Dejavu/Audio/motivational-corporate-medium1-110677.mp3",
        //sounds
        cafePouring: "/Dejavu/Audio/pouring-coffee-6743.mp3",
        fallingDown: "/Dejavu/Audio/person-knocked-down-14798.mp3",
        phoneRinging: "/Dejavu/Audio/smartphone_vibrating_alarm_silent-7040.mp3",
        phoneCalling: "/Dejavu/Audio/phone-calling-153844.mp3",
        phoneMessage: "/Dejavu/Audio/notifications-sound-127856.mp3",
        //voices
        rosiLaughing: "/Dejavu/Audio/womenLaughing.mp3",
        divineLaughing: "/Dejavu/Audio/wichtlaughing.mp3",
        RosaliaScreaming: "/Dejavu/Audio/loud-female-scream-41894.mp3",
        wheeze: "/Dejavu/Audio/huff-and-puff-63816.mp3",
    };
    //Location
    Dejavu.locations = {
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
        KitchenClue3: {
            name: "KitchenClue3",
            background: "/Dejavu/Images/Backgrounds/Kitchen_Clue3.png",
        },
        Clownroom: {
            name: "Clown Room",
            background: "/Dejavu/Images/Backgrounds/Clownroom.png",
        },
        ClownroomCard: {
            name: "Clown Room with Card",
            background: "/Dejavu/Images/Backgrounds/Clownroom_Card.png",
        },
        MansionDreaming: {
            name: "MansionDreaming",
            background: "/Dejavu/Images/Backgrounds/MansionDreaming.png",
        },
        Divineroom: {
            name: "Divine Room",
            background: "/Dejavu/Images/Backgrounds/Divineroom.png",
        },
        DivineroomTarot: {
            name: "Divineroom Tarot",
            background: "/Dejavu/Images/Backgrounds/DivineroomTarot.png",
        },
        Graveyard: {
            name: "Graveyard",
            background: "/Dejavu/Images/Backgrounds/Graveyard.png",
        },
        Psychiatry: {
            name: "Psychiatry",
            background: "/Dejavu/Images/Backgrounds/Psychatrie.png",
        },
        FinalDecision: {
            name: "Night",
            background: "/Dejavu/Images/Backgrounds/FinalDecision.png",
        },
        Newspaper: {
            name: "Newspaper Bad Ending",
            background: "/Dejavu/Images/Backgrounds/Newspaper.png",
        },
        LetterRosi: {
            name: "Diary Rosi",
            background: "/Dejavu/Images/Backgrounds/LetterRosiEnding.png",
        },
    };
    //Characters
    Dejavu.characters = {
        Narrator: {
            name: "",
        },
        Mom: {
            name: "Mom",
            origin: Dejavu.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                smiling: "Images/Characters/Mom/Mom_smiling.png",
            },
        },
        // PartnerInCrime
        PIC: {
            name: "",
            origin: Dejavu.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                havingAnIdea: "/Dejavu/Images/Characters/PartnerInCrime/PartnerInCrime_idea.png",
                normal: "/Dejavu/Images/Characters/PartnerInCrime/PartnerInCrime_normal.png",
                sad: "/Dejavu/Images/Characters/PartnerInCrime/PartnerInCrime_sad.png",
                unsure: "/Dejavu/Images/Characters/PartnerInCrime/PartnerInCrime_unischer.png",
            },
        },
        Rosalia: {
            name: "Rosalia",
            origin: Dejavu.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "/Dejavu/Images/Characters/Rosalia/Rosalia_normal.png",
                angry: "/Dejavu/Images/Characters/Rosalia/Rosalia_angry.png",
                dancing: "/Dejavu/Images/Characters/Rosalia/Rosalia_dancing.png",
                thinking: "/Dejavu/Images/Characters/Rosalia/Rosalia_thinking.png",
                training_confident: "/Dejavu/Images/Characters/Rosalia/Rosalia_Training_confident.png",
                traning_sad: "/Dejavu/Images/Characters/Rosalia/Rosalia_Training_sad.png",
            },
        },
        Clown: {
            name: "Clown",
            origin: Dejavu.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                knwowing: "/Dejavu/Images/Characters/Clown/Clown_knowing.png",
                schelmisch: "/Dejavu/Images/Characters/Clown/Clown_schelmisch.png",
                thinking: "/Dejavu/Images/Characters/Clown/Clown_thinking.png",
            },
        },
        Diviner: {
            name: "Wahrsagerin",
            origin: Dejavu.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                crazy: "/Dejavu/Images/Characters/Diviner/Wahrsagerin_crazy.png",
                normal: "/Dejavu/Images/Characters/Diviner/Wahrsagerin_normal.png",
                trance: "/Dejavu/Images/Characters/Diviner/Wahrsagerin_trance.png",
            },
        },
        Director: {
            name: "Zirkus Direktor",
            origin: Dejavu.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "/Dejavu/Images/Characters/Director/Direktor_angry.png",
                smiling: "/Dejavu/Images/Characters/Director/Direktor_smiling.png",
                unknown: "/Dejavu/Images/Characters/Director/Direktor_unwissend.png",
            },
        },
        Julius: {
            name: "Julius",
            origin: Dejavu.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "/Dejavu/Images/Characters/Julius/Julius_angry.png",
            },
        },
        RosaliasMother: {
            name: "Rosalias Mother",
            origin: Dejavu.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "/Dejavu/Images/Characters/RosaliasMother/RosaliasMother_angry.png",
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
    let gameMenu;
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Dejavu.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Dejavu.ƒS.Progress.load();
                break;
            case inGameMenuButtons.volumeDown:
                if (Dejavu.ƒ.AudioManager.default.volume > 0) {
                    Dejavu.ƒS.Sound.setMasterVolume(Dejavu.ƒ.AudioManager.default.volume - 0.2);
                }
                break;
            case inGameMenuButtons.volumeUp:
                if (Dejavu.ƒ.AudioManager.default.volume < 3) {
                    Dejavu.ƒS.Sound.setMasterVolume(Dejavu.ƒ.AudioManager.default.volume + 0.2);
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
    async function handleKeyPress(_event) {
        switch (_event.code) {
            case Dejavu.ƒ.KEYBOARD_CODE.F8:
                console.log("saving...");
                await Dejavu.ƒS.Progress.save();
                break;
            case Dejavu.ƒ.KEYBOARD_CODE.F9:
                console.log("loading...");
                await Dejavu.ƒS.Progress.load();
                break;
            case Dejavu.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
            case Dejavu.ƒ.KEYBOARD_CODE.I:
                await Dejavu.ƒS.Inventory.open();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Dejavu.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "inGameMenu");
        buttonFunctionalities("Close");
        let scenes = [
            // Act one
            { scene: Dejavu.home, name: "Arriving and Finding Diary" },
            //Act two
            { scene: Dejavu.firstMorning, id: "FirstMorning", name: "Arriving and Finding Diary" },
            { scene: Dejavu.arrivingAtHome, id: "ArrivingAtHome", name: "Back from the Flowergarden" },
            { scene: Dejavu.meetingPIC, id: "MeetingPIC", name: "Meeting your PIC" },
            //Act three
            { scene: Dejavu.decisiveDream, id: "DecisiveDream", name: "The Crucial Dream" },
            { scene: Dejavu.wakingUp, id: "WakingUp", name: "Deciding what to do" },
            { scene: Dejavu.makingPlan, id: "MakingPlan", name: "How to find out what happened?" },
            //Act four
            { scene: Dejavu.arrivingCircus, id: "ArrivingCircus", name: "Deciding who to ask first" },
            { scene: Dejavu.directorFirst, id: "DirectorFirst", name: "Asking Director first" },
            { scene: Dejavu.clownFirst, id: "ClownFirst", name: "Asking Divine first" },
            { scene: Dejavu.divineFirst, id: "DivineFirst", name: "Asking Clown first" },
            { scene: Dejavu.directorSeconde, id: "DirectorSeconde", name: "Asking Director seconde" },
            { scene: Dejavu.clownSeconde, id: "ClownSeconde", name: "Asking Divine seconde" },
            { scene: Dejavu.divineSeconde, id: "DivineSeconde", name: "Asking Clown seconde" },
            { scene: Dejavu.finalDecision, id: "FinalDecision", name: "Deciding what happened" },
            //Endings
            { scene: Dejavu.badEnding, id: "BadEnding", name: "bad Ending" },
            { scene: Dejavu.neutralEnding, id: "NeutralEnding", name: "neutral Ending" },
            { scene: Dejavu.goodEnding, id: "GoodEnding", name: "good Ending" },
            //Clues
            { scene: Dejavu.clueOne, id: "ClueOne", name: "big fight with Rosalia and her Mother" },
            { scene: Dejavu.clueThree, id: "ClueThree", name: "threatening letter" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        Dejavu.dataForSave = Dejavu.ƒS.Progress.setData(Dejavu.dataForSave, uiElement);
        // start the sequence
        Dejavu.ƒS.Progress.go(scenes);
    }
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function clueOne() {
        console.log("clue One: starting");
        // SPEECH
        let text = {
            Rosalia: {
                R1: "Du hast mir nicht vorzuschreiben in wen ich mich verliebe!",
                R3: "Ich habe mir nicht ausgesucht in welche Familie ich geboren werde! Aber ich werde mir meinen Ehemann selber aussuchen!",
                R5: "Pff der hat doch keine Ahnung von Liebe!... Ich werde gehen, wenn du das nicht akzeptierst",
                R7: "Darauf würde ich nicht wetten!",
            },
            RosaliasMother: {
                M2: "Es geht doch hier auch nicht um Liebe!... Sondern um deine Verpflichtung gegenüber der Familie",
                M4: "Wenn du dich nicht sofort beruhigst und Julius heiratest will ich dich nie wieder mehr hier sehen! .... Wir haben euch einander versprochen und Julius liebt dich!",
                M6: "Dann verschwinde doch, aber du wirst wieder zurück kommen da bin ich mir sicher!",
            },
        };
        //ClueOne
        Dejavu.ƒS.Speech.hide();
        Dejavu.ƒS.Sound.play(Dejavu.sounds.dejavu, 0.5, true);
        await Dejavu.ƒS.Location.show(Dejavu.locations.MansionDreaming);
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Character.show(Dejavu.characters.Rosalia, Dejavu.characters.Rosalia.pose.angry, Dejavu.ƒS.positionPercent(70, 90));
        await Dejavu.ƒS.update(0.5);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Rosalia, text.Rosalia.R1);
        await Dejavu.ƒS.Character.show(Dejavu.characters.RosaliasMother, Dejavu.characters.RosaliasMother.pose.angry, Dejavu.ƒS.positionPercent(30, 90));
        await Dejavu.ƒS.update(0.5);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.RosaliasMother, text.RosaliasMother.M2);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Rosalia, text.Rosalia.R3);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.RosaliasMother, text.RosaliasMother.M4);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Rosalia, text.Rosalia.R5);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.RosaliasMother, text.RosaliasMother.M6);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Rosalia, text.Rosalia.R7);
        await Dejavu.ƒS.Character.hide(Dejavu.characters.RosaliasMother);
        await Dejavu.ƒS.update(0.5);
        await Dejavu.ƒS.Character.hide(Dejavu.characters.Rosalia);
        await Dejavu.ƒS.update(0.5);
        Dejavu.ƒS.Sound.fade(Dejavu.sounds.dejavu, 0, 1);
        await Dejavu.ƒS.Location.show(Dejavu.locations.Black);
        await Dejavu.ƒS.update(2);
        Dejavu.ƒS.Speech.hide();
        return "FirstMorning";
    }
    Dejavu.clueOne = clueOne;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function home() {
        console.log("home scene: starting");
        // SPEECH
        let text = {
            Narrator: {
                A1_S1_01: "Als du in einer langweiligen Vorlesung sahst, hast du plötzlich einen Anruf von deiner Mutter bekommen.",
                A1_S1_02: "Das ist sehr ungewöhnlich, weil deine Mutter eigentlich genau weiß, dass du um die Uhrzeit meist in der Uni sitzt.",
                A1_S1_03: "In dem Telefonat erzählt sie dir, dass dein Opa heute gestorben ist... er aber friedlich eingeschlafen ist und laut Arzt keine Schmerzen hatte.",
                A1_S1_04: "Das trifft dich hart und du fährst direkt nach der Vorlesung in deine Heimatstadt.",
                A1_S4_01: "Du hilfst deiner Familie die Sachen deines Opas durchzugehen und in Kartons zu packen.",
                A1_S4_02: "Nach einer Weile fällt dir ein kleines Buch auf.",
                A1_S4_05: "Du schaust dich um, ob dich gerade jemand beobachtet, aber es sind alle gerade auf ihre eigenen Arbeit fokusiert",
                A1_S5_01_B: "Nachdem du und deine Familie zusammengepackt habt, entscheidest du dich dafür ins Bett zu gehen um morgen früh fit in den Tag zu starten.",
                A1_S5_02_B: "Huch was ist denn das?",
            },
            Rosi: {
                A1_S1_05: "<i>Endlich Zuhause... Ich hoffe, Opa hatte ein erfülltes Leben </i>",
                A1_S1_06: "<i>Ich habe Opa immer gerne besucht, auch als er schon senil war, hatte ich das Gefühl, dass er mich immer sofort wiedererkannt hat.</i>",
                A1_S1_07: "<i>Da ich seiner Mutter und meiner Urgroßmutter sehr ähnlich sehe, hatten wir schon immer eine besondere Beziehung.</i>",
                A1_S1_08: "<i>Er hatte nicht mehr als Geschichten über sie, denn seine Mutter Rosalia ist verschwunden, als er zwei Jahre alt war... und Opa hing sehr an den Geschichten die sein Vater ihm erzählt hat.</i>",
                A1_S1_09: "<i>Wir haben uns immer zusammen vorgestellt wie sie war... und bei einem waren wir uns einig... Ich hab nur ihr Aussehen geerbt und ihren Namen! </i>",
                A1_S1_10: "<i>Rosalia schien sehr wild und abenteuerlustig zu sein... Ich bin eher das Gegenteil davon.</i>",
                A1_S2_01: "<i>Aber wir haben nie darüber gesprochen, was mit ihr passiert ist und warum die verschwunden ist.</i>",
                A1_S2_02: "<i>Wahrscheinlich ist es zu schmerzhaft, darüber nachzudenken, geschweige denn darüber zu sprechen.</i>",
                A1_S2_03: "<i>Es ist schon verrückt, wie ein Mensch, der in der einen Sekunde noch da war und in der nächsten verschwunden ist. </i>",
                A1_S3_03: "Hallo Mama, den Umständen entsprechend... aber ich glaube Großvater wollte nicht mehr weiterkämpfen.",
                A1_S3_04: "Und wer weiß, vielleicht trifft er jetzt seine Mutter Rosalia.",
                A1_S4_03: "<i> Huch... was ist den das? </i>",
                A1_S4_04: "<i> Das sieht nach einem Tagebuch aus... kann es das Tagebuch von Großvater sein, von dem Opa immer erzählt hat? </i>",
                A1_S4_06: "<i>Wenn das Mama sieht, wird sie es mir bestimmt wegnehmen</i>",
                A1_S4_07: "<i> Soll ich es trotzdem mitnehmen? </i>",
                A1_S5_01_A: "Hey Mama, ich bin echt kaputt von der Heimfahrt, ist es ok, wenn ich in mein Zimmer gehen würde und mich schon ins Bett legen würde?",
                A1_S5_02_A: "<i>Opa hat mir zwar schon immer viel von Rosalia erzählt, aber sie aus den Augen von Großvater zu sehen... Ich bin gespannt was mich erwartet.</i>",
                A1_S5_03_A: "<i>Wow, so sah <strong> MEINE </strong> Großmutter aus?! Sie ist wunderschön</i>",
                A1_S5_04_A: "<i>Ich sehe ihr wirklich sehr ähnlich. Sogar mein Muttermal ist an der gleichen Stelle... Da hat das Universum aber auch nur copy und paste gemacht.</i>",
                A1_S5_05_A: "Rosalia hat mir heute mal wieder beim arbeiten zu geschaut. Sie sagt zwar immer, dass sie einfach nur gerne im Blumengarten ist aber dafür hat sie ein bisschen viel Bilder von mir gemacht. Als sie kurz abgelenkt war hab ich sie ihr klauen können und konnte dieses wunderschöne Bild von ihr schießen.",
                A1_S5_06_A: "Sie ist einfach eine einzigartige Frau. Durch das Bild allein spüre ich ihr Selbstbewusstsein. Das ich diese Frau an meiner Seite haben darf...",
                A1_S5_07_A: "<i> Jetzt bin ich aber wirklich müde, Großmutter scheint eine sehr interessante Person gewesen zu sein. Ich hätte sie gerne kennengelernt...",
                A1_S5_02_B: "Wie.., Wie.. kommt den das hier her?",
                A1_S5_03_B: "Ist das etwa das Tagebuch?... Ich hab das doch wieder zurückgelegt",
                A1_S5_04_B: "Naja, wenn es schon hier liegt, dann kann ich vielleicht doch ein bisschen im Leben anderer herumschnüffeln",
            },
            Mom: {
                A1_S3_01: "Hallo mein kleiner Spatz",
                A1_S3_02: "Schön, dass du früher nach Hause gekommen bist. Wie geht es dir?",
                A1_S3_05: "Oh ja, das wäre schön, oder? Ich würde es ihm wünschen!",
                A1_S3_06: "Hilfst du uns beim Packen? Wir wollen heute noch das Wohnzimmer fertig machen.",
                A1_S5_02_A: "Ja aber natürlich mein Schatz, ruh dich aus... Wir sehen uns dann morgen früh.",
            },
        };
        // CHOICES
        let choicesTakeDiary = {
            takeDiary: "Ja, Das merkt Mama bestimmt nicht!",
            layBack: "Nein, man steckt seine Nase nicht in fremde Tagebücher!",
        };
        //Erster Akt
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.Uni);
        await Dejavu.ƒS.update(1);
        Dejavu.ƒS.Sound.play(Dejavu.sounds.crowdTalking, 0.5, true);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A1_S1_01);
        Dejavu.ƒS.Sound.play(Dejavu.sounds.phoneRinging, 0.5, true);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A1_S1_02);
        Dejavu.ƒS.Sound.fade(Dejavu.sounds.phoneRinging, 0, 1);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A1_S1_03);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A1_S1_04);
        Dejavu.ƒS.Sound.fade(Dejavu.sounds.crowdTalking, 0, 1);
        await Dejavu.ƒS.Location.show(Dejavu.locations.Hallway);
        await Dejavu.ƒS.update(1);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S1_05);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S1_06);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S1_07);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S1_08);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S1_09);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S1_10);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S2_01);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S2_02);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S2_03);
        await Dejavu.ƒS.Location.show(Dejavu.locations.livingroom);
        await Dejavu.ƒS.update(1);
        await Dejavu.ƒS.Character.show(Dejavu.characters.Mom, Dejavu.characters.Mom.pose.smiling, Dejavu.ƒS.positionPercent(50, 90));
        await Dejavu.ƒS.update(1);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A1_S3_01);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A1_S3_02);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S3_03);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S3_04);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A1_S3_05);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A1_S3_06);
        await Dejavu.ƒS.Character.hide(Dejavu.characters.Mom);
        await Dejavu.ƒS.update(1);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A1_S4_01);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A1_S4_02);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S4_03);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S4_04);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A1_S4_05);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S4_06);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S4_07);
        let choiceTakeDiary = await Dejavu.ƒS.Menu.getInput(choicesTakeDiary, "choices");
        switch (choiceTakeDiary) {
            case choicesTakeDiary.takeDiary:
                Dejavu.dataForSave.lifepoints += 10;
                await Dejavu.ƒS.Character.show(Dejavu.characters.Mom, Dejavu.characters.Mom.pose.smiling, Dejavu.ƒS.positionPercent(50, 90));
                await Dejavu.ƒS.update(1);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_01_A);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A1_S5_02_A);
                await Dejavu.ƒS.Character.hide(Dejavu.characters.Mom);
                await Dejavu.ƒS.update(1);
                await Dejavu.ƒS.Location.show(Dejavu.locations.Bedroom);
                await Dejavu.ƒS.update(1);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_02_A);
                await Dejavu.ƒS.Location.show(Dejavu.locations.BedroomDiaryIntro);
                await Dejavu.ƒS.update(0);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_03_A);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_04_A);
                Dejavu.ƒS.Sound.play(Dejavu.sounds.rosiLaughing, 0.5);
                await Dejavu.ƒS.Speech.tell("Rosi lesend", text.Rosi.A1_S5_05_A);
                await Dejavu.ƒS.Speech.tell("Rosi lesend", text.Rosi.A1_S5_06_A);
                await Dejavu.ƒS.Location.show(Dejavu.locations.Bedroom);
                await Dejavu.ƒS.update(0);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_07_A);
                await Dejavu.ƒS.Location.show(Dejavu.locations.Black);
                await Dejavu.ƒS.update(Dejavu.transitions.blinkClose.duration, Dejavu.transitions.blinkClose.alpha, Dejavu.transitions.blinkClose.edge);
                Dejavu.ƒS.Speech.hide();
                return "ClueOne";
            case choicesTakeDiary.layBack:
                Dejavu.dataForSave.lifepoints -= 10;
                Dejavu.ƒS.Sound.play(Dejavu.sounds.packing, 0.5);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A1_S5_01_B);
                Dejavu.ƒS.Sound.fade(Dejavu.sounds.packing, 0, 1);
                Dejavu.ƒS.Speech.hide();
                await Dejavu.ƒS.update(1);
                await Dejavu.ƒS.Location.show(Dejavu.locations.Bedroom);
                await Dejavu.ƒS.update(1);
                await Dejavu.ƒS.Location.show(Dejavu.locations.Black);
                await Dejavu.ƒS.update(Dejavu.transitions.blinkClose.duration, Dejavu.transitions.blinkClose.alpha, Dejavu.transitions.blinkClose.edge);
                await Dejavu.ƒS.Location.show(Dejavu.locations.Bedroom);
                await Dejavu.ƒS.update(Dejavu.transitions.blinkOpen.duration, Dejavu.transitions.blinkOpen.alpha, Dejavu.transitions.blinkOpen.edge);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_02_B);
                await Dejavu.ƒS.Location.show(Dejavu.locations.BedroomDiary);
                await Dejavu.ƒS.update(0);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_03_B);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_04_B);
                await Dejavu.ƒS.Location.show(Dejavu.locations.BedroomDiaryIntro);
                await Dejavu.ƒS.update(0);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_03_A);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_04_A);
                Dejavu.ƒS.Sound.play(Dejavu.sounds.rosiLaughing, 0.5);
                await Dejavu.ƒS.Speech.tell("Rosi lesend", text.Rosi.A1_S5_05_A);
                await Dejavu.ƒS.Speech.tell("Rosi lesend", text.Rosi.A1_S5_06_A);
                await Dejavu.ƒS.Location.show(Dejavu.locations.Bedroom);
                await Dejavu.ƒS.update(0);
                break;
        }
    }
    Dejavu.home = home;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function arrivingAtHome() {
        console.log("arrivingAtHome scene: starting");
        // SPEECH
        let text = {
            Narrator: {
                A2_S9_04: "Du entscheidest dich dafür heute wieder etwas früher ins Bett zu gehen, der Tag hat dich doch mehr geschlaucht als du dachtest",
            },
            Rosi: {
                A2_S9_01: "Hallo Mama, ich bin wieder Zuhause.",
                A2_S9_03: "Ja, ich liebe diesen Blumengarten wirklich sehr",
                A2_S9_05: "Phu was für ein Tag, jetzt bin ich bereit fürs schlafen.",
                R3: "Warte mal... du bist mir nicht sauer, obwohl du immer sagst, dass du die Geschichten von Opa nie gut fandest?",
                R6: "Meinst du? Ich glaube für Opa waren seine Geschichten echt.",
                R14: "Wow, das hab ich ja garnicht gewusst, das hört sich eigentlich nach einer schönen Liebesgeschichte an... Wenn es doch nicht so ein tragisches Ende gegeben hätte.",
                R16: "Gute Nacht Mama",
            },
            Mom: {
                A2_S9_02: "Ah, Hallo mein Schatz, hattest du einen schönen Tag?",
                M1: "Ich hab mich schon gewundert, das hätte ja beim aufräumen auftauchen sollen",
                M2: "Hast du denn schon etwas über deine Urgroßmutter herausfinden können?",
                M4: "Ach quatsch, das ist das Tagebuch deines Großvaters, da sind wahre Gefühle und Begebenheiten drin.",
                M5: "Dein Opa hatte nur wilde Geschichten, die wenig mit der Wahrheit zu tun hatten.",
                M7: "ja das stimmt natürlich mein Schatz, aber weißt du was wirklich echt war?",
                M8: "Ich glaube mein Opa, also dein Urgroßvater, hat oft nicht gedacht, dass ich vieles nicht verstehe als ich noch klein war.",
                M9: "Aber ich habe schon schnell verstanden, dass mein Opa und Rosalia sich für die Liebe und gegen die Familie entschieden haben.",
                M10: "Soweit ich das weiß kam Rosalia aus gutem Hause und Opa war nur ein normaler Arbeiter, das hat zu der Zeit nicht wirklich zusammen gepasst.",
                M11: "Ihre Mutter hat nach der Hochzeit nie wieder mehr ein Wort mit ihr gesprochen und wenn dann nur um sie zu überzeugen doch noch so einen komischen Kerl zu heiraten den die Familie irgendwie kannte.",
                M12: "Wie hieß dieser Kerl nochmal?... Opa hat diesen Namen immer so mit Verachtung ausgesprochen.... Josua... nein Jak... nein Julius! Er hieß Julius genau!",
                M13: "Wie manche Männer nun mal sind, hatten die beiden sogar einen Kampf um Rosalia... aber dieser Julius hat wohl nicht mit fairen Karten gespielt....",
                M15: "Ja da hast du Recht, aber jetzt ab ins Bett mit dir",
            },
        };
        // CHOICES
        let choicesTellDiary = {
            tellMom: "Mama vom Tagebuch erzählen",
            dontTellMom: "lieber nicht vom Tagebuch erzählen",
        };
        //Seconde Act
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.livingroom);
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Character.show(Dejavu.characters.Mom, Dejavu.characters.Mom.pose.smiling, Dejavu.ƒS.positionPercent(50, 90));
        await Dejavu.ƒS.update(1);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S9_01);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A2_S9_02);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S9_03);
        let choiceTellDiary = await Dejavu.ƒS.Menu.getInput(choicesTellDiary, "choices");
        switch (choiceTellDiary) {
            case choicesTellDiary.tellMom:
                Dejavu.dataForSave.lifepoints += 10;
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.M1);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.M2);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.R3);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.M4);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.M5);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.R6);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.M7);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.M8);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.M9);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.M10);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.M11);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.M12);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.M13);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.R14);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.M15);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.R16);
                break;
            case choicesTellDiary.dontTellMom:
                Dejavu.dataForSave.lifepoints -= 10;
                break;
        }
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A2_S9_04);
        await Dejavu.ƒS.Character.hide(Dejavu.characters.Mom);
        await Dejavu.ƒS.update(1);
        await Dejavu.ƒS.Location.show(Dejavu.locations.Bedroom);
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S9_05);
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.Black);
        await Dejavu.ƒS.update(Dejavu.transitions.blinkClose.duration, Dejavu.transitions.blinkClose.alpha, Dejavu.transitions.blinkClose.edge);
        return "DecisiveDream";
    }
    Dejavu.arrivingAtHome = arrivingAtHome;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function firstMorning() {
        console.log("firstMorning scene: starting");
        // SPEECH
        let text = {
            Narrator: {
                A2_S2_01: "Du ziehst dich an um runter zu deiner Familie zu gehen",
                A2_S4_11: "Du setzt dich auf die Bank und nimmst einen großen Atemzug, um die Düfte der Blumen aufzunehmen",
                A2_S4_12: "Du überlegst was du malen sollst?",
                A2_S5_13: "Du vertiefst dich in deine Zeichnung und vergisst die Zeit.",
                A2_S5_18: "Nachdem du mit der Zeichnung fertig geworden bist, fällt dir auf das es langsam spät geworden ist und du nach Hause gehen solltest.",
            },
            Rosi: {
                A2_S2_03: "Ehm ja ich denke",
                A2_S3_05_A: "Mhmm das war lecker Mama, danke",
                A2_S3_06: "Ich würde gerne in den Blumengarten gehen und ein bisschen Zeichnen",
                A2_S3_08: "Mach ich, bis dann!",
                A2_S4_09: "Endlich wieder hier, wie ich diesen Garten vermisst habe",
                A2_S4_10: "Perfekt, meine Lieblingsbank ist frei",
                A2_S5_14: "Oh hi ",
                A2_S5_16: "Ehm.... eigentlich würde ich gerne etwas Zeit für mich haben... sei mir nicht böse",
            },
            Mom: {
                A2_S2_02: "Guten Morgen Rosi, hast du gut geschlafen?",
                A2_S2_04: "Soll ich dir etwas zum Frühstück vorbereiten?",
                A2_S3_07: "Alles klar mein Schatz, pass auf dich auf",
            },
            PIC: {
                A2_S5_13: "Oh hi Rosi, lange nicht mehr gesehen.",
                A2_S5_15: "darf ich mich zu dir setzen?",
                A2_S5_17: "Oh.... ehm.... ja klar... dann bis bald.... und herzliches Beileid noch",
            }
        };
        // CHOICES
        let choicesBreakfast = {
            nobreakfast: "Nein danke, ich habe gerade keinen großen Hunger",
            apple: "nur einen Apfel bitte",
            egg: "Ja gerne, würdest du mir ein Spiegelei zubereiten?",
        };
        let choicesDraw = {
            portrait: "Ein Portrait von Rosalia",
            bee: "Die Biene die es sich gerade auf einer Rose bequem gemacht hat",
        };
        //Seconde Act
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.Bedroom);
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A2_S2_01);
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.Kitchen);
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Character.show(Dejavu.characters.Mom, Dejavu.characters.Mom.pose.smiling, Dejavu.ƒS.positionPercent(50, 90));
        await Dejavu.ƒS.update(1);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A2_S2_02);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S2_03);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A2_S2_04);
        //Breakfast Choice
        let choiceBreakfast = await Dejavu.ƒS.Menu.getInput(choicesBreakfast, "choices");
        switch (choiceBreakfast) {
            case choicesBreakfast.egg:
                Dejavu.dataForSave.lifepoints -= 10;
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S3_05_A);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S3_06);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A2_S3_07);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S3_08);
                Dejavu.ƒS.Speech.hide();
                await Dejavu.ƒS.Character.hide(Dejavu.characters.Mom);
                await Dejavu.ƒS.update(1);
                await Dejavu.ƒS.Location.show(Dejavu.locations.Flowergarden);
                await Dejavu.ƒS.update(2);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S4_09);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S4_10);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A2_S4_11);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A2_S4_12);
                //Drawing Choice
                let choiceDraw = await Dejavu.ƒS.Menu.getInput(choicesDraw, "choices");
                switch (choiceDraw) {
                    case choicesDraw.portrait:
                        Dejavu.dataForSave.lifepoints -= 10;
                        break;
                    case choicesDraw.bee:
                        Dejavu.dataForSave.lifepoints += 10;
                        break;
                }
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A2_S5_13);
                await Dejavu.ƒS.Speech.tell("", text.PIC.A2_S5_13);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S5_14);
                let name = await Dejavu.ƒS.Speech.getInput();
                Dejavu.dataForSave.partnerInCrimeName = name;
                Dejavu.characters.PIC.name = name;
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A2_S5_15);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S5_16);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A2_S5_17);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A2_S5_18);
                return "ArrivingAtHome";
            case choicesBreakfast.apple:
                Dejavu.dataForSave.lifepoints += 10;
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S3_06);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A2_S3_07);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S3_08);
                await Dejavu.ƒS.Character.hide(Dejavu.characters.Mom);
                await Dejavu.ƒS.update(1);
                Dejavu.ƒS.Speech.hide();
                return "MeetingPIC";
            case choicesBreakfast.nobreakfast:
                Dejavu.dataForSave.lifepoints += 10;
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S3_06);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A2_S3_07);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S3_08);
                await Dejavu.ƒS.Character.hide(Dejavu.characters.Mom);
                await Dejavu.ƒS.update(1);
                Dejavu.ƒS.Speech.hide();
                return "MeetingPIC";
        }
    }
    Dejavu.firstMorning = firstMorning;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function meetingPIC() {
        console.log("meetingPIC scene: starting");
        // SPEECH
        let text = {
            Narrator: {
                A2_S4_11: "Du setzt dich auf die Bank und nimmst einen großen Atemzug, um die Düfte der Blumen aufzunehmen",
                A2_S4_12: "Du überlegst was du malen sollst?",
                A2_S5_01: "Du bist so in dein Bild vertieft, dass dir gar nicht aufgefallen ist, dass sich jemand neben dich gesetzt.hat",
                A2_S7_01_A: "du erzählst ihm alles was dir dein Opa über Rosalia erzählt hat und das sie plötzlich verschwunden ist.",
            },
            Rosi: {
                A2_S4_09: "Endlich wieder hier, wie ich diesen Garten vermisst habe",
                A2_S4_10: "Perfekt, meine Lieblingsbank ist frei",
                A2_S5_02: "Huch...Ach du meine Güte hast du mich erschrocken!.... Wie lange sitzt du denn schon hier?",
                A2_S5_05: "Vielleicht ein bisschen hihihihi... aber es freut mich dich zu sehen   ",
                A2_S5_07_A: "Nein, das soll meine Urgroßmutter sein, ich sehe ihr nur sehr ähnlich, außer dass sie viel Hübscher ist als ich",
                A2_S5_05_B: "Danke",
                A2_S6_01_A: "Mein Opa ist gestern verstorben... dementsprechend bin ich eher etwas betrübt.",
                A2_S6_03_A: "Ja schon, da ich seiner Mutter sehr ähnliche sehe hat er mich immer etwas bevorzugt.",
                A2_S6_01_B: "ganz ok eigentlich, nichts besonderes... und wie geht es dir?",
                A2_S7_02_B: "Gleichfalls, machs gut",
                A2_S8_01: "30.August 1887. Rosalia musste heute etwas länger arbeiten, deswegen habe ich auf unseren kleinen Jungen aufgepasst. Um seiner Mutter etwas näher zu sein, haben wir uns dafür entschieden den Abend im Blumengarten zu verbringen und sie dort zu treffen. Wir haben gewartet und gewartet, doch sie kam nicht. Nach einer Weile, wurde unser Junge quenglig und müde und wir sind nach Hause gegangen.",
                A2_S8_02: "Sie ist seitdem nicht nach Hause gekommen... Ich mache mir Sorgen. Ich hoffe Sie ist nicht mit diesem Julius abgehauen, das wird sie mir sonst noch büßen.",
            },
            PIC: {
                A2_S5_03: "Schon ein Weile.... Ich hab dir ein bisschen beim zeichnen zu geschaut.",
                A2_S5_04: "Ich hoffe du findest das jetzt nicht komisch",
                A2_S5_06_A: "Bist du das auf deiner Zeichnung?",
                A2_S5_08_A: "Ich finde dich auch sehr hübsch",
                A2_S5_04_B: "mir gefällt deine Zeichnung, sieht sehr schön aus.",
                A2_S5_09: "Wie geht es dir?",
                A2_S6_02_A: "Oh das tut mir leid, mein herzliches Beileid... standest du ihm sehr nah?",
                A2_S6_02_B: "auch ganz gut",
                A2_S7_02_A: "Wow das klingt aber sehr spannend und nach einem großen Abenteuer.... Wenn du etwas Unterstützung brauchst, bin ich nur ein Anruf entfernt.",
                A2_S7_03_A: "Ich würde dann aber wieder weiter gehen.. es war schön dich wieder zu sehen Rosi",
                A2_S7_01_B: "Na dann, lass ich dich mal wieder alleine zeichnen... Hat mich gefreut dich wieder zu sehen Rosalia.",
            },
        };
        // CHOICES
        let choicesDraw = {
            portrait: "Ein Portrait von Rosalia",
            bee: "Die Biene die es sich gerade auf einer Rose bequem gemacht hat",
        };
        let choicesCompliment = {
            ignore: "ignorieren",
            takeCompliment: "Danke, dass ist sehr nett von dir",
        };
        let choicesFeeling = {
            ok: "alles ok",
            grandpaDead: "Von Opas Tod erzählen",
        };
        let choicesDiary = {
            dontTell: "nicht erzählen",
            tell: "von Tagebuch erzählen",
        };
        let ChoicesDoingNext = {
            readingDiary: "Tagebuch weiterlesen",
            goHome: "nach Hause gehen",
        };
        document
            .getElementsByName("lovepoints")
            .forEach((meterStuff) => (meterStuff.hidden = false));
        //Seconde Act
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.Flowergarden);
        await Dejavu.ƒS.update(Dejavu.transitions.hearts.duration, Dejavu.transitions.hearts.alpha, Dejavu.transitions.hearts.edge);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S4_09);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S4_10);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A2_S4_11);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A2_S4_12);
        let choiceDraw = await Dejavu.ƒS.Menu.getInput(choicesDraw, "choices");
        switch (choiceDraw) {
            case choicesDraw.portrait:
                Dejavu.dataForSave.lifepoints -= 10;
                break;
            case choicesDraw.bee:
                Dejavu.dataForSave.lifepoints += 10;
                break;
        }
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A2_S5_01);
        await Dejavu.ƒS.Character.show(Dejavu.characters.PIC, Dejavu.characters.PIC.pose.normal, Dejavu.ƒS.positionPercent(50, 90));
        await Dejavu.ƒS.update(1);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S5_02);
        await Dejavu.ƒS.Speech.tell("stiller Beobachter", text.PIC.A2_S5_03);
        await Dejavu.ƒS.Speech.tell("stiller Beobachter", text.PIC.A2_S5_04);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S5_05);
        let name = await Dejavu.ƒS.Speech.getInput();
        Dejavu.dataForSave.partnerInCrimeName = name;
        Dejavu.characters.PIC.name = name;
        switch (choiceDraw) {
            case choicesDraw.portrait:
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A2_S5_06_A);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S5_07_A);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A2_S5_08_A);
                let choiceCompliment = await Dejavu.ƒS.Menu.getInput(choicesCompliment, "choices");
                switch (choiceCompliment) {
                    case choicesCompliment.ignore:
                        break;
                    case choicesCompliment.takeCompliment:
                        Dejavu.dataForSave.lovepoints += 12.5;
                        break;
                }
                break;
            case choicesDraw.bee:
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A2_S5_04_B);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S5_05_B);
                break;
        }
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A2_S5_09);
        let choiceFeeling = await Dejavu.ƒS.Menu.getInput(choicesFeeling, "choices");
        switch (choiceFeeling) {
            case choicesFeeling.ok:
                Dejavu.dataForSave.lifepoints -= 10;
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S6_01_B);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A2_S6_02_B);
                break;
            case choicesFeeling.grandpaDead:
                Dejavu.dataForSave.lifepoints += 10;
                Dejavu.dataForSave.lovepoints += 12.5;
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S6_01_A);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A2_S6_02_A);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S6_03_A);
                break;
        }
        let choiceDiary = await Dejavu.ƒS.Menu.getInput(choicesDiary, "choices");
        switch (choiceDiary) {
            case choicesDiary.dontTell:
                Dejavu.dataForSave.lifepoints -= 10;
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A2_S6_02_B);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S6_01_B + Dejavu.dataForSave.partnerInCrimeName + ".");
                await Dejavu.ƒS.Character.hideAll();
                await Dejavu.ƒS.update(1);
                break;
            case choicesDiary.tell:
                Dejavu.dataForSave.lifepoints += 10;
                Dejavu.dataForSave.lovepoints += 12.5;
                await Dejavu.ƒS.Speech.tell(undefined, text.Narrator.A2_S7_01_A);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A2_S7_02_A);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A2_S7_03_A);
                await Dejavu.ƒS.Character.hideAll();
                await Dejavu.ƒS.update(1);
                break;
        }
        await Dejavu.ƒS.Speech.tell(undefined, "Du überlegst was du als nächstes machst");
        let ChoiceDoingNext = await Dejavu.ƒS.Menu.getInput(ChoicesDoingNext, "choices");
        switch (ChoiceDoingNext) {
            case ChoicesDoingNext.goHome:
                Dejavu.dataForSave.lifepoints -= 10;
                return "ArrivingAtHome";
            case ChoicesDoingNext.readingDiary:
                Dejavu.dataForSave.lifepoints += 10;
                await Dejavu.ƒS.Location.show(Dejavu.locations.FlowergardenDiary);
                await Dejavu.ƒS.update(0);
                await Dejavu.ƒS.Speech.tell("Rosi lesend", text.Rosi.A2_S8_01);
                await Dejavu.ƒS.Speech.tell("Rosi lesend", text.Rosi.A2_S8_02);
                Dejavu.ƒS.Speech.hide();
                await Dejavu.ƒS.update(2);
                return "ArrivingAtHome";
        }
    }
    Dejavu.meetingPIC = meetingPIC;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function clueThree() {
        console.log("clueThree scene: starting");
        // SPEECH
        let text = {
            Narrator: {
                A3_S13_17: "Du rufst gleich ",
            },
            Rosi: {
                A3_S13_01: "Guten Morgen Mama",
                A3_S13_03: "Oh ich hab geschrien?... Naja ich hatte mal wieder einen Alptraum, also nichts neues.",
                A3_S13_04: "Du Mom, weißt du etwas über das Verschwinden von Urgroßmutter Rosalia?",
                A3_S13_06: "Ja ich weiß, aber seit dem Tod von Opa würde ich es einfach gerne für ihn herausfinden... verstehst du?",
                A3_S13_08: "Doch ich glaube das weiß jemand.... und nämlich der Mörder von Rosalia.",
                A3_S13_10: "Doch ich bin mir sicher, dass Rosalia nciht einfach verschwunden ist, sondern umgebracht wurde... ich weiß nur nicht ganz warum.",
                A3_S13_13: "Du wirst bereuen was du mir angetan hast! Mein Ruf ist ruiniert!",
                A3_S13_14: "das klingt eindeutig nach einer Drohung!",
                A3_S13_16: "ja auf jeden Fall, danke Mama!!!",
            },
            Mom: {
                A3_S13_02: "Guten Morgen mein Schatz, geht es dir gut? Ich habe dich vorhin schreien hören",
                A3_S13_05: "Phu, da wirbelst du aber was auf",
                A3_S13_07: " Ja mein Schatz... aber ich weiß selbst nichts darüber.... das weiß wohl niemand.",
                A3_S13_09: "so etwas kannst du doch nicht einfach so sagen!",
                A3_S13_11: "..... weißt du was Rosi?...... ich glaube du hast recht.... ich.. ich.. hab das nie zusammen in Verbindung gebracht und dachte das ging an deinen Urgroßvater.",
                A3_S13_12: "Da hast du vollkommen recht... behalte ihn... Ich hoffe ich konnte dir etwas helfen.",
                A3_S13_15: "Ich hab da einen alten Brief."
            },
        };
        //Third Act
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.Kitchen);
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_01);
        await Dejavu.ƒS.Character.show(Dejavu.characters.Mom, Dejavu.characters.Mom.pose.smiling, Dejavu.ƒS.positionPercent(50, 90));
        await Dejavu.ƒS.update(1);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A3_S13_02);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_03);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_04);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A3_S13_05);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_06);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A3_S13_07);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_08);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A3_S13_09);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_10);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A3_S13_11);
        await Dejavu.ƒS.Location.show(Dejavu.locations.KitchenClue3);
        await Dejavu.ƒS.update(0);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A3_S13_12);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_13);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_14);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A3_S13_15);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_16);
        await Dejavu.ƒS.Character.hide(Dejavu.characters.Mom);
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A3_S13_17 + Dejavu.dataForSave.partnerInCrimeName + " an um dich mit ihm im Blumengarten zu verabreden.");
        return "MakingPlan";
    }
    Dejavu.clueThree = clueThree;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function decisiveDream() {
        console.log("desisiveDream scene: starting");
        // SPEECH
        let text = {
            Narrator: {
                A3_S10_03: "..........",
            },
            Rosalia: {
                A3_S10_01: "Ich fühle mich heute richtig gut, das wird eine super Show!",
                A3_S10_02: "Bevor die Gäste kommen übe ich noch einmal die letzte Drehung",
                A3_S10_04: "Hilfe....Hilfe",
            },
            Unknown: {
                A3_S10_05: "So wie du mit den Gefühlen anderer umgehst, hast du keine Hilfe verdient!",
            },
        };
        //Third Act
        Dejavu.ƒS.Speech.hide();
        Dejavu.ƒS.Sound.play(Dejavu.sounds.dejavu, 0.5, true);
        await Dejavu.ƒS.Location.show(Dejavu.locations.CircusDreaming);
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Character.show(Dejavu.characters.Rosalia, Dejavu.characters.Rosalia.pose.training_confident, Dejavu.ƒS.positionPercent(50, 90));
        await Dejavu.ƒS.update(1);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Rosalia, text.Rosalia.A3_S10_01);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Rosalia, text.Rosalia.A3_S10_02);
        await Dejavu.ƒS.Character.hide(Dejavu.characters.Rosalia);
        await Dejavu.ƒS.update(1);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A3_S10_03);
        Dejavu.ƒS.Sound.fade(Dejavu.sounds.dejavu, 0, 1);
        Dejavu.ƒS.Sound.play(Dejavu.sounds.RosaliaScreaming, 0.5);
        Dejavu.ƒS.Sound.play(Dejavu.sounds.fallingDown, 0.5);
        Dejavu.ƒS.Sound.play(Dejavu.sounds.dejavu, 0.5, true);
        await Dejavu.ƒS.Character.show(Dejavu.characters.Rosalia, Dejavu.characters.Rosalia.pose.traning_sad, Dejavu.ƒS.positionPercent(50, 90));
        await Dejavu.ƒS.update(0);
        await Dejavu.ƒS.Speech.tell("Rosalia flüsternd", text.Rosalia.A3_S10_04);
        await Dejavu.ƒS.Speech.tell("???", text.Unknown.A3_S10_05);
        await Dejavu.ƒS.Character.hide(Dejavu.characters.Rosalia);
        Dejavu.ƒS.Sound.fade(Dejavu.sounds.dejavu, 0, 1);
        await Dejavu.ƒS.Location.show(Dejavu.locations.Black);
        await Dejavu.ƒS.update(2);
        Dejavu.ƒS.Speech.hide();
        return "WakingUp";
    }
    Dejavu.decisiveDream = decisiveDream;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function makingPlan() {
        console.log("MakingPlan scene: starting");
        // SPEECH
        let text = {
            PIC: {
                A3_S13_01: "Hallo Rosi",
                A3_S13_03: "Wo sollen wir anfangen? Hast du schon eine Idee wie wir das Geheimnis lüften können?",
                A3_S13_06: "hmm komisch, war sie Tänzerin?",
                A3_S13_09: "Los dann ruf sie gleich an",
                A3_S13_16: "Schau mal da steht der Name vom Zirkus",
                A3_S13_17: "Irgendwie kommt mir der bekannt vor....",
                A3_S13_18: "AHHH ich weiß, die sind noch bis heute in der Stadt",
            },
            Rosi: {
                A3_S13_02: "Hallo",
                A3_S13_04: "In meinem Traum ist sie von etwas runtergestürzt...",
                A3_S13_05: "Und sie meinte sie übt die letzte Drehung nochmal",
                A3_S13_07: "Opa hat mir mal was erzählt, dass sich Rosalia oben in der Luft am wohlsten gefühlt hat",
                A3_S13_11: "Nein, alles gut Mama... aber ich hab da eine Frage. Weißt du ob Großmutter Rosalia getanzt hat?",
                A3_S13_14: "Danke Mama, du bist die BESTE!",
                A3_S13_15: "Wow, das ging aber schnell, das ist also das Bild.",
                A3_S13_19: "Wirklich? Das ist ja perfekt.... Lass uns gleich hingehen"
            },
            Mom: {
                A3_S13_10: "Hallo, Rosi, ist etwas passiert?",
                A3_S13_12: "Hmm da muss ich nachdenken. Ich glaube Rosalia hat früher in einem Zirkus gearbeitet.",
                A3_S13_13: "Ich habe noch einen alten Zeitungsartikel von ihr, als sie einen Auftritt als Seiltänzerin hatte. Ich schick dir das Bild, wenn ich es gefunden habe."
            },
        };
        //Third Act
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.Flowergarden);
        await Dejavu.ƒS.update(Dejavu.transitions.hearts.duration, Dejavu.transitions.hearts.alpha, Dejavu.transitions.hearts.edge);
        await Dejavu.ƒS.Character.show(Dejavu.characters.PIC, Dejavu.characters.PIC.pose.normal, Dejavu.ƒS.positionPercent(50, 90));
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A3_S13_01);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_02 + Dejavu.dataForSave.partnerInCrimeName);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A3_S13_03);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_04);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_05);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A3_S13_06);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_07);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A3_S13_09);
        Dejavu.ƒS.Sound.play(Dejavu.sounds.phoneCalling, 0.5);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A3_S13_10);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_11);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A3_S13_12);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A3_S13_13);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_14);
        Dejavu.ƒS.Sound.play(Dejavu.sounds.phoneMessage, 0.5);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_15);
        await Dejavu.ƒS.Location.show(Dejavu.locations.FlowergardenHandy);
        await Dejavu.ƒS.update(0);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A3_S13_16);
        await Dejavu.ƒS.Character.hide(Dejavu.characters.PIC);
        await Dejavu.ƒS.update(0);
        await Dejavu.ƒS.Character.show(Dejavu.characters.PIC, Dejavu.characters.PIC.pose.unsure, Dejavu.ƒS.positionPercent(50, 90));
        await Dejavu.ƒS.update(0);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A3_S13_17);
        await Dejavu.ƒS.Character.hide(Dejavu.characters.PIC);
        await Dejavu.ƒS.update(0);
        await Dejavu.ƒS.Character.show(Dejavu.characters.PIC, Dejavu.characters.PIC.pose.havingAnIdea, Dejavu.ƒS.positionPercent(50, 90));
        await Dejavu.ƒS.update(0);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A3_S13_18);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_19);
        await Dejavu.ƒS.Character.hide(Dejavu.characters.PIC);
        await Dejavu.ƒS.update(1);
        Dejavu.ƒS.Speech.hide();
        return "ArrivingCircus";
    }
    Dejavu.makingPlan = makingPlan;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function neutralEnding() {
        console.log("neutralEnding scene: starting");
        Dejavu.ƒS.Character.hideAll();
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.Psychiatry);
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Text.print("<div class='novelpage'>Nach einer Weile ist es Rosalia immer schwerer geworden ihre Träume zu ignorieren und sie wurden immer intensiver. <br> Irgendwann ist Rosalia schweißnass in die Küche gekommen und ihre Mutter hat entschieden, dass das so nicht weiter gehen kann. <br> Nach ein paar Sitzungen wurde Rosi als schizophren diagnostiziert und in eine Psychatrie eingewiesen</div>");
    }
    Dejavu.neutralEnding = neutralEnding;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function wakingUp() {
        console.log("wakingUp scene: starting");
        // SPEECH
        let text = {
            Narrator: {
                A3_S11_01: "Nachdem du dich entschieden hast, dieses Abenteuer erst",
                A3_S12_01: "Du rufst PIC an und erzählst im von deinem Traum und deinem Vorhaben, dass Geheimnis von dem Verschwinden deiner Urgroßmutter zu lüften",
            },
            Rosi: {
                A3_S11_01: "W... W...Was.... war das?",
                A3_S11_02: "Mir tut alles weh",
                A3_S11_03: "Das können doch nicht nur Träume sein???",
                A3_S11_04: "Das war eindeutig Rosalia die da gefallen ist!... Aber wer war diese dunkle Gestalt?",
                A3_S11_05: "Ich muss herausfinden was wirklich passiert ist!....",
            },
            PIC: {
                A3_S12_01: "Da bin ich sowas von dabei, sollen wir uns gleich treffen?",
            }
        };
        // CHOICES
        let ChoicesDoingNext = {
            withPIC: "...aber das schaffe ich nicht alleine, am besten rufe ich " +
                Dejavu.dataForSave.partnerInCrimeName +
                " an",
            alone: "...am besten alleine, das glaubt mir ja niemand!",
            tooLong: "...oder nein, das ist alles schon viel zu lange her",
        };
        let ChoicesMeeting = {
            no: "Ich muss mich erstmal von diesem Schreck erholen. ",
            yes: "Ja auf jeden Fall, der Blumengarten?",
        };
        //Third Act
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.Bedroom);
        await Dejavu.ƒS.update(Dejavu.transitions.swirl.duration, Dejavu.transitions.swirl.alpha, Dejavu.transitions.swirl.edge);
        Dejavu.ƒS.Sound.play(Dejavu.sounds.wheeze, 0.5, true);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S11_01);
        Dejavu.ƒS.Sound.fade(Dejavu.sounds.wheeze, 0, 1);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S11_02);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S11_03);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S11_04);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S11_05);
        let ChoiceDoingNext = await Dejavu.ƒS.Menu.getInput(ChoicesDoingNext, "choices");
        switch (ChoiceDoingNext) {
            case ChoicesDoingNext.withPIC:
                Dejavu.dataForSave.lifepoints += 10;
                Dejavu.dataForSave.lovepoints += 12.5;
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A3_S12_01);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A3_S12_01);
                let ChoiceMeeting = await Dejavu.ƒS.Menu.getInput(ChoicesMeeting, "choices");
                switch (ChoiceMeeting) {
                    case ChoicesMeeting.no:
                        Dejavu.dataForSave.lifepoints += 10;
                        return "ClueThree";
                    case ChoicesMeeting.yes:
                        Dejavu.dataForSave.lifepoints -= 10;
                        Dejavu.dataForSave.lovepoints += 12.5;
                        return "MakingPlan";
                }
            case ChoicesDoingNext.alone:
                Dejavu.dataForSave.lifepoints -= 10;
                return "ClueThree";
            case ChoicesDoingNext.tooLong:
                return "NeutralEnding";
        }
    }
    Dejavu.wakingUp = wakingUp;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function arrivingCircus() {
        console.log("ArrivingCircus scene: starting");
        // SPEECH
        let text = {
            PIC: {
                A3_S14_02: "Echt? ich war früher immer mit meiner Familie",
                A3_S14_04: "Beim Zirkus sind immer die spannendsten Menschen.. Ich würde sagen, dass wir die Leute hier befragen, ob sie etwas von einem Tod einer Seiltänzerin wissen",
                A3_S14_06: "Wen wollen wir als erstes Fragen?",
            },
            Rosi: {
                A3_S14_01: "Wow ich war noch nie im Zirkus.",
                A3_S14_03: "Und wie wollen wir hier jetzt etwas herausfinden?",
                A3_S14_05: "Ich bin mir unsicher, ich glaube nicht, dass jeder auf diese Frage gut reagiert... aber ich vertraue dir",
            },
        };
        // CHOICES
        let choicesAskingFirst = {
            Clown: "Clown",
            Director: "Direktor",
            Divine: "Wahrsagerin",
        };
        //Fourth Act
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.CircusNow);
        await Dejavu.ƒS.update(2);
        Dejavu.ƒS.Sound.play(Dejavu.sounds.circus, 0.5, true);
        await Dejavu.ƒS.Character.show(Dejavu.characters.PIC, Dejavu.characters.PIC.pose.normal, Dejavu.ƒS.positionPercent(50, 90));
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S14_01);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A3_S14_02);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S14_03);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A3_S14_04);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A3_S14_05);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.A3_S14_06);
        let choiceAskingFirst = await Dejavu.ƒS.Menu.getInput(choicesAskingFirst, "choices");
        switch (choiceAskingFirst) {
            case choicesAskingFirst.Clown:
                Dejavu.dataForSave.lifepoints += 10;
                Dejavu.ƒS.Sound.fade(Dejavu.sounds.circus, 0, 1);
                await Dejavu.ƒS.Character.hide(Dejavu.characters.PIC);
                return "ClownFirst";
            case choicesAskingFirst.Director:
                Dejavu.ƒS.Sound.fade(Dejavu.sounds.circus, 0, 1);
                await Dejavu.ƒS.Character.hide(Dejavu.characters.PIC);
                return "DirectorFirst";
            case choicesAskingFirst.Divine:
                Dejavu.dataForSave.lifepoints -= 10;
                Dejavu.dataForSave.lovepoints += 12.5;
                Dejavu.ƒS.Sound.fade(Dejavu.sounds.circus, 0, 1);
                await Dejavu.ƒS.Character.hide(Dejavu.characters.PIC);
                return "DivineFirst";
        }
    }
    Dejavu.arrivingCircus = arrivingCircus;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function finalDecision() {
        console.log("finalDecision: starting");
        // SPEECH
        let text = {
            Narrator: {
                N1: " Ihr zwie überlegt wes passiert sein könnte?",
                N2: "Wer hat Rosalia umgebracht?",
            },
            Julius: {
                J1: "So wie du mit den Gefühlen anderer umgehst, hast du keine Hilfe verdient!",
                J3: "Das was ich schon viel früher hätte tun müssen, als du diesen Dreck geheiratet hast!",
            },
            Rosalia: {
                R2: "Julius was hast du nur getan?",
                R4: "Wie kannst du nur... mein Sohn....",
            },
        };
        // CHOICES
        let ChoicesMurderer = {
            Director: "der damalige Zirkus Direktor",
            RosaliasMother: "Rosalias Mutter",
            Julius: "der Ex-Verlobte Julius",
            Leon: "der Ehemann Leon",
        };
        //FINAL DECISION
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.FinalDecision);
        await Dejavu.ƒS.update(Dejavu.transitions.pzzle.duration, Dejavu.transitions.pzzle.alpha, Dejavu.transitions.pzzle.edge);
        Dejavu.ƒS.Sound.play(Dejavu.sounds.decision, 0.5, true);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.N1);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.N2);
        if ((Dejavu.dataForSave.lovepoints = 100)) {
            Dejavu.ƒS.Sound.fade(Dejavu.sounds.decision, 0, 1);
            Dejavu.ƒS.Speech.hide();
            await Dejavu.ƒS.Location.show(Dejavu.locations.CircusDreaming);
            await Dejavu.ƒS.update(Dejavu.transitions.swirl.duration, Dejavu.transitions.swirl.alpha, Dejavu.transitions.swirl.edge);
            await Dejavu.ƒS.Character.show(Dejavu.characters.Julius, Dejavu.characters.Julius.pose.angry, Dejavu.ƒS.positionPercent(40, 90));
            await Dejavu.ƒS.update(2);
            await Dejavu.ƒS.Speech.tell(Dejavu.characters.Julius, text.Julius.J1);
            await Dejavu.ƒS.Character.show(Dejavu.characters.Rosalia, Dejavu.characters.Rosalia.pose.traning_sad, Dejavu.ƒS.positionPercent(70, 90));
            await Dejavu.ƒS.update(2);
            await Dejavu.ƒS.Speech.tell(Dejavu.characters.Rosalia, text.Rosalia.R2);
            await Dejavu.ƒS.Speech.tell(Dejavu.characters.Julius, text.Julius.J3);
            await Dejavu.ƒS.Speech.tell(Dejavu.characters.Rosalia, text.Rosalia.R4);
            Dejavu.ƒS.Speech.hide();
            await Dejavu.ƒS.Location.show(Dejavu.locations.FinalDecision);
            await Dejavu.ƒS.update(Dejavu.transitions.swirl.duration, Dejavu.transitions.swirl.alpha, Dejavu.transitions.swirl.edge);
            let ChoiceMurderer = await Dejavu.ƒS.Menu.getInput(ChoicesMurderer, "choices");
            switch (ChoiceMurderer) {
                case ChoicesMurderer.Director:
                    Dejavu.ƒS.Sound.fade(Dejavu.sounds.decision, 0, 1);
                    return "BadEnding";
                case ChoicesMurderer.Julius:
                    Dejavu.ƒS.Sound.fade(Dejavu.sounds.decision, 0, 1);
                    return "GoodEnding";
                case ChoicesMurderer.RosaliasMother:
                    Dejavu.ƒS.Sound.fade(Dejavu.sounds.decision, 0, 1);
                    return "BadEnding";
                case ChoicesMurderer.Leon:
                    Dejavu.ƒS.Sound.fade(Dejavu.sounds.decision, 0, 1);
                    return "BadEnding";
            }
        }
        else {
            let ChoiceMurderer = await Dejavu.ƒS.Menu.getInput(ChoicesMurderer, "choices");
            switch (ChoiceMurderer) {
                case ChoicesMurderer.Director:
                    Dejavu.ƒS.Sound.fade(Dejavu.sounds.decision, 0, 1);
                    return "BadEnding";
                case ChoicesMurderer.Julius:
                    Dejavu.ƒS.Sound.fade(Dejavu.sounds.decision, 0, 1);
                    return "GoodEnding";
                case ChoicesMurderer.RosaliasMother:
                    Dejavu.ƒS.Sound.fade(Dejavu.sounds.decision, 0, 1);
                    return "BadEnding";
                case ChoicesMurderer.Leon:
                    Dejavu.ƒS.Sound.fade(Dejavu.sounds.decision, 0, 1);
                    return "BadEnding";
            }
        }
    }
    Dejavu.finalDecision = finalDecision;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function clownFirst() {
        console.log("divineFirst: starting");
        // SPEECH
        let text = {
            Rosi: {
                R2: "hihi nein danke, auch wenn ich mir sicher bin, dass das ein fantastischer Trick ist, hätten wireine etwas ernstere Frage",
                R5_A: "Oh wow, das ist aber sehr mutig, dich gegen die Familie zu stellen. Meine Urgroßmutter war auch so mutig",
                R7_A: "Ja das war sie...",
                R2_C: "Ja der Mord an meiner Urgroßmutter Rosalia",
                R8_C: "Oh danke, dass sind sehr wichtige Informationen",
            },
            PIC: {
                P5: "Klar! Clowns sind doch die Allwissenden auf einem Zirkus",
                P4_B: "Ehm ich glaube wir haben es verstanden, Danke wir werden bestimmt... mal darauf zurück .... kommen",
                P16: "Wen möchtest du als nächstes Fragen?",
                P17: "Ich glaube aber, dass wir nur noch eine Person fragen können...der Zirkus macht bald zu.",
            },
            Clown: {
                C1: "Halli Hallo liebe Gäste, wollte ihr ein Zaubertrick sehen?",
                C3: "Oh und da kommt ihr als erstes zu mir?",
                C4: "Sonst werde ich hier nicht wirklich ernst genommen",
                C6: " Ach pshhh da werde ich ja ganz rot.",
                C7: "Welche Frage wollt ihr mir denn stellen?",
                C1_A: "Oh nein, ich bin der erste aus der Familie der so etwas macht",
                C2_A: "Mein Opa fand Zirkusse immer ganz schrecklich!",
                C3_A: "Aber Opa Julius weiß nicht, dass mir sein Wissen über Seile hilft, die Luftballons in tolle Figuren zubinden.",
                C4_A: "hihihihi wenn er das wüsste, würde er sich in seinem Grab umdrehen",
                C6_A: "Deine Urgroßmutter war bestimmt eine tolle Frau!",
                C8_A: "So jetzt muss ich aber weiter! Tschüsseli",
                C1_B: "Ja als kleines Kind fand ich es schon immer toll Menschen zum lachen zu bringen... Aber vor kurzem habe ich meine Leidenschaft für Finanzen gefunden.",
                C2_B: "Ich möchte mich Selbstständig mache... aber pssst keinem erzählen!",
                C3_B: "Hier ist meine Karte falls ihr mal einen Finanzberater braucht oder jemanden kennt der jemanden braucht oder die jemanden kennen die jemand baucht oder die ...",
                C5_B: "Klar, einen Tipp habe ich aber noch",
                C6_B: "Wenn ihr die Wahrsagerin fragt, würde ich euch nicht empfehlen sie in die Vergangenheit schauen zu lassen. Das endet nie gut für alle beteiligten",
                C1_C: "hmm ein Mord?",
                C3_C: "ich bin leider noch nicht lange bei diesem Zirkus... lass mich überlegen",
                C4_C: "Ich glaube ich habe mal die Wahrsagerin und den Direktor mit einander sprechen lassen, dass sie mich eigentlich gar nicht einstellen wollen, weil ich von außerhalb komme",
                C5_C: "Die hatten wohl früher mal ein Problem mit einer Seiltänzerin die für Schwierigkeiten gesorgt hat.",
                C6_C: "Irgendwas mit... Sie musste beseitigt werden.",
                C7_C: "Ich habe mir nie darüber Gedanken gemacht... war nur froh, dass sie mich doch eingestellt haben",
                C9_C: "hihi gerne... auf Wiedersehen",
            },
        };
        // CHOICES
        let choicesAskingClown = {
            murder: "Weißt du etwas von einem Mord im Zirkus?",
            job: "Wolltest du schon immer Clown werden?",
            family: "Reist deine Familie schon länger mit diesem Zirkus mit?",
        };
        let choicesAskingSeconde = {
            Divine: "Wahrsagerin",
            Director: "Direktor",
        };
        //ClueOne
        Dejavu.ƒS.Speech.hide();
        Dejavu.ƒS.Sound.play(Dejavu.sounds.circus, 0.5, true);
        await Dejavu.ƒS.Location.show(Dejavu.locations.Clownroom);
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Character.show(Dejavu.characters.PIC, Dejavu.characters.PIC.pose.normal, Dejavu.ƒS.positionPercent(70, 90));
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Character.show(Dejavu.characters.Clown, Dejavu.characters.Clown.pose.schelmisch, Dejavu.ƒS.positionPercent(30, 90));
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C1);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.R2);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C3);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C4);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.P5);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C6);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C7);
        let choiceAskingClown = await Dejavu.ƒS.Menu.getInput(choicesAskingClown, "choices");
        switch (choiceAskingClown) {
            case choicesAskingClown.family:
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C1_A);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C2_A);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C3_A);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C4_A);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.R5_A);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C6_A);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.R7_A);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C8_A);
                break;
            case choicesAskingClown.job:
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C1_B);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C2_B);
                await Dejavu.ƒS.Location.show(Dejavu.locations.ClownroomCard);
                await Dejavu.ƒS.update(0);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C3_B);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.P4_B);
                await Dejavu.ƒS.Location.show(Dejavu.locations.Clownroom);
                await Dejavu.ƒS.update(0);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C5_B);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C6_B);
                break;
            case choicesAskingClown.murder:
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C1_C);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.R2_C);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C3_C);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C4_C);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C5_C);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C6_C);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C7_C);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.R8_C);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Clown, text.Clown.C9_C);
                break;
        }
        await Dejavu.ƒS.Character.hide(Dejavu.characters.Clown);
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.CircusNow);
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.P16);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.P17);
        let choiceAskingSeconde = await Dejavu.ƒS.Menu.getInput(choicesAskingSeconde, "choices");
        switch (choiceAskingSeconde) {
            case choicesAskingSeconde.Divine:
                return "DivineSeconde";
            case choicesAskingSeconde.Director:
                return "DirectorSeconde";
        }
    }
    Dejavu.clownFirst = clownFirst;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function clownSeconde() {
        console.log("clownSeconde: starting");
    }
    Dejavu.clownSeconde = clownSeconde;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function directorFirst() {
        console.log("directorFirst: starting");
        // SPEECH
        let text = {
            Rosi: {
                R1: "Entschuldigung Herr Direktor?",
                R3: "Ich und mein Freund sind auf der Suche herauszufinden was mit meiner Urgroßmutter Rosalia passiert ist",
                R4: "Soweit wir wissen, war sie hier früher mal Seiltänzerin, ich habe auch ein Foto von ihr... warten Sie einen Moment",
            },
            PIC: {
                P7: "Wir wollen wirklich nicht in ihren Angelegenheiten schnüffeln, wir möchten nur herausfinden wer Rosis Urgroßmutter umgebracht hat?",
            },
            Director: {
                D2: "Einen wunderschönen Guten Tag liebe Gäste, wie kann ich ihnen weiterhelfen?",
                D5: "Das brauchst du mir gar nicht zeigen... Ich weiß nicht von wem ihr redet.",
                D6: "und jetzt verschwindet aus meinem Zirkus, solche Schnüffler kann ich gar nicht leiden!",
                D8: "ABER DAS IST MEINE ANGELEGENHEIT!",
                D9: "Da habt ihr euch wohl für die falsche Person entschieden",
            },
        };
        // ACT FOURTH
        Dejavu.ƒS.Speech.hide();
        Dejavu.ƒS.Sound.play(Dejavu.sounds.circus, 0.5, true);
        await Dejavu.ƒS.Location.show(Dejavu.locations.CircusNow);
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Character.show(Dejavu.characters.PIC, Dejavu.characters.PIC.pose.unsure, Dejavu.ƒS.positionPercent(30, 90));
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.R1);
        await Dejavu.ƒS.Character.show(Dejavu.characters.Director, Dejavu.characters.Director.pose.smiling, Dejavu.ƒS.positionPercent(70, 90));
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Director, text.Director.D2);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.R3);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.R4);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Director, text.Director.D5);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Director, text.Director.D6);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.P7);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Director, text.Director.D8);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Director, text.Director.D9);
        if (Dejavu.dataForSave.lifepoints >= 10) {
            return "ArrivingCircus";
        }
        else {
            return "BadEnding";
        }
    }
    Dejavu.directorFirst = directorFirst;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function directorSeconde() {
        console.log("directorSeconde: starting");
    }
    Dejavu.directorSeconde = directorSeconde;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function divineFirst() {
        console.log("divineFirst: starting");
        // SPEECH
        let text = {
            Rosi: {
                R1: "Hallo ist hier jemand?",
                R4: " Wie bitte?... Ich kenne sie doch garnicht?",
                R11_A: "Was ist denn jetzt los?",
                P10_B: "Oh mein Gott du hast recht... irgendwie kam das einfach so aus mir raus",
                P14_B: "Oh.. hihihi... danke",
                R3_C: "Ja gerne",
                R9_C: "Vielen Dank, das hilft uns schon sehr viel weiter!",
            },
            PIC: {
                P6: "Nein nein, ihr Name ist Rosalia... sie haben Recht... aber woher wissen sie das?",
                P12_A: "Ich glaube die ist verrückt!",
                P9_B: "Rosi, das kann doch nicht die wichtigste Frage gerade sein?",
                P15_B: "<i>erötet</i>",
                P16: "Wen möchtest du als nächstes Fragen?",
                P17: "Ich glaube aber, dass wir nur noch eine Person fragen können...der Zirkus macht bald zu.",
            },
            Divine: {
                D2: "Hallo liebe Gäste, kommt herein.",
                D3: "Huch, Rosalia was machst du denn hier?",
                D5: "Oh Entschuldigung, da muss ich mich wohl vertan haben.",
                D7: "Ich weiß viel... Das Wissen meiner Ahnen wurde an mich weitergegeben.",
                D8: "Ihr könnt mir genau eine Frage stellen... also überlegt gut",
                D9_A: "Ich sehe einen jungen Mann... viel Hass steckt in ihm drin... sehr viel Hass....Er ist umgeben von Seilen...Oh da bricht die Verbindung ab....",
                D10_A: "Da will wohl jemand nicht, dass ich da weiter in der Vergangenheit schnüffle",
                D13_A: "HÖRT AUF IN DER VERGANGENHEIT HERUM ZU WÜHLEN! SONST SEIT IHR DIE NÄCHSTEN..... ODER SOLLTE ICH EHER SAGEN IHR SEIT DIE NÄCHSTEN",
                D11_B: "man wählt immer das zuerst was einem am wichtigsten ist",
                D12_B: "Lass uns mal schauen, was die Kugel sagt",
                D13_B: "Oh, wie es scheint hast du deine große Liebe schon kennen gelernt... und ich glaube ihr seit bereits dabei ein großes Abenteuer zu erleben.... Du scheinst deiner Urgroßmutter doch ähnlicher zu sein als du glaubst",
                D16_B: "So ihr habt eure Frage gewählt. Viel Spaß noch bei eurem Besuch unseres Zirkus.",
                D1_C: "hmm wenn du möchtest kann ich dir die Karten lesen lassen.",
                D2_C: "Ich habe das Gefühl, dass du und Rosalia eine enge Verbindung zueinander habt.",
                D4_C: ".....",
                D5_C: "hmm lass uns mal gemeinsam schauen... die erste Karte zeigt, dass du nicht alleine bist und jemand über dich wacht.",
                D6_C: "Das können viele sein, aber ich spüre eine starke Kraft und Energie die von Rosalia kommt.",
                D7_C: "Die zweite Karte ist die Liebes Karte... aber mit dem Narr verbunden bedeutet das, dass es eine Unerwiderte Liebe war. ",
                D8_C: "Eine unerwiderte Liebe ist kann zu viel Schmerz und Bösem führen... auch ein Mord wäre hier in Betracht zu ziehen.",
                D10_C: "Gerne! und jetzt raus ihr zwei Abenteurer!",
            },
        };
        // CHOICES
        let choicesAskingDivine = {
            trueLove: "Wer ist meine große Liebe",
            lookingInPast: "Kannst du zurück an den Todestag meiner Urgroßmutter?",
            reasonOfDeath: "Weißt du warum Rosalia umgebracht wurde?",
        };
        let choicesAskingSeconde = {
            Clown: "Clown",
            Director: "Direktor",
        };
        //ClueOne
        Dejavu.ƒS.Speech.hide();
        Dejavu.ƒS.Sound.play(Dejavu.sounds.divineroom, 0.5, true);
        await Dejavu.ƒS.Location.show(Dejavu.locations.Divineroom);
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Character.show(Dejavu.characters.PIC, Dejavu.characters.PIC.pose.unsure, Dejavu.ƒS.positionPercent(70, 90));
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.R1);
        await Dejavu.ƒS.Character.show(Dejavu.characters.Diviner, Dejavu.characters.Diviner.pose.normal, Dejavu.ƒS.positionPercent(30, 90));
        await Dejavu.ƒS.update(1);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Diviner, text.Divine.D2);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Diviner, text.Divine.D3);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.R4);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Diviner, text.Divine.D5);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.P6);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Diviner, text.Divine.D7);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Diviner, text.Divine.D8);
        let choiceAskingDivine = await Dejavu.ƒS.Menu.getInput(choicesAskingDivine, "choices");
        switch (choiceAskingDivine) {
            case choicesAskingDivine.lookingInPast:
                Dejavu.ƒS.Sound.fade(Dejavu.sounds.divineroom, 0, 1);
                Dejavu.ƒS.Sound.play(Dejavu.sounds.badEnding, 0.5, true);
                await Dejavu.ƒS.Character.hide(Dejavu.characters.Diviner);
                await Dejavu.ƒS.Character.show(Dejavu.characters.Diviner, Dejavu.characters.Diviner.pose.trance, Dejavu.ƒS.positionPercent(30, 90));
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Diviner, text.Divine.D9_A);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Diviner, text.Divine.D10_A);
                Dejavu.ƒS.Sound.play(Dejavu.sounds.divineLaughing, 0.5);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.R11_A);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.P12_A);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Diviner, text.Divine.D13_A);
                await Dejavu.ƒS.Location.show(Dejavu.locations.Black);
                await Dejavu.ƒS.update(Dejavu.transitions.swirl.duration, Dejavu.transitions.swirl.alpha, Dejavu.transitions.swirl.edge);
                Dejavu.ƒS.Speech.hide();
                return "BadEnding";
            case choicesAskingDivine.reasonOfDeath:
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Diviner, text.Divine.D1_C);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Diviner, text.Divine.D2_C);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.R3_C);
                await Dejavu.ƒS.Location.show(Dejavu.locations.DivineroomTarot);
                await Dejavu.ƒS.update(0);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Diviner, text.Divine.D4_C);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Diviner, text.Divine.D5_C);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Diviner, text.Divine.D6_C);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Diviner, text.Divine.D7_C);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Diviner, text.Divine.D8_C);
                await Dejavu.ƒS.Location.show(Dejavu.locations.Divineroom);
                await Dejavu.ƒS.update(0);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.R9_C);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Diviner, text.Divine.D10_C);
                Dejavu.ƒS.Sound.fade(Dejavu.sounds.divineroom, 0, 1);
                break;
            case choicesAskingDivine.trueLove:
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.P9_B);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.P10_B);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Diviner, text.Divine.D11_B);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Diviner, text.Divine.D12_B);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Diviner, text.Divine.D13_B);
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.P14_B);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.P15_B);
                await Dejavu.ƒS.Speech.tell(Dejavu.characters.Diviner, text.Divine.D16_B);
                Dejavu.ƒS.Sound.fade(Dejavu.sounds.divineroom, 0, 1);
                break;
        }
        await Dejavu.ƒS.Character.hide(Dejavu.characters.Diviner);
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.CircusNow);
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.P16);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.PIC, text.PIC.P17);
        let choiceAskingSeconde = await Dejavu.ƒS.Menu.getInput(choicesAskingSeconde, "choices");
        switch (choiceAskingSeconde) {
            case choicesAskingSeconde.Clown:
                return "ClownSeconde";
            case choicesAskingSeconde.Director:
                return "DirectorSeconde";
        }
    }
    Dejavu.divineFirst = divineFirst;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function divineSeconde() {
        console.log("divineSeconde: starting");
    }
    Dejavu.divineSeconde = divineSeconde;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function badEnding() {
        console.log("BadEnding scene: starting");
        Dejavu.ƒS.Character.hideAll();
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.Newspaper);
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Text.print("<div class='novelpage'><h1>VERMISST</h1>Seit Samstag 25.06.2022 werden zwei Jugendliche vermisst. <br> Sie wurden zuletzt in dem Zikrus in der Stadt gesehen. <br> Wenn Sie etwas wissen, rufen sie bitte 02934/290342 an!</div>");
    }
    Dejavu.badEnding = badEnding;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function goodEnding() {
        console.log("GoodEnding scene: starting");
        Dejavu.ƒS.Character.hideAll();
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.Graveyard);
        await Dejavu.ƒS.update(2);
        Dejavu.ƒS.Text.addClass("novelpageDiary");
        await Dejavu.ƒS.Text.print("<div class='novelpage'>Hallo Opa <br> Ich habe herausgefunden, was mit deiner Mutter passiert ist. Es war Julius ihr Ex-Verlobter. Ich denke, dass er eifersüchtig war, weil Rosalia in für deinen Vater verlassen hat. <br> Ich vermisse dich <br> Deine Rosi</div>");
    }
    Dejavu.goodEnding = goodEnding;
})(Dejavu || (Dejavu = {}));
//# sourceMappingURL=Template.js.map