namespace Dejavu {
  export async function clueOne(): ƒS.SceneReturn {
    console.log("clue One: starting");

    // SPEECH
    let text = {
      Rosalia: {
        R1:
        "Du hast mir nicht vorzuschreiben in wen ich mich verliebe!",
        R3:
        "Ich habe mir nicht ausgesucht in welche Familie ich geboren werde! Aber ich werde mir meinen Ehemann selber aussuchen!",
        R5:
        "Pff der hat doch keine Ahnung von Liebe!... Ich werde gehen, wenn du das nicht akzeptierst",
        R7:
        "Darauf würde ich nicht wetten!",
     
      },
      RosaliasMother: {
        M2:
        "Es geht doch hier auch nicht um Liebe!... Sondern um deine Verpflichtung gegenüber der Familie",
        M4:
        "Wenn du dich nicht sofort beruhigst und Julius heiratest will ich dich nie wieder mehr hier sehen! .... Wir haben euch einander versprochen und Julius liebt dich!",
        M6:
        "Dann verschwinde doch, aber du wirst wieder zurück kommen da bin ich mir sicher!",
  
      },
    };

    //ClueOne
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.MansionDreaming);
    await ƒS.update(2);
    await ƒS.Character.show(characters.Rosalia,characters.Rosalia.pose.angry,ƒS.positionPercent(80, 90));
    await ƒS.update(0.5);
    await ƒS.Speech.tell(characters.Rosalia, text.Rosalia.R1);
    await ƒS.Character.show(characters.RosaliasMother,characters.RosaliasMother.pose.angry,ƒS.positionPercent(30, 90));
    await ƒS.update(0.5);
    await ƒS.Speech.tell(characters.RosaliasMother, text.RosaliasMother.M2);
    await ƒS.Speech.tell(characters.Rosalia, text.Rosalia.R3);
    await ƒS.Speech.tell(characters.RosaliasMother, text.RosaliasMother.M4);
    await ƒS.Speech.tell(characters.Rosalia, text.Rosalia.R5);
    await ƒS.Speech.tell(characters.RosaliasMother, text.RosaliasMother.M6);
    await ƒS.Speech.tell(characters.Rosalia, text.Rosalia.R7);
    await ƒS.Character.hide(characters.RosaliasMother);
    await ƒS.update(0.5);
    await ƒS.Character.hide(characters.Rosalia);
    await ƒS.update(0.5);
    await ƒS.Location.show(locations.Black);
    await ƒS.update(2);
    ƒS.Speech.hide();
  }
}
