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

        P11_B: "man wählt immer das zuerst was einem am wichtigsten ist",
        P12_B: "Lass uns mal schauen, was die Kugel sagt",
        P13_B:
          "Oh, wie es scheint hast du deine große Liebe schon kennen gelernt... und ich glaube ihr seit bereits dabei ein großes Abenteuer zu erleben.... Du scheinst deiner Urgroßmutter doch ähnlicher zu sein als du glaubst",
        P16_B:
          "So ihr habt eure Frage gewählt. Viel Spaß noch bei eurem Besuch unseres Zirkus.",
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
      Director: "Director",
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
        return "BadEnding";

      case choicesAskingDivine.reasonOfDeath:
        break;

      case choicesAskingDivine.trueLove:
        await ƒS.Speech.tell(characters.PIC, text.PIC.P9_B);
        await ƒS.Speech.tell("Rosi", text.Rosi.P10_B);
        await ƒS.Speech.tell(characters.Diviner, text.Divine.P11_B);
        await ƒS.Speech.tell(characters.Diviner, text.Divine.P12_B);
        await ƒS.Speech.tell(characters.Diviner, text.Divine.P13_B);
        await ƒS.Speech.tell("Rosi", text.Rosi.P14_B);
        await ƒS.Speech.tell(characters.PIC, text.PIC.P15_B);
        await ƒS.Speech.tell(characters.Diviner, text.Divine.P16_B);
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
        return "DirectorSeconde";
    }
  }
}
