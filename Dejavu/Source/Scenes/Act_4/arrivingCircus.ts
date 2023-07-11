namespace Dejavu {
  export async function arrivingCircus(): ƒS.SceneReturn {
    console.log("ArrivingCircus scene: starting");

    // SPEECH
    let text = {
      PIC: {
        A3_S14_02: "Echt? ich war früher immer mit meiner Familie",
        A3_S14_04:
          "Beim Zirkus sind immer die spannendsten Menschen.. Ich würde sagen, dass wir die Leute hier befragen, ob sie etwas von einem Tod einer Seiltänzerin wissen",
        A3_S14_06: "Wen wollen wir als erstes Fragen?",
      },
      Rosi: {
        A3_S14_01: "Wow ich war noch nie im Zirkus.",
        A3_S14_03: "Und wie wollen wir hier jetzt etwas herausfinden?",
        A3_S14_05:
          "Ich bin mir unsicher, ich glaube nicht, dass jeder auf diese Frage gut reagiert... aber ich vertraue dir",
      },
    };

    // CHOICES
    let choicesAskingFirst = {
      Clown: "Clown",
      Director: "Direktor",
      Divine: "Wahrsagerin",
    };

    //Fourth Act
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.CircusNow);
    await ƒS.update(2);
    ƒS.Sound.play(sounds.circus, 0.5, true);
    await ƒS.Character.show(
      characters.PIC,
      characters.PIC.pose.normal,
      ƒS.positionPercent(50, 90)
    );
    await ƒS.update(2);
    await ƒS.Speech.tell("Rosi", text.Rosi.A3_S14_01);
    await ƒS.Speech.tell(characters.PIC, text.PIC.A3_S14_02);
    await ƒS.Speech.tell("Rosi", text.Rosi.A3_S14_03);
    await ƒS.Speech.tell(characters.PIC, text.PIC.A3_S14_04);
    await ƒS.Speech.tell("Rosi", text.Rosi.A3_S14_05);
    await ƒS.Speech.tell(characters.PIC, text.PIC.A3_S14_06);
    let choiceAskingFirst = await ƒS.Menu.getInput(choicesAskingFirst,"choices");
    switch (choiceAskingFirst) {
      case choicesAskingFirst.Clown:
        dataForSave.lifepoints += 10;
        handleFlower();
        ƒS.Sound.fade(sounds.circus, 0, 1);
        await ƒS.Character.hide(characters.PIC);
        return "ClownFirst";
      case choicesAskingFirst.Director:
        dataForSave.lifepoints += 10;
            handleFlower();
        ƒS.Sound.fade(sounds.circus, 0, 1);
        await ƒS.Character.hide(characters.PIC);
        return "DirectorFirst";
      case choicesAskingFirst.Divine:
        dataForSave.lifepoints -= 10;
        handleFlower();
        dataForSave.lovepoints += 20;
        ƒS.Sound.fade(sounds.circus, 0, 1);
        await ƒS.Character.hide(characters.PIC);
        return "DivineFirst";
    }
  }
}
