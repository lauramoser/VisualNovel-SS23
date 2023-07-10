namespace Dejavu {
  export async function finalDecision(): ƒS.SceneReturn {
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
        R2:  "Julius was hast du nur getan?",
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
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.FinalDecision);
    await ƒS.update(
      transitions.pzzle.duration,
      transitions.pzzle.alpha,
      transitions.pzzle.edge
    );
    ƒS.Sound.play(sounds.decision, 0.5, true);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.N1);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.N2);
    if ((dataForSave.lovepoints = 100)) {
      ƒS.Sound.fade(sounds.decision, 0, 1);
      ƒS.Speech.hide();
      await ƒS.Location.show(locations.CircusDreaming);
      await ƒS.update(
        transitions.swirl.duration,
        transitions.swirl.alpha,
        transitions.swirl.edge
      );
      await ƒS.Character.show(characters.Julius,characters.Julius.pose.angry,ƒS.positionPercent(40, 90));
      await ƒS.update(2);
      await ƒS.Speech.tell(characters.Julius, text.Julius.J1);
      await ƒS.Character.show(characters.Rosalia,characters.Rosalia.pose.traning_sad,ƒS.positionPercent(70, 90));
      await ƒS.update(2);
      await ƒS.Speech.tell(characters.Rosalia, text.Rosalia.R2);
      await ƒS.Speech.tell(characters.Julius, text.Julius.J3);
      await ƒS.Speech.tell(characters.Rosalia, text.Rosalia.R4);
      ƒS.Speech.hide();
      await ƒS.Location.show(locations.FinalDecision);
      await ƒS.update(
        transitions.swirl.duration,
        transitions.swirl.alpha,
        transitions.swirl.edge
      );
      let ChoiceMurderer = await ƒS.Menu.getInput(ChoicesMurderer, "choices");
      switch (ChoiceMurderer) {
        case ChoicesMurderer.Director:
          ƒS.Sound.fade(sounds.decision, 0, 1);
          return "BadEnding";
        case ChoicesMurderer.Julius:
          ƒS.Sound.fade(sounds.decision, 0, 1);
          return "GoodEnding";
        case ChoicesMurderer.RosaliasMother:
          ƒS.Sound.fade(sounds.decision, 0, 1);
          return "BadEnding";
        case ChoicesMurderer.Leon:
          ƒS.Sound.fade(sounds.decision, 0, 1);
          return "BadEnding";
      }
    } else {
      let ChoiceMurderer = await ƒS.Menu.getInput(ChoicesMurderer, "choices");
      switch (ChoiceMurderer) {
        case ChoicesMurderer.Director:
          ƒS.Sound.fade(sounds.decision, 0, 1);
          return "BadEnding";
        case ChoicesMurderer.Julius:
          ƒS.Sound.fade(sounds.decision, 0, 1);
          return "GoodEnding";
        case ChoicesMurderer.RosaliasMother:
          ƒS.Sound.fade(sounds.decision, 0, 1);
          return "BadEnding";
        case ChoicesMurderer.Leon:
          ƒS.Sound.fade(sounds.decision, 0, 1);
          return "BadEnding";
      }
    }
  }
}
