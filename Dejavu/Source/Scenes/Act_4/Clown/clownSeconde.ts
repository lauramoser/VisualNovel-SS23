namespace Dejavu {
  export async function clownSeconde(): ƒS.SceneReturn {
    console.log("clownSeconde: starting");

    let text = {
      Rosi: {
        R3: "Wir haben gerade die Wahrsagerin gefragt und jetzt wollten wir sie fragen, ob sie etwas über einen Mord eine Seiltänzerin wissen?",
      },
      Clown: {
        C2: "Ahh Hallo liebe Gäste",
        C4: "Aha ihr habt also die Wahrsagerin als erstes gefragt... weil die auch bestimmt mehr weiß als so ein blöder Clown...nicht war?",
        C6: "Jajaj das kannst du der Wahrsagerin erzählen aber nicht mir.... also.... ich weiß nichts von irgend einem Mord oder so etwas..... Und jetzt verschwindet von hier bevor ich den Direktor hole.",
      },
      PIC: {
        P1: "Hallo Herr Clown",
        P5: "Nein nein, wir dachten nur wir können als erstes etwas über die Vergangenheit herausfinden und dann mit ihnen über die Gegenwart."
      }
    };

    ƒS.Speech.hide();
    ƒS.Sound.play(sounds.circus, 0.5, true);
    await ƒS.Location.show(locations.Clownroom);
    await ƒS.update(2);
    await ƒS.Character.show(
      characters.PIC,
      characters.PIC.pose.normal,
      ƒS.positionPercent(70, 90)
    );
    await ƒS.update(2);
    await ƒS.Character.show(
      characters.Clown,
      characters.Clown.pose.schelmisch,
      ƒS.positionPercent(30, 90)
    );
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.PIC, text.PIC.P1);
    await ƒS.Speech.tell(characters.Clown, text.Clown.C2);
    await ƒS.Speech.tell("Rosi", text.Rosi.R3);
    await ƒS.Speech.tell(characters.Clown, text.Clown.C4);
    await ƒS.Speech.tell(characters.PIC, text.PIC.P5);
    await ƒS.Speech.tell(characters.Clown, text.Clown.C6);
    ƒS.Sound.fade(sounds.circus, 0, 1);
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    return "BadEnding";
  }
}
