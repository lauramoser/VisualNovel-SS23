namespace Dejavu {
  export async function directorFirst(): ƒS.SceneReturn {
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
    ƒS.Speech.hide();
    ƒS.Sound.play(sounds.circus, 0.5, true);
    await ƒS.Location.show(locations.CircusNow);
    await ƒS.update(2);
    await ƒS.Character.show(
      characters.PIC,
      characters.PIC.pose.unsure,
      ƒS.positionPercent(70, 90)
    );
    await ƒS.update(2);
    await ƒS.Speech.tell("Rosi", text.Rosi.R1);
    await ƒS.Character.show(
      characters.Director,
      characters.Director.pose.smiling,
      ƒS.positionPercent(30, 90)
    );
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Director, text.Director.D2);
    await ƒS.Speech.tell("Rosi", text.Rosi.R3);
    await ƒS.Speech.tell("Rosi", text.Rosi.R4);
    await ƒS.Speech.tell(characters.Director, text.Director.D5);
    await ƒS.Speech.tell(characters.Director, text.Director.D6);
    await ƒS.Speech.tell(characters.PIC, text.PIC.P7);
    await ƒS.Speech.tell(characters.Director, text.Director.D8);
    await ƒS.Speech.tell(characters.Director, text.Director.D9);
    if (dataForSave.lifepoints == 100) {
      await ƒS.Character.hide(characters.Director);
      await ƒS.Character.hide(characters.PIC);
      ƒS.Speech.hide();
      return "ArrivingCircus";
    } else {
      await ƒS.Character.hide(characters.Director);
      await ƒS.Character.hide(characters.PIC);
      ƒS.Speech.hide();
      return "BadEnding";
    }
  }
}
