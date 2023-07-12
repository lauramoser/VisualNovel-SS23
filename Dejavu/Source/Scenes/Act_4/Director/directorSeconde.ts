namespace Dejavu {
  export async function directorSeconde(): ƒS.SceneReturn {
    console.log("directorSeconde: starting");

    let text = {
      Rosi: {
        R1: "Entschuldigung Herr Direktor?",
        R3: "Ihre Familie ist bestimmt schon lange Inhaber dieses Zirkus oder?",
        R5: "Wow das klingt nach einer sehr großen Verantwortung",
        R7: "Bei so einer großen Verantwortung müssen sie bestimmt viel erledigen um den Zirkus zusammenzuhalten oder?",
      },
      Director: {
        D2: "Oh Hallo ihr zwei",
        D4: "Aber ja, viele Generationen vor mir haben alles für diesen Zirkus aufgegeben.",
        D6: "Oh ja das ist es auch junge Dame",
        D8: "Aber ja, sehr viel sogar..:",
        D9: "Einmal mussten mein Opa sogar eine Leiche wegbringen.. das war wohl irgend eine verwöhnte Göre, die sich selbst in Schwierigkeiten gebracht hat.",
        D10: "Und die Drecksarbeit hing natürlich am Zirkus Direktor... so wie immer... wahrscheinlich hat sie ihre Seile nicht richtig überprüft und ist dann herunter gefallen... Tja... Außenstehenden sollte man auch keine Bühne geben... was sich mein Opa da nur gedacht hat.",
        D11: "Oh was rede ich denn da nur... ich ... ich muss dann mal weiter",
      },
    };

    // ACT FOURTH
    ƒS.Speech.hide();
    ƒS.Sound.play(sounds.circus, 0.5, true);
    await ƒS.Location.show(locations.CircusNow);
    await ƒS.update(2);
    await ƒS.Character.show(
      characters.PIC,
      characters.PIC.pose.normal,
      ƒS.positionPercent(70, 90)
    );
    await ƒS.update(2);
    await ƒS.Speech.tell("Rosi", text.Rosi.R1);
    await ƒS.Character.show(
      characters.Director,
      characters.Director.pose.smiling,
      ƒS.positionPercent(30, 90)
    );
    await ƒS.Speech.tell(characters.Director, text.Director.D2);
    await ƒS.Speech.tell("Rosi", text.Rosi.R3);
    await ƒS.Speech.tell(characters.Director, text.Director.D4);
    await ƒS.Speech.tell("Rosi", text.Rosi.R5);
    await ƒS.Speech.tell(characters.Director, text.Director.D6);
    await ƒS.Speech.tell("Rosi", text.Rosi.R7);
    await ƒS.Speech.tell(characters.Director, text.Director.D8);
    await ƒS.Speech.tell(characters.Director, text.Director.D9);
    await ƒS.Speech.tell(characters.Director, text.Director.D10);
    await ƒS.Speech.tell(characters.Director, text.Director.D11);
    ƒS.Sound.fade(sounds.circus,0 , 1);
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    return "FinalDecision"
  }
}
