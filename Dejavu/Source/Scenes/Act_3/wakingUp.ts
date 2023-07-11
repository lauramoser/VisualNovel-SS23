namespace Dejavu {
  export async function wakingUp(): ƒS.SceneReturn {
    console.log("wakingUp scene: starting");

    // SPEECH
    let text = {
      Narrator: {
        A3_S11_01: "Nachdem du dich entschieden hast, dieses Abenteuer erst",

        A3_S12_01: "Du rufst PIC an und erzählst im von deinem Traum und deinem Vorhaben, dass Geheimnis von dem Verschwinden deiner Urgroßmutter zu lüften",
      },
      Rosi: {
        A3_S11_01: "W... W...Was.... war das?",
        A3_S11_02: "Mir tut alles weh",
        A3_S11_03: "Das können doch nicht nur Träume sein???",
        A3_S11_04:
          "Das war eindeutig Rosalia die da gefallen ist!... Aber wer war diese dunkle Gestalt?",
        A3_S11_05: "Ich muss herausfinden was wirklich passiert ist!....",
      },
      PIC: {
        A3_S12_01: "Da bin ich sowas von dabei, sollen wir uns gleich treffen?",
      }
    };


    // CHOICES
    let ChoicesDoingNext = {
      withPIC:
        "...aber das schaffe ich nicht alleine, am besten rufe ich " +
        dataForSave.partnerInCrimeName +
        " an",
      alone: "...am besten alleine, das glaubt mir ja niemand!",
      tooLong: "...oder nein, das ist alles schon viel zu lange her",
    };
    let ChoicesMeeting = {
        no:
          "Ich muss mich erstmal von diesem Schreck erholen. ",
        yes: "Ja auf jeden Fall, der Blumengarten?",
      };

    //Third Act
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.Bedroom);
    await ƒS.update(
      transitions.swirl.duration,
      transitions.swirl.alpha,
      transitions.swirl.edge
    );
    ƒS.Sound.play(sounds.wheeze, 0.5, true);
    await ƒS.Speech.tell("Rosi", text.Rosi.A3_S11_01);
    ƒS.Sound.fade(sounds.wheeze, 0, 1);
    await ƒS.Speech.tell("Rosi", text.Rosi.A3_S11_02);
    await ƒS.Speech.tell("Rosi", text.Rosi.A3_S11_03);
    await ƒS.Speech.tell("Rosi", text.Rosi.A3_S11_04);
    await ƒS.Speech.tell("Rosi", text.Rosi.A3_S11_05);

    let ChoiceDoingNext = await ƒS.Menu.getInput(ChoicesDoingNext, "choices");
    switch (ChoiceDoingNext) {
      case ChoicesDoingNext.withPIC:
        dataForSave.lifepoints += 10;
        handleFlower();
        dataForSave.lovepoints += 20;
        await ƒS.Speech.tell(characters.Narrator, text.Narrator.A3_S12_01);
        await ƒS.Speech.tell(characters.PIC, text.PIC.A3_S12_01);
        let ChoiceMeeting = await ƒS.Menu.getInput(ChoicesMeeting, "choices");
        switch (ChoiceMeeting) {
          case ChoicesMeeting.no:
            dataForSave.lifepoints += 10;
            handleFlower();
            return "ClueThree";
          case ChoicesMeeting.yes:
            dataForSave.lifepoints -= 10;
            handleFlower();
            dataForSave.lovepoints += 20;
            return "MakingPlan";
        }
      case ChoicesDoingNext.alone:
        dataForSave.lifepoints -= 10;
        handleFlower();
        return "ClueThree";
      case ChoicesDoingNext.tooLong:
        return "NeutralEnding";
    }
  }
}
