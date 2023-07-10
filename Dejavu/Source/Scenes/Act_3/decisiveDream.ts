namespace Dejavu {
  export async function decisiveDream(): ƒS.SceneReturn {
    console.log("desisiveDream scene: starting");

    // SPEECH
    let text = {
      Narrator: {
        A3_S10_03: "..........",
      },
      Rosalia: {
        A3_S10_01:
          "Ich fühle mich heute richtig gut, das wird eine super Show!",
        A3_S10_02:
          "Bevor die Gäste kommen übe ich noch einmal die letzte Drehung",
        A3_S10_04: "Hilfe....Hilfe",
      },
      Unknown: {
        A3_S10_05:
          "So wie du mit den Gefühlen anderer umgehst, hast du keine Hilfe verdient!",
      },
    };

    //Third Act
    ƒS.Speech.hide();
    ƒS.Sound.play(sounds.dejavu, 0.5, true);
    await ƒS.Location.show(locations.CircusDreaming);
    await ƒS.update(2);
    await ƒS.Character.show(
      characters.Rosalia,
      characters.Rosalia.pose.training_confident,
      ƒS.positionPercent(20, 90)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Rosalia, text.Rosalia.A3_S10_01);
    await ƒS.Speech.tell(characters.Rosalia, text.Rosalia.A3_S10_02);
    await ƒS.Character.hide(characters.Rosalia);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.A3_S10_03);
    ƒS.Sound.fade(sounds.dejavu, 0, 1);
    ƒS.Sound.play(sounds.RosaliaScreaming, 0.5);
    ƒS.Sound.play(sounds.fallingDown, 0.5);
    ƒS.Sound.play(sounds.dejavu, 0.5, true);
    await ƒS.Character.show(characters.Rosalia,characters.Rosalia.pose.traning_sad,ƒS.positionPercent(50, 90));
    await ƒS.update(0);
    await ƒS.Speech.tell("Rosalia flüsternd", text.Rosalia.A3_S10_04);
    await ƒS.Speech.tell("???", text.Unknown.A3_S10_05);
    await ƒS.Character.hide(characters.Rosalia);
    ƒS.Sound.fade(sounds.dejavu, 0, 1);
    await ƒS.Location.show(locations.Black);
    await ƒS.update(2);
    ƒS.Speech.hide();
    return "WakingUp";
  }
}
