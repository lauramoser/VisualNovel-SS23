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
                angry: "/Dejavu/Images/Characters/Director/Direktor_angry.png",
            },
        },
        RosaliasMother: {
            name: "Rosalias Mother",
            origin: Dejavu.ƒS.ORIGIN.BOTTOMCENTER,
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
            { scene: Dejavu.firstMorning, name: "Arriving and Finding Diary" },
            { scene: Dejavu.arrivingAtHome, id: "ArrivingAtHome", name: "Back from the Flowergarden" },
            { scene: Dejavu.meetingPIC, id: "MeetingPIC", name: "Meeting your PIC" },
            //Act three
            //Act four
            //Endings
            { scene: Dejavu.badEnding, id: "BadEnding", name: "bad Ending" },
        ];
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
        await Dejavu.ƒS.Location.show(Dejavu.locations.MansionDreaming);
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Character.show(Dejavu.characters.Rosalia, Dejavu.characters.Rosalia.pose.angry, Dejavu.ƒS.positionPercent(80, 90));
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
        await Dejavu.ƒS.Location.show(Dejavu.locations.Black);
        await Dejavu.ƒS.update(2);
        Dejavu.ƒS.Speech.hide();
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
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A1_S1_01);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A1_S1_02);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A1_S1_03);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A1_S1_04);
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
        //Transition? Bild verschwommen mit Sound von zusammenpacken  await ƒS.Character.hideAll();
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A1_S4_01);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A1_S4_02);
        // Item Tagebuch
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
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_06_A);
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
                await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A1_S5_06_A);
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
                A2_S1_01: "Du ziehst dich an um runter zu deiner Familie zu gehen",
            },
            Rosi: {
                A2_S1_03: "Ehm ja ich denke",
            },
            Mom: {
                A2_S1_02: "Guten Morgen Rosi, hast du gut geschlafen?",
                A2_S1_04: "Soll ich dir etwas zum Frühstück vorbereiten?",
            },
        };
        // CHOICES
        let choicesbreakfast = {
            nobreakfast: "Nein danke, ich habe gerade keinen großen Hunger",
            apple: "nur einen Apfel bitte",
            egg: "Ja gerne, würdest du mir ein Spiegelei zubereiten?",
        };
        //Zweiter Akt
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.Kitchen);
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A2_S1_01);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A2_S1_02);
        await Dejavu.ƒS.Speech.tell("Rosi", text.Rosi.A2_S1_03);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Mom, text.Mom.A2_S1_04);
        let choicebreakfast = await Dejavu.ƒS.Menu.getInput(choicesbreakfast, "choices");
        switch (choicebreakfast) {
            case choicesbreakfast.egg:
                Dejavu.dataForSave.lifepoints -= 10;
                return "";
            case choicesbreakfast.apple:
                Dejavu.dataForSave.lifepoints += 10;
                break;
            case choicesbreakfast.nobreakfast:
        }
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
                A2_S5_14: "Oh hi <br>",
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
        //Zweiter Akt
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.Bedroom);
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Speech.tell(Dejavu.characters.Narrator, text.Narrator.A2_S2_01);
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
                let choiceDraw1 = await Dejavu.ƒS.Menu.getInput(choicesDraw, "choices");
                switch (choiceDraw1) {
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
            case choicesBreakfast.apple || choicesBreakfast.nobreakfast:
                Dejavu.dataForSave.lifepoints += 10;
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
                let choiceDraw2 = await Dejavu.ƒS.Menu.getInput(choicesDraw, "choices");
                switch (choiceDraw2) {
                    case choicesDraw.portrait:
                        Dejavu.dataForSave.lifepoints -= 10;
                        break;
                    case choicesDraw.bee:
                        Dejavu.dataForSave.lifepoints += 10;
                        break;
                }
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
        // CHOICES
    }
    Dejavu.meetingPIC = meetingPIC;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function neutralEnding() {
        console.log("neutralEnding scene: starting");
        Dejavu.ƒS.Character.hideAll();
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.livingroom);
        await Dejavu.ƒS.update(2);
        Dejavu.ƒS.Text.addClass("novelpage");
        await Dejavu.ƒS.Text.print("Hi");
    }
    Dejavu.neutralEnding = neutralEnding;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function badEnding() {
        console.log("BadEnding scene: starting");
        Dejavu.ƒS.Character.hideAll();
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.livingroom);
        await Dejavu.ƒS.update(2);
        await Dejavu.ƒS.Text.print("<div class='newspaper'><h1>THEFT AT IRIS HILL MANOR</h1>At yesterday's auction, a very expensive and luxurious red diamond necklace disappeared!<br><br>It all happened during a blackout. Although the doors automatically closed with the electricity shortage and the thief technically still had to be in the building, the police were not able to find the criminal.</div>");
    }
    Dejavu.badEnding = badEnding;
})(Dejavu || (Dejavu = {}));
var Dejavu;
(function (Dejavu) {
    async function goodEnding() {
        console.log("GoodEnding scene: starting");
        Dejavu.ƒS.Character.hideAll();
        Dejavu.ƒS.Speech.hide();
        await Dejavu.ƒS.Location.show(Dejavu.locations.livingroom);
        await Dejavu.ƒS.update(2);
    }
    Dejavu.goodEnding = goodEnding;
})(Dejavu || (Dejavu = {}));
//# sourceMappingURL=Template.js.map