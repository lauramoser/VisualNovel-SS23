namespace Dejavu {
  export async function divineFirst(): ƒS.SceneReturn {
    console.log("divineFirst: starting");

    // SPEECH
    let text = {
      Rosi: {
        R1: "Hallo ist hier jemand?",
        R4: " Wie bitte?... Ich kenne sie doch garnicht?",

        R11_A: "Was ist denn jetzt los?",

        P10_B:
          "Oh mein Gott du hast recht... irgendwie kam das einfach so aus mir raus",
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
        D10_A:
          "Da will wohl jemand nicht, dass ich da weiter in der Vergangenheit schnüffle",
        D13_A:
          "HÖRT AUF IN DER VERGANGENHEIT HERUM ZU WÜHLEN! SONST SEIT IHR DIE NÄCHSTEN..... ODER SOLLTE ICH EHER SAGEN IHR SEIT DIE NÄCHSTEN",

        D11_B: "man wählt immer das zuerst was einem am wichtigsten ist",
        D12_B: "Lass uns mal schauen, was die Kugel sagt",
        D13_B:
          "Oh, wie es scheint hast du deine große Liebe schon kennen gelernt... und ich glaube ihr seit bereits dabei ein großes Abenteuer zu erleben.... Du scheinst deiner Urgroßmutter doch ähnlicher zu sein als du glaubst",
        D16_B:
          "So ihr habt eure Frage gewählt. Viel Spaß noch bei eurem Besuch unseres Zirkus.",
        
        D1_C: "hmm wenn du möchtest kann ich dir die Karten lesen lassen.",
        D2_C: "Ich habe das Gefühl, dass du und Rosalia eine enge Verbindung zueinander habt.",
        D4_C: ".....",
        D5_C: "hmm lass uns mal gemeinsam schauen... die erste Karte zeigt, dass du nicht alleine bist und jemand über dich wacht.",
        D6_C: "Das können viele sein, aber ich spüre eine starke Kraft und Energie die von Rosalia kommt.",
        D7_C: "Die zweite Karte ist die Liebes Karte... aber mit dem Narr verbunden bedeutet das, dass es eine Unerwiderte Liebe war. ",
        D8_C: "Eine unerwiderte Liebe kann zu viel Schmerz und Bösem führen... auch ein Mord wäre hier in Betracht zu ziehen.",
        D10_C:  "Gerne! und jetzt raus ihr zwei Abenteurer!",
      
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
    ƒS.Speech.hide();
    ƒS.Sound.play(sounds.divineroom, 0.5, true);
    await ƒS.Location.show(locations.Divineroom);
    await ƒS.update(2);
    await ƒS.Character.show(
      characters.PIC,
      characters.PIC.pose.unsure,
      ƒS.positionPercent(70, 90)
    );
    await ƒS.update(2);
    await ƒS.Speech.tell("Rosi", text.Rosi.R1);
    await ƒS.Character.show(
      characters.Diviner,
      characters.Diviner.pose.normal,
      ƒS.positionPercent(30, 90)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Diviner, text.Divine.D2);
    await ƒS.Speech.tell(characters.Diviner, text.Divine.D3);
    await ƒS.Speech.tell("Rosi", text.Rosi.R4);
    await ƒS.Speech.tell(characters.Diviner, text.Divine.D5);
    await ƒS.Speech.tell(characters.PIC, text.PIC.P6);
    await ƒS.Speech.tell(characters.Diviner, text.Divine.D7);
    await ƒS.Speech.tell(characters.Diviner, text.Divine.D8);
    let choiceAskingDivine = await ƒS.Menu.getInput(
      choicesAskingDivine,
      "choices"
    );
    switch (choiceAskingDivine) {
      case choicesAskingDivine.lookingInPast:
        dataForSave.lifepoints -= 10;
        handleFlower();
        ƒS.Sound.fade(sounds.divineroom, 0, 1);
        ƒS.Sound.play(sounds.badEnding, 0.5, true);
        await ƒS.Character.hide(characters.Diviner);
        await ƒS.Character.show(
          characters.Diviner,
          characters.Diviner.pose.trance,
          ƒS.positionPercent(30, 90)
        );
        await ƒS.Speech.tell(characters.Diviner, text.Divine.D9_A);
        await ƒS.Speech.tell(characters.Diviner, text.Divine.D10_A);
        ƒS.Sound.play(sounds.divineLaughing, 0.5);
        await ƒS.Speech.tell("Rosi", text.Rosi.R11_A);
        await ƒS.Speech.tell(characters.PIC, text.PIC.P12_A);
        await ƒS.Speech.tell(characters.Diviner, text.Divine.D13_A);
        await ƒS.Location.show(locations.Black);
        await ƒS.update(
          transitions.swirl.duration,
          transitions.swirl.alpha,
          transitions.swirl.edge
        );
        ƒS.Speech.hide();
        ƒS.Sound.fade(sounds.badEnding,0,1);
        return "BadEnding";

      case choicesAskingDivine.reasonOfDeath:
        dataForSave.lifepoints += 10;
        handleFlower();
        await ƒS.Speech.tell(characters.Diviner, text.Divine.D1_C);
        await ƒS.Speech.tell(characters.Diviner, text.Divine.D2_C);
        await ƒS.Speech.tell("Rosi", text.Rosi.R3_C);
        await ƒS.Character.hideAll();
        await ƒS.Location.show(locations.DivineroomTarot);
        await ƒS.update(0);
        await ƒS.Speech.tell(characters.Diviner, text.Divine.D4_C);
        await ƒS.Speech.tell(characters.Diviner, text.Divine.D5_C);
        await ƒS.Speech.tell(characters.Diviner, text.Divine.D6_C);
        await ƒS.Speech.tell(characters.Diviner, text.Divine.D7_C);
        await ƒS.Speech.tell(characters.Diviner, text.Divine.D8_C);
        await ƒS.Location.show(locations.Divineroom);
        await ƒS.update(0);
        await ƒS.Character.show(
          characters.Diviner,
          characters.Diviner.pose.trance,
          ƒS.positionPercent(30, 90)
        );
        await ƒS.Character.show(
          characters.PIC,
          characters.PIC.pose.unsure,
          ƒS.positionPercent(70, 90)
        );
        await ƒS.Speech.tell("Rosi", text.Rosi.R9_C);
        await ƒS.Speech.tell(characters.Diviner, text.Divine.D10_C);
        ƒS.Sound.fade(sounds.divineroom, 0, 1);
        break;

      case choicesAskingDivine.trueLove:
        dataForSave.lovepoints += 20;
        dataForSave.lifepoints -= 10;
        handleFlower();
        await ƒS.Speech.tell(characters.PIC, text.PIC.P9_B);
        await ƒS.Speech.tell("Rosi", text.Rosi.P10_B);
        await ƒS.Speech.tell(characters.Diviner, text.Divine.D11_B);
        await ƒS.Speech.tell(characters.Diviner, text.Divine.D12_B);
        await ƒS.Speech.tell(characters.Diviner, text.Divine.D13_B);
        await ƒS.Speech.tell("Rosi", text.Rosi.P14_B);
        await ƒS.Speech.tell(characters.PIC, text.PIC.P15_B);
        await ƒS.Speech.tell(characters.Diviner, text.Divine.D16_B);
        ƒS.Sound.fade(sounds.divineroom, 0, 1);
        break;
    }
    await ƒS.Character.hide(characters.Diviner);
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.CircusNow);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.PIC, text.PIC.P16);
    await ƒS.Speech.tell(characters.PIC, text.PIC.P17);
    let choiceAskingSeconde = await ƒS.Menu.getInput(
      choicesAskingSeconde,
      "choices"
    );
    switch (choiceAskingSeconde) {
      case choicesAskingSeconde.Clown:
        return "ClownSeconde";
      case choicesAskingSeconde.Director:
        dataForSave.lovepoints += 20;
        return "DirectorSeconde";
    }
  }
}
